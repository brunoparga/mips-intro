---
sidebar_position: 18
title: "Printing Out the Result"
---

Printing Out the Result

## Answer

To make debugging easy.

## Content

Here
 is the final section of the code.

```mips
        . . . . . 
				
        # print the result
        mov.s   $f12,$f2            # $f12 = argument
        li      $v0,2               # print single
        syscall

        la      $a0,newl            # new line
        li      $v0,4               # print string
        syscall

        li      $v0,10              # code 10 == exit
        syscall                     # Return to OS.

        .data
        . . . . .

blank:  .asciiz " "
newl:   .asciiz "\n"
        . . . . .

```

There is nothing new in this code.

## Question

If  `x = 0.1`
what is  `ax2 + bx + c`
when `a = b = c = 1`?
