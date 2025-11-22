---
sidebar_position: 27
title: "Multi-purpose Algorithm"
---

Multi-purpose Algorithm

## Answer

0001 0110

(correct)

## Content

The
number to be subtracted is negated by the
usual means (reflect the bits, add one):

```
0001 1011 →  1110 0101

```

Then the binary addition algorithm is used:

```
11100 001
 0011 0001    =  4910
 1110 0101    = -2710
 —————————      ————
 0001 0110       2210

```

**Since the carry into the most significant column is the same
as the carry out of that column,
 the result is correct.**
We are getting quite a bit of use out
of the binary addition algorithm.
It is used to:

- Add integers represented in unsigned binary.
- Add integers represented in two's complement binary.
- Subtract integers represented in two's complement binary.

It can't  be used directly to subtract integers represented in
unsigned binary.
(If both unsigned integers are small enough,
the one being subtracted can be represented as a two's complement negative,
and then the algorithm can be used.)

## Question

Subtract 0101 1001 from 0010 0101

Is the result correct or not?
