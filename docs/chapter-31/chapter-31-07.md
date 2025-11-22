---
sidebar_position: 7
title: "Example Program"
---

Example Program

## Answer

No.  The decimal point is needed in the constant (at least for SPIM).
This, of course, depends on which assembler you are using.

## Content

```mips
## swap.asm
##
## Exchange the values in valA and valB

        .text
        .globl  main

main:
        l.s     $f0,valA        # $f0  <-- valA
        l.s     $f1,valB        # $f1  <-- valB
        s.s     $f0,valB        # $f0  --> valB
        s.s     $f1,valA        # $f1  --> valA

        li      $v0,10          # code 10 == exit
        syscall                 # Return to OS.
                
        .data
valA:   .float  8.32            # 32 bit floating point value
valB:   .float  -0.6234e4       # 32 bit floating point value
                                # small 'e' only

```

**This program exchanges (swaps) the floating point values
at `valA` and `valB`.**
Notice how the two floating point values are written.
The first in the ordinary style;
the second in scientific notation.

Remember to use a small "e" in the floating point constant.

## Question

(Thought Question: ) Can a general purpose register hold a
floating point value?
