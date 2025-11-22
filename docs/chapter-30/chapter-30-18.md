---
sidebar_position: 18
title: "1.0"
---

1.0

## Answer

- What is the sign bit of 1.0? 0 (for positive)
- What is the mantissa of 1.0? 000 0000 0000 0000 0000 0000
- What is the actual exponent of 1.0? 0
- What is the biased exponent of 1.0? 12710   =   0111 11112

## Content

![IEEE representation of one point zero](/Chapter-30/ieee10.jpg)

**Fitting 
each of these pieces into their proper fields gives us the full 32 bits.**

The bit pattern written in hexadecimal is `0x3F800000`.

To check that this is correct,
use SPIM.
Write a program that declares a floating point 1.0,
then run SPIM.

```
## Program to represent 1.0
        .text
        .globl  main
main:
        .data
val:    .float    1.0
## End of file

```

## Question

When you load this program in SPIM, where will the 1.0 be?
