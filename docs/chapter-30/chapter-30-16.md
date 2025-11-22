---
sidebar_position: 16
title: "Exponent Practice"
---

Exponent Practice

## Answer

What is the mantissa when the entire float is zero?

Zero.

## Content

**The
sign bit is zero when the
number is zero.**
A **floating point zero** consists of 32 zero bits.
The MIPS instructions that test for integer zero
can test for floating point zero.

IEEE floating point also represents "negative zero",
where the sign bit is set (to one), and all other bits are zero.
In mathematics, negative zero is the same as zero.
But floating point calculations sometimes give different results
for "positive zero" and "negative zero".
For these chapters assume that zero is represented with 32 zero bits.

In the following chart,
first convert the actual exponent to a biased exponent,
then write the biased exponent as an eight bit binary.


| Biased 127 Exponent |
| --- |
| actual exponent |   | biased exponent
(in decimal) | eight bit exponent |
| 0 |   |   |   |
| 1 |   |   |   |
| 10 |   |   |   |
| -10 |   |   |   |
| 127 |   |   |   |
| -126 |   |   |   |

## Question

How is the exponent -127 represented?
