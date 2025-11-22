---
sidebar_position: 23
title: "Example Program"
---

Example Program

## Answer

Yes.  With an integer, all 32 bits may be significant.  With IEEE float (recall) the mantissa is only 24 bits (represented with 23 bits).

## Content

```mips

##  twoOnesConvert.asm
##
##  float x;
##  x = 1 + 1.0
##
        .text
        .globl main
        
main:   l.s     $f0,ai              # get an integer one (into a float register)
        cvt.s.w $f2,$f0             # convert to float in $f2     
        l.s     $f4,af              # get a floating point one
        add.s   $f12,$f4,$f2        # 1.0 + 1.0 = 2.0 in $f12
        s.s     $f12,x              # x = sum
        
        li      $v0,2               # print float (in $f12)
        syscall
        li      $v0,10              # halt
        syscall

        .data
af:     .float  1.0
ai:     .word   1
x:      .word   0.0

```

**Here is our program that (finally) adds one plus one.**

Of course, a sensible program would just declare the data to be consistenly integer or float and avoid the need to do conversion.

Notice how the conversion is done using floating point registers.
The integer data is loaded into floating point register `$f0` with a `l.s` instruction.

## Question

Could the program be written to convert the float to an integer and do integer addition?
