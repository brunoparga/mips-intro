---
sidebar_position: 13
title: "Converting Representations from Decimal to Binary"
---

Converting Representations from Decimal to Binary

## Answer

What does shifting left by one bit do?

Multiplies   by two.
This is the same as with unsigned integers.
Also, shifting one bit right is equivalent to division by two.

## Content

|   | Decimal | Binary Fraction |
| --- | --- | --- |
| Start | 0.625 | 0. |
| ×2 | **1**.250 | 0.**1** |
|   | .250 |   |
| ×2 | **0**.500 | 0.1**0** |
|   | .500 |   |
| ×2 | **1**.000 | 0.10**1** |
|   | .000 |   |
| Result | .000 | 0.101 |

Often
you need to convert a decimal expression like 7.625 into
a binary expression.
To do this, first convert the whole number (7 in this case) to binary
(111 in this case), append a binary point, and
convert the decimal fraction to binary.

> To convert a decimal fraction to Base 2:

> **Repeatedly multiply the decimal fraction by two.
> After each multiplication,
> a one or a zero moves into the one's place
> (the place just left of the decimal point).
> Copy that bit to the right of the binary fraction,
> then erase it from the decimal fraction.**

> Stop when the decimal fraction is zero.
> (If this never happens, stop when you
> have enough bits in the binary fraction.)

For our example: 
0.625 is 0.1012.
In this case the conversion stops when the decimal
fraction changes to zero.
This does not always happen.

## Question

(Thought Question: ) Why will no other digit but 0 or 1 move into the one's place?
(Hint: consider the biggest possible decimal fraction).
