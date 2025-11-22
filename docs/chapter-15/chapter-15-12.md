---
sidebar_position: 12
title: "Assembly Arrays"
---

Assembly Arrays

## Answer

NO. The first instruction keeps the upper half of `$10` the same
and ORs in some bits in the lower half.

The second instruction replaces all 32 bits of `$10` with the
zero-extended immediate operand.

```mips
ori  $10,$10,0x00C4

ori  $10,$0, 0x00C4

```

## Content

![Part of Memory](/Chapter-15/lwProblemTwo.gif)

**An array of `int` is implemented as a
sequence of words in successive word-aligned memory
locations.**
For example, the diagram shows a possible
implementation of:

```
int data[] = {0, 1, 2, 3, 4, 5};

```

The above is expressed using the language
C, but you don't have to know any C to
understand this page.
The declaration creates an array of six
elements and initializes them to the 
integers zero through five.

In C, you don't don't usually know what addresses are used for an array.
In assembly language you do.
Details in a few pages.

## Question

Assume that you have an array that starts at address `0x00605000` as in the picture.

What is the most sensible address to have in the base
register for processing this array?
