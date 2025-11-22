---
sidebar_position: 20
title: "-0.1"
---

-0.1

## Answer

No. Remember from the last chapter that `0.1` can't
be represented precisely in binary.
Using floating point representation does not change anything.
It does not matter that the number is negative.

## Content

But
let us proceed to see how `-0.1` is (imprecisely)
represented.


- The sign bit of -0.1 is  1 (for negative).
- The binary fraction for 0.1 (from the previous chapter is)

    `0.0001100110011001100110011001100...`
- The mantissa of 0.1 is:
    - Shift the leading bit into the one's place: `1.100110011001100110011001100...`
- The shift was 4 places left, for an exponent of -4
- Drop the one bit in the one's place: `.100110011001100110011001100...`
- Retain 23 bits: `100 1100 1100 1100 1100 1100`
- The actual exponent is  -4
- The biased exponent is `127-4 = 123 = 0111 1011`

Here are the bits written out:



| +- | exponent | Mantissa |
| --- | --- | --- |
| 1 | 0 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 0 | 0 |
|   |   |   |   |   |   |   |   |

## Question

Write out the bit pattern as hexadecimal.
