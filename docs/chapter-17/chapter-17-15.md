---
sidebar_position: 15
title: "Shifting the Sign Bit"
---

Shifting the Sign Bit

## Answer

The program below has the blanks filled.

## Content

**To
determine if "A" is negative, check if its
sign bit is one.**
To do this, 
logically shift the sign bit
into bit position 0 of a register.
The register will be zero if "A"
is positive.
The program  assumes that
integer values are represented with two's complement.

The branch delay slot is filled with a no-op.


```mips
## absVal.asm
##
## Calculate the absolute value of A

      .text
      .globl  main

main: 
# Get A
        lui   $10,0x1000     #  Initialize the base register
        lw    $8,0($10)      #  Load A
        sll   $0,$0,0        #  load delay slot

# Is A negative?
        srl   $9,$8,       #  Shift sign bit to position 0
        
        beq   $,$,done  #  sign bit == zero, done
        
        sll   $0,$0,0                   # branch delay slot


# Store -A


done:   

      .data
A:    .word   -1

## End of file

```

## Question

Fill the blanks.
