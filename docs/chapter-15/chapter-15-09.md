---
sidebar_position: 9
title: "Setting up the Base Register"
---

Setting up the Base Register

## Answer

```mips
sw $12 , 0xFFF8($13)    or    sw $12 , -8($13)
```

The second answer is the preferred version in assembly language source.
It assembles into the same machine instruction as the first version.

## Content

![Part of Memory](/Chapter-15/lwProblem.gif)


The
 first instruction of the answer expresses minus eight using
16-bit two's complement.
This is the bit pattern that is actually contained in the
machine instruction.
This is awkward to read and to calculate.
The second instruction uses signed decimal notation to specify
minus eight.
The assembler translates this assembler 
instruction into exactly the
same machine instruction as the first assembler instruction.

**By using a 32-bit
base register and an offset a 32-bit 
`lw` or 
`sw` instruction
can reference all of memory.**

But how does the base address get into the base register?
This is where the `lui`
(**l**oad **u**pper **i**mmediate) instruction is useful.
**`lui` copies its 16-bit immediate operand
to the *upper two bytes* (16 bits) of the designated register.**

```mips

lui  d,const  # upper two bytes of $d ← two byte const 
              # lower two bytes of $d ← 0x0000

```

Sometimes this is all that you need.
For example,
say that
memory is as in the picture,
and that you want to load the word
at 0x00040010 into `$12`.
The `lui`
instruction can set up the base register.

## Question

```mips
lui $13, 0x

lw  $12, 0x10($13)

```Complete the `lui` instruction so that the base register 
contains the address `0x00040000`.
