---
sidebar_position: 13
title: "How the Mantissa Works"
---

How the Mantissa Works

## Answer

What a sweet name!

## Content

**Since
leading zeros of a binary number can be dropped,
it is safe to not actually include the first 1.**
There will always be one, so there is no need to show it.

The exponent is adjusted so that the most significant 1 is
in the one's place of the mantissa.
Then that 1-bit is dropped.

For example: say that you wish to represent 3.17578125 as a float.
In binary, this is
`00011.00101101`.


- **Drop** the leading zeros: 
`11.00101101`
- **Now** there is a leading one.
- **Move** the binary point so that the leading one
    is in the one's place (the exponent shows the move):

   `1.100101101 × 21`
- **Drop** the leading one:

   `100101101 × 21`
- **Add** zero bits on the right so that there are 23 bits in total:

   `10010110100000000000000 × 21`
- **Result:** the mantissa is:
   `10010110100000000000000`

## Question

Is the mantissa always zero or positive?
