---
sidebar_position: 10
title: "Filling in the bottom Half"
---

Filling in the bottom Half

## Answer

```mips
lui $13, 0x0004
lw  $12, 0x10($13)

```

After the `lui`
instruction `$13` contains 0x**0004**0000.
To get to the address we need,
use an offset of  0x10.

## Content

![Part of Memory](/Chapter-15/lwProblemTwo.gif)

**By
using the `lui`
instruction,
the base register
can be loaded with multiples
of 0x00010000.**
But often you want a more specific address in the base register.
Use the
`ori`
instruction
to fill the bottom 16 bits.

```mips
ori d,s,imm

```

Recall that `ori` zero-extends `imm`
to 32 bits then does a bitwise OR of that with the contents of register `$s`.
The result goes into register `$d`.

## Question

Say that
memory is as above.
The `lw`
instruction (below) loads the word
at 0x0060500C into `$12`.

```mips
lui $13, 0x

ori $13, $13, 0x

lw  $12, 0xC($13)

```Complete the instruction sequence so that the base register contains the address `0x00605000`,
which will be used with a displacement of `0x0C`.
