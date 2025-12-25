#!/usr/bin/env bun

import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';

const ORIGINAL_DIR = path.join(process.cwd(), 'original');
const DOCS_DIR = path.join(process.cwd(), 'docs');
const STATIC_DIR = path.join(process.cwd(), 'static');

interface ConvertedPage {
  title: string;
  sidebarPosition: number;
  answer?: string;
  content: string;
  question?: string;
  chapterTopics?: string;
  images: string[];
}

// HTML entity replacements
const HTML_ENTITIES: Record<string, string> = {
  '&#8212;': '—',
  '&#8211;': '–',
  '&#160;': ' ',
  '&nbsp;': ' ',
  '&lt;': '<',
  '&gt;': '>',
  '&amp;': '&',
  '&quot;': '"',
  '&apos;': "'",
};

function decodeHtmlEntities(text: string): string {
  let result = text;
  for (const [entity, replacement] of Object.entries(HTML_ENTITIES)) {
    result = result.replace(new RegExp(entity, 'g'), replacement);
  }
  return result;
}

function htmlToMarkdown($: cheerio.CheerioAPI, element: any, currentChapter?: string, insideTable = false): string {
  if (!element) return '';
  
  const $el = $(element);
  const tagName = $el.length > 0 ? $el[0].tagName?.toLowerCase() : null;
  
  if (!tagName) {
    return $el.text();
  }

  switch (tagName) {
    case 'h1':
      return `# ${$el.text().trim()}\n\n`;
    case 'h2':
      return `## ${$el.text().trim()}\n\n`;
    case 'h3':
      return `## ${$el.text().trim()}\n\n`;
    case 'h4':
      return `### ${$el.text().trim()}\n\n`;
    case 'p':
      return `${processInlineContent($, $el, currentChapter)}\n\n`;
    case 'b':
    case 'strong':
      return `**${$el.text().trim()}**`;
    case 'i':
    case 'em':
      return `*${$el.text().trim()}*`;
    case 'code':
    case 'tt':
      let codeText = $el.text().trim();
      if (insideTable) {
        // Escape comparison operators that MDX would parse as JSX in table cells
        codeText = codeText
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      return `\`${codeText}\``;
    case 'sub':
      return `<sub>${$el.text().trim()}</sub>`;
    case 'sup':
      return `<sup>${$el.text().trim()}</sup>`;
    case 'pre':
      const codeContent = $el.text();
      if (insideTable) {
        // Can't use triple backticks inside table cells - use HTML entities
        return codeContent
          .replace(/\{/g, '&#123;')
          .replace(/\}/g, '&#125;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      // Check if it looks like MIPS assembly
      const isMips = codeContent.includes('$') || codeContent.includes('ori') || codeContent.includes('addu');
      return `\`\`\`${isMips ? 'mips' : ''}\n${codeContent}\n\`\`\`\n\n`;
    case 'table':
      // Convert HTML table to markdown
      let tableResult = '\n';
      const rows: string[][] = [];
      $el.find('tr').each((_, tr) => {
        const cells: string[] = [];
        $(tr).find('th, td').each((_, cell) => {
          const $cell = $(cell);
          let cellText = processInlineContent($, $cell, currentChapter, true).trim();
          
          // Only escape pipe for markdown table syntax
          cellText = cellText.replace(/\|/g, '\\|');
          
          cells.push(cellText || ' ');
        });
        rows.push(cells);
      });
      
      if (rows.length > 0) {
        const colCount = rows[0].length;
        // Header row
        tableResult += '| ' + rows[0].join(' | ') + ' |\n';
        // Separator
        tableResult += '| ' + Array(colCount).fill('---').join(' | ') + ' |\n';
        // Data rows
        for (let i = 1; i < rows.length; i++) {
          tableResult += '| ' + rows[i].join(' | ') + ' |\n';
        }
      }
      return tableResult + '\n';
    case 'ul':
    case 'ol':
      const items: string[] = [];
      $el.find('> li').each((_, li) => {
        const itemText = processInlineContent($, $(li), currentChapter);
        items.push(`- ${itemText}`);
      });
      return items.join('\n') + '\n\n';
    case 'li':
      return processInlineContent($, $el, currentChapter);
    case 'textarea':
      // Convert textarea to code block
      const textareaContent = $el.text();
      return `\`\`\`\n${textareaContent}\n\`\`\`\n\n`;
    case 'blockquote':
      // Check if blockquote contains a textarea - if so, convert to code block
      const textarea = $el.find('textarea');
      if (textarea.length) {
        const textContent = textarea.text();
        return `\`\`\`\n${textContent}\n\`\`\`\n\n`;
      }
      const quoteContent = processInlineContent($, $el, currentChapter);
      return `> ${quoteContent.replace(/\n/g, '\n> ')}\n\n`;
    case 'br':
      return '\n';
    case 'figure':
      const img = $el.find('img').first();
      const figcaption = $el.find('figcaption');
      if (img.length) {
        const src = img.attr('src') || '';
        const alt = img.attr('alt') || '';
        const caption = figcaption.text().trim();
        let result = `![${alt}](${src})`;
        if (caption) {
          // Handle <br> tags in caption
          const captionText = figcaption.html() || caption;
          const cleanCaption = captionText.replace(/<br\s*\/?>/gi, ' ').trim();
          result += `\n\n*${decodeHtmlEntities(cleanCaption)}*`;
        }
        return result + '\n\n';
      }
      return '';
    case 'img':
      const imgSrc = $el.attr('src') || '';
      const imgAlt = $el.attr('alt') || '';
      return `![${imgAlt}](${imgSrc})\n\n`;
    case 'a':
      const href = $el.attr('href') || '';
      const linkText = $el.text().trim();
      // Skip navigation and audio links
      if (href.includes('audioIcon') || href.includes('backIcon') || 
          href.includes('nextIcon') || href.includes('homeIcon') ||
          href.includes('highLightIcon') || href.includes('external.html') ||
          href.includes('quiz') || href.includes('flashCard') || href.includes('programs')) {
        return '';
      }
      // Convert Chapter-XX/assXX_YY.html format (cross-chapter references)
      const chapterMatch = href.match(/Chapter-(\d+)\/ass(\d+)_(\d+)\.html/);
      if (chapterMatch) {
        const chapter = chapterMatch[1].padStart(2, '0');
        const page = chapterMatch[3].padStart(2, '0');
        // If no currentChapter (index.html), no ../ needed; otherwise use ../
        if (currentChapter) {
          return `[${linkText}](../chapter-${chapter}/chapter-${chapter}-${page})`;
        } else {
          return `[${linkText}](chapter-${chapter}/chapter-${chapter}-${page})`;
        }
      }
      // Convert internal chapter links (assXX_YY.html)
      if (href.match(/ass\d+_\d+\.html/)) {
        const match = href.match(/ass(\d+)_(\d+)\.html/);
        if (match) {
          const chapter = match[1].padStart(2, '0');
          const page = match[2].padStart(2, '0');
          // If same chapter, use relative link; otherwise use ../chapter-XX/
          if (currentChapter && chapter === currentChapter) {
            return `[${linkText}](chapter-${chapter}-${page})`;
          } else {
            return `[${linkText}](../chapter-${chapter}/chapter-${chapter}-${page})`;
          }
        }
      }
      return linkText || href;
    case 'span':
      // Handle highlight spans
      if ($el.hasClass('highlight') || $el.hasClass('highlightgreen') || $el.hasClass('highlightred')) {
        return `**${processInlineContent($, $el, currentChapter)}**`;
      }
      return processInlineContent($, $el, currentChapter);
    case 'div':
      // Recursively process div content
      return processBlockContent($, $el, currentChapter);
    default:
      return processInlineContent($, $el, currentChapter);
  }
}

function processInlineContent($: cheerio.CheerioAPI, $el: cheerio.Cheerio<any>, currentChapter?: string, insideTable = false): string {
  let result = '';
  $el.contents().each((_, node) => {
    if (node.type === 'text') {
      let text = decodeHtmlEntities($(node).text());
      if (insideTable) {
        // Escape comparison operators in table cells
        text = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }
      result += text;
    } else {
      result += htmlToMarkdown($, node, currentChapter, insideTable);
    }
  });
  return result.trim();
}

function processBlockContent($: cheerio.CheerioAPI, $el: cheerio.Cheerio<any>, currentChapter?: string): string {
  let result = '';
  $el.contents().each((_, node) => {
    if (node.type === 'text') {
      let text = decodeHtmlEntities($(node).text()).trim();
      // Remove jQuery code from text nodes (multi-line aware)
      text = text.replace(/\$\(document\)\.ready\(function\(\)\{[\s\S]*?\}\);?/g, '')
                 .replace(/\$\([^)]*\)\.(mouseover|mouseout|click|ready)\(function\(\)\{[\s\S]*?\}\);?/g, '')
                 .trim();
      if (text) result += text + '\n\n';
    } else {
      result += htmlToMarkdown($, node, currentChapter);
    }
  });
  return result;
}

function extractImages($: cheerio.CheerioAPI, chapterDir: string): string[] {
  const images: string[] = [];
  $('img').each((_, img) => {
    const src = $(img).attr('src');
    if (src && !src.includes('Icon.gif') && !src.includes('audioIcon') && 
        !src.includes('backIcon') && !src.includes('nextIcon') && 
        !src.includes('homeIcon') && !src.includes('highLightIcon') &&
        !src.includes('shamrock') && !src.includes('external.html')) {
      // Remove leading ../
      const cleanSrc = src.replace(/^\.\.\//, '');
      if (cleanSrc && !cleanSrc.startsWith('http')) {
        images.push(path.join(chapterDir, cleanSrc));
      }
    }
  });
  return images;
}

function copyImage(imagePath: string, chapterNum: string): string | null {
  if (!fs.existsSync(imagePath)) {
    return null;
  }
  
  const imageName = path.basename(imagePath);
  const destDir = path.join(STATIC_DIR, `Chapter-${chapterNum}`);
  const destPath = path.join(destDir, imageName);
  
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  // Copy image
  fs.copyFileSync(imagePath, destPath);
  
  // Return the static path for markdown
  return `/Chapter-${chapterNum}/${imageName}`;
}

function fixImagePaths(text: string, chapterNum: string, chapterDir: string): string {
  if (!text) return text;
  
  // First, handle images that already have /Chapter-XX/ paths (cross-chapter references)
  text = text.replace(
    /!\[([^\]]*)\]\(\/Chapter-(\d+)\/([^)]+)\)/g,
    (match, alt, refChapterNum, imageName) => {
      const refChapter = refChapterNum.padStart(2, '0');
      const staticPath = `/Chapter-${refChapter}/${imageName}`;
      const staticImagePath = path.join(STATIC_DIR, `Chapter-${refChapter}`, imageName);
      
      // If image exists in the referenced chapter, use it
      if (fs.existsSync(staticImagePath)) {
        return `![${alt}](${staticPath})`;
      }
      
      // Try to find it in original directory
      const originalDir = path.join(ORIGINAL_DIR, `Chapter-${refChapter}`);
      const originalImagePath = path.join(originalDir, imageName);
      if (fs.existsSync(originalImagePath)) {
        const copiedPath = copyImage(originalImagePath, refChapter);
        if (copiedPath) {
          return `![${alt}](${copiedPath})`;
        }
      }
      
      // If not found, try common locations (Chapter-10 for memoryLayout, Chapter-01 for machinecycle)
      const commonChapters = ['10', '01'];
      for (const commonChapter of commonChapters) {
        const commonDir = path.join(ORIGINAL_DIR, `Chapter-${commonChapter}`);
        const commonImagePath = path.join(commonDir, imageName);
        if (fs.existsSync(commonImagePath)) {
          const copiedPath = copyImage(commonImagePath, commonChapter);
          if (copiedPath) {
            return `![${alt}](${copiedPath})`;
          }
        }
      }
      
      // Image not found - comment it out to prevent build errors
      console.warn(`  ⚠ Missing image: ${staticPath}`);
      return `<!-- Missing image: ${imageName} - ![${alt}](${staticPath}) -->`;
    }
  );
  
  // Then handle relative paths in the current chapter
  text = text.replace(
    /!\[([^\]]*)\]\((?:\.\.\/)?([^)]+)\)/g,
    (match, alt, relativePath) => {
      // Skip if already a static path
      if (relativePath.startsWith('/Chapter-')) {
        return match;
      }
      
      // Extract filename
      const imageName = path.basename(relativePath);
      
      // Skip navigation icons
      if (imageName.includes('Icon.gif') || imageName.includes('external.html')) {
        return '';
      }
      
      // Try to find the image
      const imagePathInOriginal = path.join(chapterDir, imageName);
      
      // If image exists in original chapter directory
      if (fs.existsSync(imagePathInOriginal)) {
        const copiedPath = copyImage(imagePathInOriginal, chapterNum);
        if (copiedPath) {
          return `![${alt}](${copiedPath})`;
        }
      }
      
      // Try common locations
      const commonChapters = ['10', '01'];
      for (const commonChapter of commonChapters) {
        const commonDir = path.join(ORIGINAL_DIR, `Chapter-${commonChapter}`);
        const commonImagePath = path.join(commonDir, imageName);
        if (fs.existsSync(commonImagePath)) {
          const copiedPath = copyImage(commonImagePath, commonChapter);
          if (copiedPath) {
            return `![${alt}](${copiedPath})`;
          }
        }
      }
      
      // Image not found - comment it out
      console.warn(`  ⚠ Missing image: ${imageName} in Chapter-${chapterNum}`);
      return `<!-- Missing image: ${imageName} - ![${alt}](/Chapter-${chapterNum}/${imageName}) -->`;
    }
  );
  
  return text;
}

