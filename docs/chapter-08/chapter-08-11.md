---
sidebar_position: 11
title: "Negative Integers"
---

Negative Integers

## Answer

```
  11111 111
   0000 0001     110
   1111 1111   25510
   0000 0000    0010

```

The carry bit of 1 out of the high order column
(leftmost) indicates an overflow (for 8-bit unsigned addition).

## Content

***Unsigned binary* representation 
can not represent negative integers.**
With paper and pencil numbers,
a number is made negative by putting
a negative sign in front of it: 2410  negated =  -2410.
You might hope to do the same with
binary integers:

```
0001 1000    negated =   -0001 1000  ???

```

Unfortunately, you can't
put a negative sign in front of a bit pattern in 
computer memory.
Memory holds only
patterns of 0's and 1's.
**Somehow negative integers must be represented
using bit patterns.**
This is certainly possible.
Remember those advantages of binary?

- Easy to build.
- Unambiguous signals (hence noise immunity).
- Can be copied flawlessly.
- **Anything that can be represented with
     symbols can be represented with patterns of bits.**

If we can represent negative integers with paper and pencil
(thus using symbols) we certainly can represent negative
integers with patterns of bits.

## Question

Let us say that you need to represent an
equal number of positive and
negative integers in eight bits.
How many negative numbers can represented?
How many positive numbers?

Just for fun, can you think of a way to do this?
Get out some scratch paper and scratch for a while with eight-bit patterns.
