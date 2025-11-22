---
sidebar_position: 3
title: "Upside-down MIPS Stack"
---

Upside-down MIPS Stack

## Answer

The plate at the top of the stack was the last one added.
It will also be the first one removed.

## Content

![stack of integers](/Chapter-25/stackInts00.gif)

**Stack-like
behavior is sometimes called "LIFO" for
Last In First Out.**

The data elements in our stacks are 32-bit words.
In general,
stacks can be used for all
types of data.
But in these chapters,
stacks contain only 32-bit MIPS full words.

The picture shows a
stack of  MIPS full words.**The **stack pointer register** `$sp` 
by convention points at the top item of the stack.**
The stack pointer is register `$29`.
The mnemonic register name `$sp` is used by the
extended assembler.

**In the usual way of drawing memory the stack is upside-down.**
In the picture, the top item of the stack is 81.
The bottom of the stack contains the integer -92.

Before the operating system starts your program it ensures
that there is a range of memory for a stack and puts
a suitable address into `$sp`.

## Question

If an item of data (say the value 103) is added to the stack,
where will it go?
