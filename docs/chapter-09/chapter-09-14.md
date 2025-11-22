---
sidebar_position: 14
title: "Loading Register Eight"
---

Loading Register Eight

## Answer

Is it likely that several sections of a software
system need to refer to each other?

Yes.

## Content

```mips
## Program to add two plus three 
        .text
        .globl  main

main:
        ori     $8,$0,0x2       # put two's comp. two into register 8
        ori     $9,$0,0x3       # put two's comp. three into register 9
        addu    $10,$8,$9       # add register 8 and 9, put result in 10

## End of file

```

All
software consists of interconnected modules.
A connection is made when one module refers to an address in another.

The next line:
**`ori $8,$0,0x2`**
translates into a 32-bit machine instruction.
**This, upon execution, puts a 32-bit two's complement
positive two into register eight**
(details later).

**The  next instruction
(upon execution) puts a three into register nine.**
The final instruction 
(upon execution) adds register eight to register nine and puts
the 32-bit result into register ten.

## Question

What algorithm do you suppose is used for the 32-bit addition?
