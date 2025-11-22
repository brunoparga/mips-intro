---
sidebar_position: 17
title: "Complete Program"
---

Complete Program

## Answer

The complete program is given below

## Content

Here
 is the complete program, suitable for copying
to a text file and running with SPIM.

Remember to initialize the PC (to 0x00400000).
Execute the program step at a time by pushing F10.


```mips
## absVal.asm
##
## Calculate the absolute value of A
##
## Registers:
##   $8  --- A, two's comp. integer
##   $9  --- sign bit of A
##   $10 --- base register for .data section

        .text
        .globl  main

main: 
# Get A
        lui   $10,0x1000     #  Init base register
        lw    $8,0($10)      #  Load A
        sll   $0,$0,0        #  load delay slot

# Is A Negative?
        srl   $9,$8,31       #  Shift sign bit to position 0
        beq   $0,$9,done     #  sign bit == zero, done
        sll   $0,$0,0        #  branch delay slot

# Store -A
        subu  $8,$0,$8       #  negate A
        sw    $8,0($10)      #  save it

done:   sll   $0,$0,0        #  target of the branch

        .data
A:      .word   -1

## End of File

```

## Question

What would happen if the no-op were removed from the
branch delay slot?
