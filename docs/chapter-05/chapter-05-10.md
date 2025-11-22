---
sidebar_position: 10
title: "Text Files"
---

Text Files

## Answer

No.  The book contains patterns of letters
but their context is different than
what you  (the "English Language Application") can process.

## Content

**A computer application (a program) is the context
for the bit patterns of the input and output files it uses.**
Without a context, the bit patterns are just abstract patterns.

Although there are some standard contexts 
(such as for text files),
many applications use a context that is their own.
For example, a new image format would be a new context and
would require programs  written to process data in that format.

If you could somehow inspect the surface of a disk
and see the bit patterns stored in a particular file, 
you would not know what
they represented without additional knowledge.

Often people talk of "text files" and "MS Word files"
and "executable files" as if these were completely
different things.
But these are just sloppy, 
shorthand phrases.

For example,
when someone says "text file" they
really mean:

> ****Text File:** 
> A file containing a sequence 
> of bytes that encode characters.**
> Bytes hold  bit patterns  
> that represent characters
> or control characters
> using a character encoding scheme such as ASCII or UTF-8.

A text file can be used with software
such as a text editor
that has been written to use the particular
character encoding scheme.
Some software (such as web browsers)
can be used with several encoding schemes.

Files containing bytes that encode
printable characters according to the ASCII convention
have about half of the possible patterns.
Software that expects text files can work
with the ASCII patterns,
but often can't deal with the other patterns.

Web pages are text files that (usually) use UTF-8 to
encode characters.
Some of the characters are instructions to the web
browswer about how to display the web page.
To see the characters in this web page, type control-U.

## Question

A **file compressor** is a program that
inputs a file and outputs a smaller file 
that uses bit patterns more efficiently 
that in the original file.
A decompressor restores the compressed file 
to the original version.

(Thought Question: ) When an ASCII file
is compressed, does the resulting file
contain ASCII characters?
