---
sidebar_position: 10
title: "Example Program"
---

Example Program

## Answer

`mflo $8`

The instructions `mflo` and
`mfhi`
are used to get the results of an integer divide.

## Content

**For
this example say that we wish to calculate
`(y + x) / (y - x)`.**

The argument `x` is in `$8`;  `y` is in `$9`.
The quotient is to be placed in `$10` and the remainder in `$11`.

Assume two's complement integers.
Here is the program.
Sadly, it has some holes.
Luckly, you can fill them in.


```mips
## divEg.asm
## 
## Program to calculate (y + x) / (y - x)
##
## Register Use:
##  $8   x
##  $9   y
##  $10  x+y ;  quotient
##  $11  y-x ;  remainder

        .text
        .globl  main

main:
              $8,   $0,  8         # put x into $8
        
              $9,   $0, 36         # put y into $9
        
        addu     $10,  $, $   # $10  = (y+x)
        
        subu     $11,  $, $   # $11  = (y-x)
        
        div      $,  $        # hilo = (y+x)/(y-x)
        
             $10                  # $10  = quotient
        
             $11                  # $11  = remainder

## End of file

```

## Question

Fill in the holes.
