---
sidebar_position: 17
title: "SPIM Example"
---

SPIM Example

## Answer

This `la`
translates into a `lui`
followed by a `ori`
(just as we previously did by hand).

## Content

Here
is a SPIM example using
`la`.
Execute the program by pushing F10 for
each machine instruction.
Look in the display of registers
and observe that `$t0` gets the address
of `val2`.
It now can be used as a base register
for loading `$t1` and `$t2` with two 
words from memory.


```mips
## addEm.asm
## program to add two integers
##
        .text
        .globl  main

main:
        la    $t0,val2     #  put a 32-bit address into $t0
        lw    $t1,0($t0)   #  load value 2
        lw    $t2,4($t0)   #  load value 3
        sll   $0,$0,0      #  load delay slot
        addu  $t1,$t1,$t2  #  calc. sum

        .data
val0:   .word   0 
val1:   .word   1 
val2:   .word   2 
val3:   .word   3 
val4:   .word   4 
val5:   .word   5 


```

## Question

(Trick Question:) How many times will F10 be pushed?
