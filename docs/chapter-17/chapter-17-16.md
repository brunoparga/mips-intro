---
sidebar_position: 16
title: "Store -A"
---

Store -A

## Answer

The blanks are filled, below.

## Content

The
 sign bit is shifted right 31 bit positions.
This puts it in the low-order bit of the
destination register (`$9` in this case).
**To test if `$9` is zero, use branch-on-equal
with register `$0` (which is always zero).**

Now calculate -A and store it back into word "A".
The instruction at `done`
is a no-op.


```mips
## absVal.asm
##
## Calculate the absolute value of A

      .text
      .globl  main

main: 
# Get A
        lui   $10,0x1000     #  Init base register
        lw    $8,0($10)      #  Load A
        sll   $0,$0,0        #  load delay slot

# Is A negative?
        srl   $9,$8,31       #  Shift sign bit to position 0
        beq   $0,$9,done     #  sign bit == zero, done
        sll   $0,$0,0        # branch delay slot

# Store -A
        subu  $8,$,$8     #  negate A
        
        sw    $8,($)   #  save it

done:   sll   $0,$0,0

      .data
A:    .word   -1

## End of file

```

## Question

Fill the blanks.
