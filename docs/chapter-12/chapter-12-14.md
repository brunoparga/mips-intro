---
sidebar_position: 14
title: "Example Program"
---

Example Program

## Answer

How can a particular bit pattern be loaded into a register?

With an `ori` instruction.

## Content

| 31....26 | 25...21 | 20...16 | 15...................0 |
| --- | --- | --- | --- |
| 0xD | s | d | unsigned const |

Here
 are the fields of the `ori` instruction.
The numbers in the first row are bit positions, numbered from
the low-order bit on the right.
The opcode of the instruction is 0xD.
Since the opcode is six bits wide this
is understood to stand for `001101`.
The source register is `s`,
the destination register is `d`,
and the immediate operand is `const`.

Our example program will assemble the machine code that corresponds to the
assembly language instruction:

```mips
ori  $8,$9,0x004A

```

The instruction will be assembled in register `$25` .
The program uses bitwise logic and shift operations.
Let us say that this example is part of a larger program.
To start out,
initialize `$25` to all zeros
(this is called *clearing* the register).

## Question

What assembly language instruction clears register `$25` ?
