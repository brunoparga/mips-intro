---
sidebar_position: 13
title: "No Line-buffer Correction"
---

No Line-buffer Correction

## Answer

Yes — it is ASCII code 0x08

## Content

![Another Fine Letter](/Chapter-22/fineLetter.gif)

**The  
user might make  a mistake in entering the name
and try to correct it by hitting 
the "backspace"  key to erase the mistake.
But this does not work.
The backspace character, 0x08, is included in
the string just as is any character.**
Non-character byte values show up (in SPIM) as small black
rectangles.

Most operating system user interfaces allow the user to
edit a string (with BS, DEL, arrow and other keys) before 
it is sent to an application program.
The application program asks for a string from the user,
but the OS does the actual input, complete with user editing.
(This is sometimes called **"cooked"** input mode).

The SPIM exception handler service does not do this.
Characters are sent directly to the program as they were typed.
If the user hits the backspace character,
then that character is placed in the input string.
(This is called **"raw"** input mode).

## Question

What mode of input (raw or cooked) does a text editor use?
