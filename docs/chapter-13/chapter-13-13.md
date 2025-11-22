---
sidebar_position: 13
title: "Example Program"
---

Example Program

## Answer

How could you compute `4 * $8 + $8`?

Multiply `$8`  by four by shifting left two positions, then
add it the original `$8`  .

## Content

```mips
## slowMult.asm
## 
## Program to calculate 5 * x - 74
##
## Register Use:
##  $8   x
##  $9   result

        .text
        .globl  main

main:
        ori      $8, $0, 12           # put x into $8
        
        sll      $, $,       # $ <—— 4x
        
        addu     $, $, $     # $ = 5x
        
        addiu    $, $,-74         # $ = 5x - 74

## End of file

```
Here 
is the program.
But, there are a few blanks.
Fill in the blanks.

**The block of documentation at the top of the source
file shows how registers are used in the program.**
This is an essential part of documentation.
Testing and debugging is much easier with such a 
register use table.

## Question

Fill in the blanks to finish the program.
Put the result  in register `$9` .
