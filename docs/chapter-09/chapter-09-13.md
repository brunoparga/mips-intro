---
sidebar_position: 13
title: "Explanation Continued"
---

Explanation Continued

## Answer

(Memory test) Where was the first machine instruction placed in memory?

0x00400000

But you probably did not remember that.
It would be nice to have names for addresses.

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

**The line
**main:**
defines a **symbolic address**
(sometimes called a **statement label**).**
A symbolic address is a symbol (an identifier)
that is the source code name for a location in memory.
In this program, **main** 
stands for the address of the first machine instruction
(which turns out to be 0x00400000).
Using a symbolic address is much easier 
than using a numerical address.
With a symbolic address, the programmer refers to
memory locations by name and lets the assembler figure
out the numerical address.

**The symbol `main` 
is global.**
This means that several source files
can use the symbol `main` to refer to
the same location in storage.
(However, SPIM does not use this feature.
All our programs will be contained in a single source file.)

## Question

(Test your intuition: ) Is it likely that several sections of a software
system need to refer to each other?
