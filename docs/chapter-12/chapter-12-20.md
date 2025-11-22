---
sidebar_position: 20
title: "ORing in a Field"
---

ORing in a Field

## Answer

```mips
sll   $12,$12,21      # left shift s by 21 places
or    $25,$25,$12     # move s into target register

```

## Content

The
 low-order bit of the pattern for $s is in bit position
0 (of register `$12`). It must be moved to position 21 of
the instruction.
This is done by shifting left by 21 places.
Next, the `or` copies it into 
`$25`, where the instruction
being assembled.

The `or` works like this:


|   | 31....26 | 25...21 | 20...16 | 15.............................0 |
| --- | --- | --- | --- | --- |
| Register $12 (before shift) | 000000 | 00000 | 00000 | 0000 0000 0000 1001 |
| Register $12 (shifted) | 000000 | 01001 | 00000 | 0000 0000 0000 0000 |
| Register $25 (before or) | 001101 | 00000 | 00000 | 0000 0000 0000 0000 |
| Register $25 (after or) | 001101 | 01001 | 00000 | 0000 0000 0000 0000 |

## Question

Would this instruction have worked as well?

```mips
or    $25,$0,$12     # move s into target register

```
