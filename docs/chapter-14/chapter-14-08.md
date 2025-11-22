---
sidebar_position: 8
title: "A Run of the Program"
---

A Run of the Program

## Answer

- `addu`       Do not trap on overflow.
- `multu`    Operands are unsigned.

## Content

![A Run of the Program](/Chapter-14/newMultRun.gif)

The
`mult` instruction assumes two's complement operands.
Run the program by 
pushing F10 (single step) five times.

The result is as expected.

```mips
Register $9 contains

5 × 12 - 74 = -14 = 0xFFFFFFF2

```

The product `5  × 12 = 60ten = 0x3C` remains in `lo`.

## Question

Use integer division (in base ten) 
to calculate the quotient and remainder of:

```
99 /  2   =   Remainder  

99 / 50   =   Remainder   

```
