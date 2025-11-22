---
sidebar_position: 5
title: "Machine Instructions"
---

Machine Instructions

## Answer

In sequential order, one after another.

## Content

**Instructions 
 are normally executed in sequence.**
The program counter advances forward through memory one
instruction at a time.
Each cycle of the machine cycle executes one instruction and 
advances the program counter by one instruction.

Operations like
"add two integers" and "compare two integers"
are operations that a processor
does in one machine cycle.
**Loops and branches require machine 
instructions that alter the normal sequence.**

**A machine instruction is a pattern 
of bits that directs the processor to
perform one machine operation.**
Here is the machine instruction 
that directs the MIPS processor to add
two 32-bit registers together
(a **register** is a part of the processor
that holds a bit pattern).

```
0000 0001 0010 1011 1000 0000 0010 0000

```

The instruction is 32 bits long.
Each bit is 0 or 1.  
When bit patterns are displayed in a book 
they are usually shown in groups of
four (as here).
Of course, the spaces between groups are a convention of 
printing and are not actually part of the bit pattern.

Some of the bits in the instruction 
specify the operation (adding two registers), other
bits specify which two registers to add.
A few more bits say were to put the result.

## Question

Inspect the instruction.
Is it clear what the bits of the instruction
mean?
