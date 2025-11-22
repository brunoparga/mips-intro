---
sidebar_position: 7
title: "OR Instruction"
---

OR Instruction

## Answer

(Trick Question:) What is the net result if a bit pattern is
logical left shifted 2 positions then logical right shifted 
2 positions?

The two bits on the left of the pattern are guaranteed to be zero;
the other bits are not changed.

You might have hastily said that the net result is no change.
But if there are one-bits at the left 
(high order) end of the pattern they will be lost.

## Content

```mips
or  d,s,t        # $d gets the bitwise 
                 # OR between $s with $t.

```


| OR Operation on Bits |
| --- |
| first operand | 0 | 0 | 1 | 1 |
| second operand | 0 | 1 | 0 | 1 |
|   |   |
| result | 0 | 1 | 1 | 1 |

**MIPS
 has many instructions that use two registers
as operands and that put the result in a register.**
All the action takes place inside the processor.
The data comes from registers, the ALU performs the
operation, and the result is written to a register.
**All this can be done quickly.**

The assembly language must specify four things:
(1) the operation, (2) the first operand register, 
(3) the second operand register, and
(4) the destination register.
Of course, the machine language must encode the
same four things in bit patterns.

Recall that the result of OR is zero only when
both operand bits are zero.

## Question

What is the bitwise OR of the following?

```
 FEED
 BECA
——————

```
