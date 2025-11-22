---
sidebar_position: 12
title: "Sign-Magnitude Representation"
---

Sign-Magnitude Representation

## Answer

Since there are 256 possible bit patterns with 8 bits,
there could be 128 non-negative and 128 negative integers.

You may have thought of the sign-magnitude method,
discussed below.

## Content

There 
are many schemes for representing negative integers
with patterns of bits.

**One scheme is  **sign-magnitude**. 
It uses one bit 
(usually the leftmost)
to indicate the sign.
"0" indicates a positive integer,
and "1" indicates a negative integer.**
The rest of the bits are used
for the magnitude of the number.
So  -2410  is represented as:

```
1001 1000

The sign "1" means negative
The magnitude is 24 (in 7-bit binary)

```

## Question

With 8-bit sign-magnitude representation,
what positive integers can be represented
and what negative integers can be represented?
