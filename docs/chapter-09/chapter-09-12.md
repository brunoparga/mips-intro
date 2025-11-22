---
sidebar_position: 12
title: "Explanation of the Program"
---

Explanation of the Program

## Answer

The program returns control to the
operating system.

But we have no operating system. Just a bare machine.

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

There
 are various ways for a program executing
on a real machine to return control to the 
operating system.
But we have no OS,
so for now we will single step instructions.
Hopefully you are wondering how the program works.

The first line 
of the program is a comment.
It is ignored by the assembler and results in no machine instructions.

****.text** is a *directive*.**
A directive is a statement that tells the assembler something about
what the programmer wants, but does not itself result in any
machine instructions.
This directive tells the assembler that the following lines are
".text" -- source code for the program.

****.globl main** is another directive.**
It says that the identifier *main* will be used outside
of this source file (that is, used "globally") as the label of
a particular location in main memory.

Blank
lines are ignored by the assembler.

## Question

(Memory test) Where was the first machine instruction placed in memory?
