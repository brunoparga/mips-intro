---
sidebar_position: 8
title: "Full-Word Aligned"
---

Full-Word Aligned

## Answer

Yes.  A general purpose register can hold any 32-bit pattern.

## Content

```mips
## swap.asm
##
## Exchange the values in valA and valB

        .text
        .globl  main

main:
        lw      $t0,valA        # $t0  <-- valA
        lw      $t1,valB        # $t1  <-- valB
        sw      $t0,valB        # $t0  --> valB
        sw      $t1,valA        # $t1  --> valA

        li      $v0,10          # code 10 == exit
        syscall                 # Return to OS.
                
        .data
valA:   .float  8.32            # 32 bit floating point value
valB:   .float  -0.6234e4       # 32 bit floating point value
                                # small 'e' only

```

**If you want to perform floating point
arithmetic, then the floating point number must be in
a floating point register.**

The previous program exchanged the bit patterns held at two memory locations.  
**Of course, memory can hold all possible bit patterns and general purpose registers can hold all possible bit patterns.**
The program could just as easily been written using general
purpose registers since no arithmetic was done with the bit patterns in the registers:

**For both single precision load and store instructions** 
(as with the general purpose load and store instructions)
**the memory
address must be full-word aligned.**
It must be a multiple of four.
Ordinarily this is not a problem.
The assembler takes care of this.

## Question

Do you think that the SPIM service that prints an *integer*
can be used for *floating point* values?
