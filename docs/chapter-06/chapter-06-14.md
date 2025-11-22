---
sidebar_position: 14
title: "Powers of Two"
---

Powers of Two

## Answer

```
0110 = 0 × 23  + 1 × 22 + 1 × 21 + 0 × 20
     = 0 + 4 + 2 + 0
     = 6

```

## Content

| Power of 2 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Decimal | 1024 | 512 | 256 | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| Include? |   |   |   |   |   |   |   |   |   |   |   |

**In
a binary representation a particular power of two
is either included in the sum or not, since the
digits are either "1" or "0".**
In converting representations,
it is convenient to have a table.

Here is an 8-bit pattern: 0110 1001.
If it represents a number (using binary positional notation),
convert the notation to decimal by including the powers of two
matching a "1" bit.

## Question

Copy  1s from the bit pattern to the last row of the table,
starting at the right.
Compute the sum of the corresponding decimal numbers.