function convertHtmlFile(htmlPath: string, chapterNum: string, pageNum: number): ConvertedPage | null {
  const html = fs.readFileSync(htmlPath, 'utf-8');
  const $ = cheerio.load(html);
  
  // Extract title
  const title = decodeHtmlEntities($('title').text().trim() || 'Untitled');
  
  // Get chapter directory early so we can use it for image path fixing
  const chapterDir = path.dirname(htmlPath);
  
  // Extract answer section
  let answer: string | undefined;
  const $answer = $('.answer');
  if ($answer.length) {
    $answer.find('h3').remove(); // Remove "Answer:" header
    answer = processBlockContent($, $answer, chapterNum).trim();
    // Remove CSS from answer
    answer = answer.replace(/th,\s*td\s*\{[^}]*\}/gi, '');
    answer = answer.replace(/\{[^}]*padding[^}]*border-style[^}]*\}/gi, '');
    answer = answer.replace(/^[^{]*\{[^}]*\}/gm, '');
    answer = fixImagePaths(answer, chapterNum, chapterDir);
  }
  
  // Extract lesson content
  const $lesson = $('.lesson');
  if (!$lesson.length) {
    console.warn(`No lesson content found in ${htmlPath}`);
    return null;
  }
  
  // Remove navigation, audio, and other non-content elements
  $lesson.find('.topnavigation, .bottomnavigation, audio, script').remove();
  $lesson.find('a[href*="audioIcon"], a[href*="Icon.gif"]').remove();
  
  // Remove any inline script tags or jQuery code in text nodes
  $lesson.find('*').each((_, el) => {
    const $el = $(el);
    $el.contents().each((_, node) => {
      if (node.type === 'text') {
        let text = $(node).text();
        // Remove jQuery code patterns (multi-line aware)
        const originalText = text;
        text = text.replace(/\$\(document\)\.ready\(function\(\)\{[\s\S]*?\}\);?/g, '')
                   .replace(/\$\([^)]*\)\.(mouseover|mouseout|click|ready)\(function\(\)\{[\s\S]*?\}\);?/g, '');
        if (text !== originalText) {
          $(node).replaceWith(text);
        }
      }
    });
  });
  
  // Extract images before processing
  const images = extractImages($, chapterDir);
  
  // Extract "Chapter Topics" if present (h4 in left div)
  let chapterTopics: string | undefined;
  const $left = $lesson.find('.left');
  if ($left.length) {
    const $topics = $left.find('h4');
    if ($topics.length && $topics.text().toLowerCase().includes('topic')) {
      chapterTopics = processBlockContent($, $left, chapterNum).trim();
      chapterTopics = fixImagePaths(chapterTopics, chapterNum, chapterDir);
      // Keep images from left div
      $left.find('img').each((_, img) => {
        const src = $(img).attr('src');
        if (src && !src.includes('Icon.gif') && !src.includes('external.html')) {
          const cleanSrc = src.replace(/^\.\.\//, '');
          if (cleanSrc && !cleanSrc.startsWith('http')) {
            images.push(path.join(chapterDir, cleanSrc));
          }
        }
      });
      $left.remove(); // Remove from main content
    }
  }
  
  // Process lesson content
  let content = processBlockContent($, $lesson, chapterNum).trim();
  
  // Copy all images to static directory first
  for (const imagePath of images) {
    copyImage(imagePath, chapterNum);
  }
  
  // Fix image paths in content using the helper function
  content = fixImagePaths(content, chapterNum, chapterDir);
  
  // Remove any remaining HTML tags that might have slipped through (like unclosed tt tags)
  content = content.replace(/<tt>/gi, '`').replace(/<\/tt>/gi, '`');
  
  // Remove any stray style/script tags and their content
  content = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  
  // Apply transformations only to text outside code blocks
  const transformContent = (text: string): string => {
    const codeBlockRegex = /(```[\s\S]*?```|`[^`\n]+`)/g;
    const parts: Array<{type: 'code' | 'text', content: string}> = [];
    let lastIndex = 0;
    let match;
    
    while ((match = codeBlockRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push({type: 'text', content: text.substring(lastIndex, match.index)});
      }
      parts.push({type: 'code', content: match[0]});
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < text.length) {
      parts.push({type: 'text', content: text.substring(lastIndex)});
    }
    
    return parts.map(part => {
      if (part.type === 'code') {
        return part.content;
      } else {
        let textContent = part.content;
        // Remove CSS code blocks that might have slipped through (only in non-code text)
        textContent = textContent.replace(/th,\s*td\s*\{[^}]*\}/gi, '');
        textContent = textContent.replace(/\{[^}]*padding[^}]*border-style[^}]*\}/gi, '');
        textContent = textContent.replace(/\{[^}]*padding[^}]*\}/gi, '');
        // Fix malformed lines where text runs together
        textContent = textContent.replace(/([a-z]&lt;=[a-z])([a-z]+),([a-z])/g, '$1 $2, $3');
        textContent = textContent.replace(/([a-z]&gt;=[a-z])([a-z]+),([a-z])/g, '$1 $2, $3');
        // Escape comparison operators to prevent MDX parsing errors
        // Don't escape if part of HTML tag (negative lookahead for tag patterns)
        textContent = textContent.replace(/<=(?![a-z>])/g, '&lt;=').replace(/>=(?![a-z>])/g, '&gt;=');
        // Escape lone curly braces in text
        textContent = textContent.replace(/\{/g, '\\{').replace(/\}/g, '\\}');
        return textContent;
      }
    }).join('');
  };
  
  content = transformContent(content);
  
  // Prepend chapter topics if found
  if (chapterTopics) {
    content = chapterTopics + '\n\n' + content;
  }
  
  // Extract question
  let question: string | undefined;
  const $question = $('.question');
  if ($question.length) {
    $question.find('h3').remove(); // Remove "QUESTION X:" header
    $question.find('script').remove(); // Remove any script tags
    question = processBlockContent($, $question, chapterNum).trim();
    // Remove jQuery code from question text (multi-line aware)
    question = question.replace(/\$\(document\)\.ready\(function\(\)\{[\s\S]*?\}\);?/g, '')
                       .replace(/\$\([^)]*\)\.(mouseover|mouseout|click|ready)\(function\(\)\{[\s\S]*?\}\);?/g, '')
                       .trim();
    question = fixImagePaths(question, chapterNum, chapterDir);
  }
  
  return {
    title,
    sidebarPosition: pageNum,
    answer,
    content,
    question,
    chapterTopics,
    images: images.map(img => path.basename(img)),
  };
}

function generateMarkdown(page: ConvertedPage): string {
  let md = '---\n';
  md += `sidebar_position: ${page.sidebarPosition}\n`;
  md += `title: "${page.title.replace(/"/g, '\\"')}"\n`;
  md += '---\n\n';
  
  // Extract main title from content if it starts with #
  const contentLines = page.content.split('\n');
  let mainTitle = '';
  if (contentLines[0].startsWith('# ')) {
    mainTitle = contentLines[0].substring(2) + '\n\n';
    page.content = contentLines.slice(1).join('\n').trim();
  } else {
    // Use title as main heading
    mainTitle = `# ${page.title}\n\n`;
  }
  
  md += mainTitle;
  
  if (page.answer) {
    md += '## Answer\n\n';
    md += page.answer.trim() + '\n\n';
  }
  
  if (page.content) {
    md += '## Content\n\n';
    md += page.content.trim();
    if (!page.content.endsWith('\n')) {
      md += '\n';
    }
    md += '\n';
  }
  
  if (page.question) {
    md += '## Question';
    // Extract question number if present
    const questionMatch = page.question.match(/QUESTION (\d+):/i);
    if (questionMatch) {
      md += ` ${questionMatch[1]}`;
      page.question = page.question.replace(/QUESTION \d+:\s*/i, '').trim();
    }
    md += '\n\n';
    md += page.question;
    if (!page.question.endsWith('\n')) {
      md += '\n';
    }
  }
  
  return md;
}

