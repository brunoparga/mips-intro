---
sidebar_position: 12
title: "NOT as NOR with  $0"
---

NOT as NOR with $0

## Answer

| 0 NOR 0 =  1 | NOT 0 =  1 |
| --- | --- |
| 1 NOR 0 =  0 | NOT 1 =  0 |

NOT X  =  X NOR 0

## Content

| NOT Operation on Bits |
| --- |
| first operand | 0 | 1 |
|   |   |
| result | 1 | 0 |

**If you want a
NOT operation use a NOR instruction
with `$0` as one of the operands:**

```mips
nor  d,s,$0  # $d gets bitwise NOT of $s.

```

## Question

Say that register `$8` contains a bit pattern.
OR is performed between it and register `$0`.
Register `$9` is to be the destination.
What is the effect?

```mips
or  $9,$8,$0

```
