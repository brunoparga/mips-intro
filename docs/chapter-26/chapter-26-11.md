---
sidebar_position: 11
title: "Example Program"
---

Example Program

## Answer

No. This means that routines should not
look at each other's memory.
In terms of the assembly language source code,
this means that subroutines and main should not
use each other's symbolic addresses.

## Content

Let
us write a program that uses the *Simple Linkage*
convention.
**The program  reads three integers from the user and computes the sum.**
The outline of the program is:

```
# read first integer

# read second integer

# read third integer

# compute the sum

# write out the result

```

Of course, the user will enter integers as characters from
the keyboard.
The program uses the exception handler service number five to read
the characters and convert them into a 32-bit integer.

## Question

Examine the outline for the program.
What do you think would be a useful subroutine?
