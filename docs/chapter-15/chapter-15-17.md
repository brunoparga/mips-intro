---
sidebar_position: 17
title: "Third Term"
---

Third Term

## Answer

All blanks filled, as below:

## Content

```mips
## poly.asm  
##
## evaluate  5x^2 -12x + 97 
##
## Register Use:
##
## $10 base register, address of x
## $11 x
## $12 value of the polynomial
## $13 temporary

        .text
        .globl  main

main: 
        lui   $10,0x1000     #  Init base register
        lw    $11,0($10)     #  Load x

        ori   $12,$0,97      #  Initialize the accumulator
                             #  during the "load delay slot"

        ori   $13,$0,12      #  evaluate second term
        mult  $11,$13        #  12x
        mflo  $13            #  assume 32 bit result
        subu  $12,$12,$13    #  accumulator = -12x +97

                             #  evaluate third term
                             
        mult  $,$        #  x**2
        
        mflo  $            #  assume 32 bit result

        . . . more instructions

        sw    $12,4($10)     #  Store result in poly

        .data
x:      .word   17           #  base register points here
poly:   .word   0

## End of file

```
**At
 this point all we need to do is square `x`,
multiply by five, and add the result to
the accumulator.**

After squaring `x` you don't need its
value anymore, so `x**2` can be put back
into register `$11`.

## Question

Fill in the blanks.
