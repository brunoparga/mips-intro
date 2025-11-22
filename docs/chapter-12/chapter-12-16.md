---
sidebar_position: 16
title: "Individual Field Values"
---

Individual Field Values

## Answer

| `ori     $8,$9,0x004A` |
| --- |
| 31....26 | 25...21 | 20...16 | 15...................0 |
| 0xD | s | d | unsigned const |
| 0xD | 0x9 | 0x8 | 0x004A |

## Content

There
 are four fields in the instruction.
We know the bit patterns that go into each field.
Let us put those patterns in registers 
`$11`,
`$12`,
`$13`,
and
`$14`.
The program starts out:


```mips
or    $25,$0,$0          # clear $25

ori   $11,$0,  # opcode

ori   $12,$0,  # operand $s

ori   $13,$0,  # destination $d

ori   $14,$0,  # immediate operand

```

## Question

Fill in the fields.
