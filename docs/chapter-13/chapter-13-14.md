---
sidebar_position: 14
title: "Filled Blanks"
---

Filled Blanks

## Answer

The complete program is below.

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
        ori      $8, $0, 12        # put x into $8
        sll      $9, $8,  2        # $9 = 4x
        addu     $9, $9, $8        # $9 = 5x
        addiu    $9, $9,-74        # $9 = 5x - 74

## End of file

```

## Question

Could the program be written using just one register?
