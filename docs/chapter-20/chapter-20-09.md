---
sidebar_position: 9
title: "Flowchart"
---

Flowchart

## Answer

See Below

## Content

![integer array flow chart](/Chapter-20/addIntArray.gif)


**The flow chart is a structured flowchart.
  The
 chart could work for any 
language.
Language details
are left out of the design.**

The usual good advice:  design first, code second.

An array entry is one integer stored in the array,
sometimes called an array element.

Here is an outline of the program.
So far, it implements the first box of the flowchart,
plus part of the loop.
The data for the array has been declared.

**SPIM initializes registers to zero,
but it is good practice to explicitly zero accumulators.**


```mips
## addIntArray.asm
##
## Sum all integers, the positive integers,
## and the negative integers in an array.

## Registers:
##  $8 -- count
##  $9 -- pointer to the array entry
## $10 -- current array entry
## $11 -- sum of all integers
## $12 -- sum of negative integers
## $13 -- sum of positive integers
## $14 -- pos. or neg. flag
## $15 -- SIZE of the array

         .text
         .globl  main
         
# Initialize
main:    
         ori      $,$0,0       #  count = 0

         ori      $,$0,0       #  sum = 0

         ori      $,$0,0       #  neg = 0

         ori      $,$0,0       #  pos = 0

# while  count < SIZE do
loop:     
         . . . .
		 
         j        loop
         sll      $0,$0,0        #  branch delay

        .data
size:   .word  17
array:  .word  12, -1, 8, 0, 6, 85, -74, 23, 99, -30, 30, 95, 4, 7, 10, 28, 14



```

## Question

Fill in the blanks.
