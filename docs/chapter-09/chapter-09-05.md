---
sidebar_position: 5
title: "Two plus Three"
---

Two plus Three

## Answer

Text files — files that contain only bytes that can be interpreted as ASCII characters
and some control characters.

## Content

```mips
## Program to add two plus three 
        .text
        .globl  main

main:
        ori     $8,$0,0x2       # put two's comp. two into register 8
        ori     $9,$0,0x3       # put two's comp. three into register 9
        addu    $10,$8,$9       # add register 8 and 9, put result in 10

## End of file

```

Word 
processors usually create "binary" files 
and so are not suitable for creating source files.
They can be forced to output a text file,
but a real programming editor is much nicer.

With your program (text) editor create a file called
`addup.asm`.
With most text editors and Web browsers
you can *copy* the above
code from the Web page 
and then *paste* into the editor.

**The first "#" of the first line is in column one.
The character "#" starts a comment;
everything on the line from "#" to the right is ignored.**
Sometimes I use two in a row for emphasis, 
but only one is needed.

Each of the three lines following *main:* 
is a statement in assembly language that will be assembled into
one machine instruction.

## Question

(Review: ) What is a *machine instruction*?
