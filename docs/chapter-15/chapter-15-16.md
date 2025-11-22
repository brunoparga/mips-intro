---
sidebar_position: 16
title: "Second Term"
---

Second Term

## Answer

See below.

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
        
        mult  $,$   #  12x
        
          $13            #  assume 32 bit result
        
        subu  $,$,$    #  accumulator = -12x +97

       ....   more instructions

        sw    $12,4($10)     #  Store result in poly

        .data
x:      .word   17           # base register points here 
poly:   .word   0

## End of file

```
**Since
 SPIM starts the data section at
0x10000000,
register `$10` can be loaded with the 
first address of the data section
using the `lui` instruction.**
The low order sixteen bits of the address
are all zero.
The address of `x` is
an offset of zero from that base address.

The location for the result
is at an offset of four from the base
address.

Now fill in the blanks 
so that the second term 
is evaluated and added to the accumulator.

## Question

Fill in the blanks.
