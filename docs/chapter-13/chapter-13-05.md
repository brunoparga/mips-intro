---
sidebar_position: 5
title: "Example Program"
---

Example Program

## Answer

Both operand registers and the result register can all be the same.
(This is not true on many processors, but MIPS is nice in this way.)

The effect of adding an integer to itself is doubling it.
The maximum unsigned integer that can be represented in 32 bits
is `+232-1`
so the maximum that `$8` could start with is:
`+231-1`

## Content

```mips
## AddSome.asm
## 
## Program to demonstrate addition
        .text
        .globl  main

main:
        ori      $8, $0, 0xAB       # put 0x000000AB into $8
        ori      $9, $0, 0x55       # put 0x00000055 into $9
        addu     $10,$9, $8         # $10  gets sum

## End of file

```



Here  is the addition problem on a previous page extended to 32 bits.

```
carry:   0 0000 0000 0000 0000 0000 0001 1111 111
           0000 0000 0000 0000 0000 0000 1010 1011         000000AB
           0000 0000 0000 0000 0000 0000 0101 0101         00000055
           0000 0000 0000 0000 0000 0001 0000 0000         00000100

```

**What was unsigned overflow with 8-bit unsigned arithmetic is
within range for 32-bit arithmetic.**

## Question

Are registers `$8` 
and `$9` changed by the `addu`
instruction in this program?
