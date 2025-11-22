---
sidebar_position: 15
title: "Example Program"
---

Example Program

## Answer

Memory access is much slower than copying between registers.

## Content

```mips
## Move data between the coprocessor and the CPU

        .text
        .globl main

main:   
        li      $t0,1           # $t0 <-- 1
                                # (move to the coprocessor)
        mtc1    $t0,$f0         # $t0 --> $f0 
        
        li.s    $f1,1.0         # $f1 <-- 1.0
                                # (move from the coprocessor)
        mfc1    $t1,$f1         # $t1 <-- $f1 
        
        li      $v0,10          # exit
        syscall

```

**Here is a program that moves bit patterns between 
floating point and general purpose registers.**
The program loads a general purpose register with
a two's complement 1 and copies that pattern to
a floating point register.
Then it loads a floating point register with
an IEEE 1.0 and moves that pattern to a general
purpose register.

The bit pattern `00000001` is the two's complement representation of one.
It is now in registers `$t0` and `$f0`.

Here is what the SPIM registers contain after running the program:

The bit pattern `3f800000` is the IEEE representation of 1.0.
That pattern is now in registers `$f1` and `$t1`.
(It is also in register `$at` which is used in implementing the pseudoinstruction `li.s`).


![Screen Dump of Registers](/Chapter-31/moveRegsFloat.jpg)

![Screen Dump of Registers](/Chapter-31/moveRegsGeneral.jpg)

## Question

Could floating point arithmetic be done with the
value in register `$f0`?  
Inspect the contents for FP0 in the SPIM register display.
