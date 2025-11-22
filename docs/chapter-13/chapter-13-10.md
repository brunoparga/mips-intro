---
sidebar_position: 10
title: "addiu   Instruction"
---

addiu  Instruction

## Answer

A 16-bit two's complement negative one:

```
FF FF  = 1111 1111 1111 1111
```

Sign-extended:

```
FF FF FF FF  =  1111 1111 1111 1111 1111 1111 1111 1111 
```

The sign-extended version is a 32-bit negative one.

## Content

```
addiu   d,s,const        # d ←  s + const
                         # Const is 16-bit two's comp. sign-extended to 32 bits
                         # when the addition is done. No overflow trap.

```

**The `addiu` 
instruction
includes a 16-bit immediate operand.**
When the ALU executes the instruction, 
the immediate operand is **sign-extended to 32 bits.**
If two's complement overflow occurs during the addition, it is ignored.


```
addi    d,s,const        # d ←  s + const
                         # Const is 16-bit two's comp. sign-extended to 32 bits
                         # when the addition is done. Two's comp. overflow trap.

```

The `addi` 
instruction does trap
if overflow is detected during addition.
We won't use it.

## Question

Here is the previous program, that added +146 with -82.
Rewrite it using the `addiu` instruction.
Put the result in `$10`.

```mips
    ori      $7, $0, 146        # put +146 into $7
    ori      $8, $0,  82        # put 82 into $8
    nor      $8, $8,  $0        # reflect
    ori      $9, $9,   1        # 
    addu     $8, $8,  $9        # add 1: $8 = -82
    addu    $10, $7,  $8        # (+146) + (-82)

```
