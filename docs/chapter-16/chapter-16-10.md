---
sidebar_position: 10
title: "Low-order Result not always Correct"
---

Low-order Result not always Correct

## Answer

```
 0011 0100         0000 0000 0000 0000 0000 0001 0011 0100


 0001 1010         0000 0000 0000 0000 0000 0000 1001 1010

```

The  8-bit result is different from the low order byte in the
32-bit result.
Of course,
if we had cleared the carry bit in bit 8 of the 32-bit sum
before the shift the two bytes would be identical.

## Content

**In
general
the low order byte  
after several 32-bit operations is not the same as would
result from several true 8-bit arithmetic operations.**

These are problems that compilers  face.
For example, ANSI C short int variables should
behave the same way on all computers.
But 16-bit math does not behave the
same way on all computer architectures!

When C is compiled for MIPS, several extra
machine operations must be inserted between
each arithmetic operation when the operands are short ints.
On MIPS (and some other computers) 16-bit
arithmetic is much slower than 32-bit arithmetic.

Naive programmers sometimes use short ints
with the expectation that their program will
run faster.
Depending on the hardware and the compiler, 
the opposite might be true!

## Question

Cryptography programs often treat characters
as 8-bit integers and transform them with
arithmetic operations.
Suppose a cryptography program is written in
C for a Windows system.
When compiled on a Macintosh system it 
runs, but produces different results!
You have been given the job of making
the Mac version work identically to the
Windows version.
What must you do?
