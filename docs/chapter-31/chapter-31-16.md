---
sidebar_position: 16
title: "Example Program: Polynomial Evaluation"
---

Example Program: Polynomial Evaluation

## Answer

No.  A biased exponent of all zeros requires
that the mantissa be all zeros.

## Content

```mips
        .text
        .globl main

main:   # read input
        la      $a0,prompt          # prompt user for x
        li      $v0,4               # print string
        syscall
        
        li      $v0,6               # read single
        syscall                     # $f0 <-- x
        
        # evaluate the quadratic
        . . . . .
 
        .data
        . . . . .
				
				
prompt: .asciiz "Enter x: "

```


**This
 example program computes the value of
`ax2 + bx + c`.**
It starts by asking the user for `x`.

After the `syscall` the floating point value 
from the user is in  `$f0`.
The next section of the program does the calculation.

## Question

Should `a`,  `b`, and  `c` be
integer constants or floating point constants?
