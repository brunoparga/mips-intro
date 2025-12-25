---
sidebar_position: 12
title: "More on the Mantissa"
---

More on the Mantissa

## Answer

Yes.  The sign bit of 32-bit integers and of 32-bit floats
is set (to one) when the value is negative and clear (to zero)
when the value is positive or zero.

## Content

The
mantissa represents a number in
24-bit base two positional notation that looks like this:

```
1.xxxxxxxxxxxxxxxxxxxxxxx     

(x = 0 or 1; there are 23 x's)


```

**Very tricky:** **The mantissa represents the 23-bit binary fraction part
of a 24-bit number that starts with a "1".**

The 2<sup>0</sup> place (the one's place) is  presumed
to always contain a 1 and *is not present in the mantissa.*
This trick gives us 24 bits of precision with only 23 bits.

For example, the binary number

`1.11110000101101101010001`

is represented as

`11110000101101101010001`

## Question

If you had a daughter would you name her Mantissa?