function main() {
  console.log('Starting conversion...\n');
  
  // Convert index.html to intro.md
  const indexPath = path.join(ORIGINAL_DIR, 'index.html');
  if (fs.existsSync(indexPath)) {
    console.log('Converting index.html to intro.md...');
    try {
      const html = fs.readFileSync(indexPath, 'utf-8');
      const $ = cheerio.load(html);
      
      // Remove navigation and scripts
      $('script').remove();
      $('style').remove();
      
      // Get body content
      const $body = $('body');
      
      // Process content without chapter context
      let content = processBlockContent($, $body, undefined).trim();
      
      // Fix title.gif path
      content = content.replace(/!\[([^\]]*)\]\(title\.gif\)/g, '![$1](/title.gif)');
      
      // Fix links: Chapter-XX/assXX_YY.html -> chapter-XX/chapter-XX-YY
      content = content.replace(/\[([^\]]+)\]\(Chapter-(\d+)\/ass(\d+)_(\d+)\.html\)/g, 
        (match, text, ch1, ch2, page) => {
          const chapter = ch1.padStart(2, '0');
          const pageNum = page.padStart(2, '0');
          return `[${text}](chapter-${chapter}/chapter-${chapter}-${pageNum})`;
        });
      
      // Fix appendix links: appendixX/... -> appendix-X/appendix-X-YY
      content = content.replace(/\[([^\]]+)\]\(([Aa]ppendix-?)([A-Z])\/([^\)]+)\.html\)/g,
        (match, text, prefix, letter, file) => {
          const appendixLower = letter.toLowerCase();
          // Extract page number if present
          const pageMatch = file.match(/\d+/);
          const pageNum = pageMatch ? pageMatch[0].padStart(2, '0') : '01';
          return `[${text}](appendix-${appendixLower}/appendix-${appendixLower}-${pageNum})`;
        });
      
      // Remove quiz and flash card links
      content = content.replace(/\[Quiz\]\([^\)]+\)/g, '');
      content = content.replace(/\[Flash Cards\]\([^\)]+\)/g, '');
      content = content.replace(/\[Programs\]\([^\)]+\)/g, '');
      
      // Create markdown with frontmatter
      const markdown = `---
sidebar_position: 1
---

${content}`;
      
      // Write to docs/intro.md
      fs.writeFileSync(path.join(DOCS_DIR, 'intro.md'), markdown, 'utf-8');
      console.log('  ✓ Created intro.md\n');
    } catch (error) {
      console.error('  ✗ Error converting index.html:', error);
    }
  }
  
  // Find all chapter directories
  const originalDir = ORIGINAL_DIR;
  const chapters = fs.readdirSync(originalDir)
    .filter(item => {
      const itemPath = path.join(originalDir, item);
      return fs.statSync(itemPath).isDirectory() && item.match(/^Chapter-\d+$/);
    })
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)![0]);
      const numB = parseInt(b.match(/\d+/)![0]);
      return numA - numB;
    });
  
  let totalConverted = 0;
  let totalSkipped = 0;
  
  for (const chapterDir of chapters) {
    const chapterMatch = chapterDir.match(/Chapter-(\d+)/);
    if (!chapterMatch) continue;
    
    const chapterNum = chapterMatch[1].padStart(2, '0');
    const chapterPath = path.join(originalDir, chapterDir);
    
    // Find all HTML files in chapter (excluding quiz and flashcard files)
    const htmlFiles = fs.readdirSync(chapterPath)
      .filter(file => file.endsWith('.html') && 
                      !file.includes('quiz') && 
                      !file.includes('flashCard') &&
                      !file.includes('programs'))
      .sort();
    
    if (htmlFiles.length === 0) {
      console.log(`No HTML files found in ${chapterDir}`);
      continue;
    }
    
    // Create docs directory for this chapter
    const docsChapterDir = path.join(DOCS_DIR, `chapter-${chapterNum}`);
    if (!fs.existsSync(docsChapterDir)) {
      fs.mkdirSync(docsChapterDir, { recursive: true });
    }
    
    console.log(`Processing ${chapterDir} (${htmlFiles.length} files)...`);
    
    htmlFiles.forEach((htmlFile, index) => {
      const htmlPath = path.join(chapterPath, htmlFile);
      const pageNum = index + 1;
      
      try {
        const converted = convertHtmlFile(htmlPath, chapterNum, pageNum);
        
        if (!converted) {
          console.log(`  ⚠ Skipped ${htmlFile}`);
          totalSkipped++;
          return;
        }
        
        const markdown = generateMarkdown(converted);
        const outputFile = `chapter-${chapterNum}-${String(pageNum).padStart(2, '0')}.md`;
        const outputPath = path.join(docsChapterDir, outputFile);
        
        fs.writeFileSync(outputPath, markdown, 'utf-8');
        totalConverted++;
        
        if ((index + 1) % 10 === 0) {
          process.stdout.write(`  Converted ${index + 1}/${htmlFiles.length}...\r`);
        }
      } catch (error) {
        console.error(`  ✗ Error converting ${htmlFile}:`, error);
        totalSkipped++;
      }
    });
    
    console.log(`  ✓ Completed ${chapterDir}: ${htmlFiles.length} files\n`);
  }
  
  console.log(`\nConversion complete!`);
  console.log(`  Converted: ${totalConverted} files`);
  console.log(`  Skipped: ${totalSkipped} files`);
}

// @ts-ignore - Bun-specific property
main();

