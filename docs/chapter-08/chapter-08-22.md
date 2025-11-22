---
sidebar_position: 22
title: "The Sign of the Four Bits"
---

The Sign of the Four Bits

## Answer

negative

## Content

Be sure that you understand this: 
**It is by happy coincidence that the
high order bit of a two's complement integer is 0 for positive and 1 for negative.**
But, to create the two's complement representation of the negative of a number
you must "reflect, add one".

**Changing the sign bit by itself will not work.**

**To convert N bits of two's complement representation into
decimal representation:**

- If the integer is negative, complement it to get the corresponding positive integer.
- Convert the (positive) integer to decimal (as usual).
- If the integer was originally negative, 
put "-" in front of the decimal representation.

The number represented by 1001 is negative 
(since the "sign bit" is one), so complement:

```
 1001 →  0110 + 1 →  0111
```

Convert the result to decimal:  `0111 = 710`.
  Add a negative sign:   -710.
  So (in 4-bit two's complement representation) 1001 represents -710.

## Question

What is the decimal representation of this 8-bit two's complement integer:  1001 1111
