---
sidebar_position: 10
title: "Fixed Number of Digits"
---

Fixed Number of Digits

## Answer

How many digits are in each of the above expressions? 8

How many digits are in the mantissa? 6

How many in the exponent? 2

## Content

The
question and its answer 
is getting close to the idea of floating point.
Each expression has eight digits.
Two of the digits are used to "float" the decimal point.
The remaining six show the digits of the number.

**The number of digits in the mantissa is called
the **precision** of the floating point number.**
When we start talking about binary floating point,
the precision will be the number of bits in the mantissa.
With a 32-bit single-precision floating point 
value the mantissa is 24 bits, 
**so single precision floats have 24 bits of precision.**

**Caution:** **sometimes in casual speech people say
that single precision values have 32 bits of precision,
but this is not actually correct.**

**Another Caution:** the mantissa uses 23 bits to
represent its 24 bits of precision.
This trick will be discussed shortly.

## Question

How many possible mantissas can be represented in single precision?
