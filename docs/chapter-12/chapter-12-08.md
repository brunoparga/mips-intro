---
sidebar_position: 8
title: "AND Instruction"
---

AND Instruction

## Answer

```
FEED      1111 1110 1110 1101
BECA      1011 1110 1100 1010
————      ———— ———— ———— ————
FEEF      1111 1110 1110 1111

```

When bitwise logic problems are written in
hexadecimal, as above,
is usually easiest to translate
into bits, do the OR, then translate
back to hexadecimal.

## Content

```mips

and  d,s,t    # $d gets the bitwise 
              # AND between $s with $t.

```



| AND Operation on Bits |
| --- |
| first operand | 0 | 0 | 1 | 1 |
| second operand | 0 | 1 | 0 | 1 |
|   |   |
| result | 0 | 0 | 0 | 1 |

**MIPS
has an 
AND 
instruction.**
Recall that the result of AND is one only when
both operand bits are one.

## Question

What is the bitwise AND of the following?

```
 FEED
 BECA
——————

```
