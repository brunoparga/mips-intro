---
sidebar_position: 2
title: "Arithmetic as Bit Manipulation"
---

Arithmetic as Bit Manipulation

## Answer

Yes. (And it can do floating point arithmetic as well).

## Content

**Integers are represented with bit patterns,
so integer operations are bit manipulation operations.**
Some very small, very fast processors provide no data
manipulation instructions other than bit pattern manipulation.
Adding two integers is done by implementing
the Binary Addition Algorithm (see Chapter 8)
with these bit instructions.

Luckily, MIPS has instructions that perform integer arithmetic.
**The normal size of an integer is 32 bits 
(the same as the size of a register).**
Longer or shorter integer arithmetic is done using
bit manipulation instructions in combination with 32-bit
arithmetic instructions.

The MIPS `addu` instruction performs the
Binary Addition Algorithm on two 32-bit patterns held in two 32-bit registers
(details in a few pages.)

## Question

What integer representation method can be used with the `addu` instruction?

- Unsigned Binary?
- Two's Complement?
- Both?
