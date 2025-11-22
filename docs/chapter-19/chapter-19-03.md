---
sidebar_position: 3
title: "Equal Power Processors"
---

Equal Power Processors

## Answer

Yes.

## Content

**Arithmetic with integers of any size can be implemented 
no matter what word size the processor uses.**
This is done by using both the
integer arithmetic instructions of the processor (if any)
and bit manipulation instructions.

For example: 16-bit Intel microprocessors can run programs
that use 64-bit integer arithmetic.
This is done by using several
16-bit machine operations for each 64-bit operation.

As a more modern example: Pentium-1 and Pentium-4 
processors can run the same programs.
One (the P-4) has a faster machine cycle than the other.
And one (the P-4) has more types of 
machine instructions than the other.
If you have a C program that computes something,
both processors can run it, and
whatever it computes  
comes out the same on both
(assuming appropriate compilers). 
The running time would be longer on
the P-1 than on the P-4,
but running time is not part of the definition.

At one time,
the SWAC (Standards Western Automatic Computer) was the world’s fastest computer.
In 1952 the SWAC was programmed to
find perfect numbers.
A perfect number is an integer whose integer divisors sum up to the number.
For example, `6` is perfect because `6` is divided by
`1, 2,` and `3` and `6 = 1 + 2 + 3`.
Other perfect numbers are 28, 496, and 8128.

After much computation SWAC found the perfect number 33550336.

Nice article about the SWAC:

## Question

Will a modern computer find the same perfect numbers
as the SWAC?
