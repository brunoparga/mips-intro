---
sidebar_position: 11
title: "Example Program"
---

Example Program

## Answer

```mips
li $t7,0xFF001234
 
==
 
lui $t7,0xFF00
 
ori $t7,$t7,0x1234

```

The immediate operand of the above pseudoinstruction 
could represent a negative integer
(notice that the "sign bit" is set).
You don't have to use hex with 
`li`.
You could have written:
`li $t7,-16772555`.

## Content

```mips
## liEg.asm
##
        .text
        .globl  main

main:
        li    $t0,43        #  first  value
        li    $t1,-96       #  second value
        li    $t7,-16772555 #  third  value
        addu  $t0,$t0,$t1   #  add the values
        addu  $t0,$t0,$t7   #  leave result in $t0


```


The example program uses a load immediate.
More practical examples follow in a few more pages.

**Each `li`
instruction in the above translates into different basic instructions.**
To run the program in SPIM,
first look in the settings menu.
Put a check for
"allow pseudo instructions"
and remove the check from "bare machine".

## Question

(Review: ) What is a *symbolic address*?
