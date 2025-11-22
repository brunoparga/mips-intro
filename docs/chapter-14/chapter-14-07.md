---
sidebar_position: 7
title: "Completed Program"
---

Completed Program

## Answer

The answer is below.

## Content

Here
is the completed program.
**Only two  registers are needed.**
Register `$9` is used to accumulate the result in several steps.

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
        ori      $8, $0, 12       # put x into $8
        ori      $9, $0,  5       # put 5 into $9
        mult     $9, $8           # lo = 5x
        mflo     $9               # $9 = 5x
        addiu    $9, $9,-74       # $9 = 5x - 74

## End of file

```

## Question

What does the "`u`" mean in each of the following instructions:

- `addu` ____________________
- `multu`____________________
