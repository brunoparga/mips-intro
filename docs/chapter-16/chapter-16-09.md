---
sidebar_position: 9
title: "All Arithmetic is 32-bits"
---

All Arithmetic is 32-bits

## Answer

```
11  1 11                                       1 1  1 11   
 0110 1110         0000 0000 0000 0000 0000 0000 0110 1110
 1100 0110         0000 0000 0000 0000 0000 0000 1100 0110
 —————————         ———————————————————————————————————————
 0011 0100         0000 0000 0000 0000 0000 0001 0011 0100

```

## Content

**MIPS
has no instructions for
eight-bit arithmetic.**
Say that there were two operands in the low order 
bytes of two registers (as above).
A fullword addition of these registers puts the same results in the 
low-order byte that an 8-bit addition would.
However, the carry out of the high-order bit of the eight bits
becomes bit 8 of the 32-bit result.
Further bit manipulation instructions can be used to
deal with it.

So there is no need for eight-bit arithmetic instructions,
nor for  halfword arithmetic instructions.

## Question

Now divide the sum we just calculated by two.
Do this by shifting right one place:

```
 0011 0100         0000 0000 0000 0000 0000 0001 0011 0100

```
