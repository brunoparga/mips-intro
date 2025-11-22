---
sidebar_position: 7
title: "Fixed Point Notation"
---

Fixed Point Notation

## Answer

`100.012 = 4.25`


| Power of 2 | 3 | 2 | 1 | 0 | **.** | -1 | -2 | -3 | -4 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|   | 8 | 4 | 2 | 1 | **.** | 0.5 | 0.25 | 0.125 | 0.0625 |
| Include? |   | 1 | 0 | 0 | **.** | 0 | 1 |   |   |

## Content

| Power of 2 | 3 | 2 | 1 | 0 | **.** | -1 | -2 | -3 | -4 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|   | 8 | 4 | 2 | 1 | **.** | 0.5 | 0.25 | 0.125 | 0.0625 |
| Include? |   |   |   |   | **.** |   |   |   |   |
| Sum: |   |




 


With
paper-and-pencil arithmetic you can use as many digits or bits
as are needed.
But computers (usually) use a fixed number of bits for a particular
data type.
For example, MIPS integers are 32 bits.

Can a fixed number of bits be used to express fractions?

Yes.

Let us look briefly at an older method, not much used anymore.
In the past, some electronic calculators and some
computers used **fixed point** notation for expressing a
fractional number.



**With fixed point notation, a number is expressed using a certain number of bits
and the binary point is assumed to be permanently fixed
at a certain position.**

For example, let us say that fixed point numbers use eight bits
and that the binary point is fixed between the middle two bits,
like in the table.
(In actual practice, the number of bits would be much more than eight.)
Now to interpret an eight-bit expression, just copy the bits
to the table.

(Fill in the table by clicking the buttons. The powers of two above each 1-bit are included in the sum. )

## Question

In this scheme, what does the bit pattern `01101001` represent
in decimal?
