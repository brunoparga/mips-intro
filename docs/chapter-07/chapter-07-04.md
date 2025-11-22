---
sidebar_position: 4
title: "Further Famous Bit Patterns"
---

Further Famous Bit Patterns

## Answer

You may have noticed that `0111 1111`
is one less than `1000 0000`,
which is 128.  So `0111 1111`  represents of 12710.

## Content

| Binary | Decimal | Notes |
| --- | --- | --- |
| 00000001 | 1 |   |
| 00000010 | 2 | 1 × 2 |
| 00000100 | 4 | 2 × 2 |
| 00001000 | 8 | 4 × 2 |
| 00000011 | 3 |   |
| 00000110 | 6 | 3 × 2 |
| 00001100 | 12 | 6 × 2 |
| 00011000 | 24 | 12 × 2 |
| 00000111 | 7 |   |
| 00001110 | 14 | 7 × 2 |
| 00011100 | 28 | 14 × 2 |
| 00111000 | 56 | 28 × 2 |

If a number is represented with all ones on the right
and all zeros on the left, like this: `0011 1111.`
To find the decimal equivalent,
turn on the bit to the left of the left-most one and then
turn off all other bits.
Compute the decimal equivalent of 
the resulting pattern and then subtract one.

For example,
**the equivalent of `0011 1111` is `0100 0000 - 1`.**

The decimal value corresponding to the single "on" bit
is 64
and `64 - 1 = 63`.

Here is another table of bit patterns (regarded as representing
positive integers) and their decimal equivalent.
See if you can notice something interesting.

## Question

The bit pattern 0011 0010 represents 5010.
What bit pattern represents 10010
