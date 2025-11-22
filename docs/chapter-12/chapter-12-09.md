---
sidebar_position: 9
title: "XOR Instruction"
---

XOR Instruction

## Answer

```
FEED      1111 1110 1110 1101
BECA      1011 1110 1100 1010
————      ———— ———— ———— ————
BEC8      1011 1110 1100 1000

```

## Content

```mips

xor  d,s,t      # $d gets bitwise XOR 
                # between $s with $t.

```


| XOR Operation on Bits |
| --- |
| first operand | 0 | 0 | 1 | 1 |
| second operand | 0 | 1 | 0 | 1 |
|   |   |
| result | 0 | 1 | 1 | 0 |

**You
 will not be surprised
to find that there is a 
 XOR 
instruction.**

Recall that the result of XOR is one when
only one operand bit is one.

## Question

What is the bitwise XOR of the following?

```
 FEED
 BECA
——————

```
