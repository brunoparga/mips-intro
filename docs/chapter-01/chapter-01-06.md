---
sidebar_position: 6
title: "Assembly Language Statement"
---

Assembly Language Statement

## Answer

No.

## Content

The
 layout of a machine instruction
is part of the architecture of a processor chip.
Without knowing the layout you can't tell
what the instruction means.
Even if you know the layout,
it is hard to remember what the patterns
mean and hard to write machine instructions.

**When a machine instruction is executed,
the bits in it trigger electronic events
in the components of the processor which
perform a basic operation.**

**A statement in pure assembly language corresponds
to one machine instruction.**
Assembly language is much easier to write than
machine language.
Here is the previous machine instruction and
the assembly language that it corresponds to:


```mips
machine instruction                             assembly language statement

0000 0001 0010 1011 1000 0000 0010 0000         add $t0,$t1,$t2

```

The instruction means: 
add the integers in registers `$t1` 
and `$t2` 
and put the result in register `$t0`.
A register (recall) is a part of the processor that can hold a
bit pattern  representing an integer (or other data.)

**To create the machine instruction from the assembly language
statement a translation program called an **assembler** is used.**

Humans find assembly language much easier to use than machine
language for many reasons.

- It is hard for humans to keep track of those ones and zeros.
- By using symbols programmers gain flexibility in
describing the computation.
- Assembly language is a  compact notation.

**Enhanced** assembly language includes additional convenience features.
It has instructions (called **pseudoinstructions**)
that correspond to several machine instructions.

## Question

Once you know assembly language,
is it hard to write an assembly language statement?
