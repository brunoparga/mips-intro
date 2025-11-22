---
sidebar_position: 10
title: "Yet More Addition Practice"
---

Yet More Addition Practice

## Answer

```
0011 1111 
```

```
  11
   1101 0010    21010
   0110 1101    10910 
   0011 1111     6310

```

The carry bit of 1 indicates overflow (for 8-bit unsigned addition).

## Content

**The *correct application* of
the Binary Addition Algorithm sometimes gives
*incorrect results* (because of overflow).**

With paper-and-pencil arithmetic,
 overflow is not a
problem because you can use as many columns as
needed.


| Correct Unsigned Binary Addition |
| --- |
| When the Binary Addition Algorithm is used
    with unsigned binary integer representation:



    The result is **CORRECT** only if the ****CARRY OUT**** of the
    high order column is ****ZERO**.** |

But digital computers use fixed
bit-lengths for integers, 
so overflow is possible.
For instance some processors 
represent integers in 8, 16, or 32 bits.
When 8-bit operands are added,
overflow is certainly possible.
Our MIPS processor
uses 32-bit integers,
but even  then, overflow is possible.

For interesting videos showing the consequences of overflow,
google
Ariane flight V88.

## Question

Compute the following sum using 8 bits:

```
   0000 0001
   1111 1111
    

```
