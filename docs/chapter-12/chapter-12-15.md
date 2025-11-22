---
sidebar_position: 15
title: "Target Instruction"
---

Target Instruction

## Answer

What assembly language instruction clears register `$25` ?

```mips
or  $25,$0,$0        # $25 <— $0

```

(There are others that also work for this).

## Content

The
 program starts with:

```mips
or  $25,$0,$0        # clear $25

```

Now the correct bit patterns are placed
into the fields of the instruction.
The instruction we are assembling is:

```mips
ori  $8,$9,0x004A

```

## Question

Fill in the fourth row with the bit patterns.
Use hexadecimal 
(assume that the bit patterns are truncated on the left to make them the right size).




| `ori   $8,$9,0x004A` |
| --- |
| 31....26 | 25...21 | 20...16 | 15...................0 |
| 0x0D | s | d | unsigned const |
|   |   |   |   |
