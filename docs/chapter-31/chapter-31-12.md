---
sidebar_position: 12
title: "Precision of Single Precision Floats"
---

Precision of Single Precision Floats

## Answer

Maybe Not. The source file for the program specified the
constant `-8.32` but the program
printed  `-8.31999969`

## Content

There
are two things wrong: 
(1) the value  `-8.32` 
can not be represented exactly in binary, and 
(2) the last digit or two of the printed value are likely in error.

**Single precision floats have (recall) only 24 bits
of precision.
This is the equivalent of 7 to 8 decimal digits.**
SPIM should have printed `-8.3199999` to the window.

The 7 or 8 decimal digits of precision for single precision float is much worse than
most electronic calculators.
**It is usually unwise to use single precision floating point in programs.**
(But these chapters use it since the goal is to explain concepts,
not to write production grade programs).
Double precision has 15 or 16 decimal places of precision.

## Question

How many decimal places of precision does Java's primitive type
`float` have?
How many decimal places of precision does C's data type
`float` have?
