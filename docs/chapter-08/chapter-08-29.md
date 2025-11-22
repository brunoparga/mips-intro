---
sidebar_position: 29
title: "No! Not More Practice Subtraction!"
---

No! Not More Practice Subtraction!

## Answer

Subtract 0101 1001 from 1110 0101.

1000 1100

(correct)

## Content

The
 number to be subtracted is negated by the
usual means, as in the previous problem.
Then the binary addition algorithm is used:

```
11100 111       
 1110 0101   = -2710
 1010 0111   = -8910
 —————————     ————
 1000 1100    -11610

```

Since the carry into the most significant column is the same
as the carry out of that column the result is correct.
The answer came out negative, but that is fine.

A computer does several million of these operations
per second.
Surely you can do another one?
How about if I give you two whole seconds?

## Question

Subtract     0111 1000     from     1011 0000

Is the result correct or not?
