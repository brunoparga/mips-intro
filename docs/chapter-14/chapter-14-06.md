---
sidebar_position: 6
title: "Example Program"
---

Example Program

## Answer

Yes.

## Content

```mips
## newMult.asm
## 
## Program to calculate 5*x - 74
##
## Register Use:
##  $8   x
##  $9   result

        .text
        .globl  main

main:
        ori      $8,   $0, 12           # put x into $8
        
        ori      $, $0,  5       # put 5 into $
        
        mult     $, $      #  $ = 5x
        
        mflo     $               # $ = 5x
        
        addiu    $, $,-74   # $ = 5x - 74

## End of file

```**This program evaluates the formula
`5*x - 74` where the
value `x` is in register `$8`.**
Assume that `x` is two's complement.

## Question

Fill in the blanks. You may wish to copy the program into
your text editor and make the changes there.  Then you
can test your answers by saving the file and running the
program with SPIM.
