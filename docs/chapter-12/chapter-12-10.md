---
sidebar_position: 10
title: "NOR Instruction"
---

NOR Instruction

## Answer

```
FEED      1111 1110 1110 1101
BECA      1011 1110 1100 1010
————      ———— ———— ———— ————
4027      0100 0000 0010 0111

```

## Content

```mips

nor  d,s,t    # $d gets bitwise NOR 
              # between $s with $t.

```


| NOR Operation on Bits |
| --- |
| first operand | 0 | 0 | 1 | 1 |
| second operand | 0 | 1 | 0 | 1 |
|   |   |
| result | 1 | 0 | 0 | 0 |

**There
 is a bitwise
NOR instruction.**
There is no immediate operand NOR instruction.
NOR is equivalent to performing the OR operation,
then complementing the bits (change 0 to 1 and 1 to 0).

## Question

What is the bitwise NOR of the following?

```
 FEED
 BECA
——————

```
