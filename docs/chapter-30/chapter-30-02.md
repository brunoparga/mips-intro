---
sidebar_position: 2
title: "Why Floating Point?"
---

Why Floating Point?

## Answer

No.  All that a processor needs is
a small set of basic instructions that operate on bit patterns.
Everything else can be built up from them.

## Content

**Floating 
point representation makes numerical
computation much easier.**

**You could write all your programs using
integers or fixed-point representation,**
but this is tedious and error-prone.
For example, you could write a program
with the understanding that all integers 
in the program are
100 times bigger than the number they represent.
The integer 2345, for example, 
would represent the number 23.45.
As long as you are consistent,
everything works.

This is actually the same as using fixed point notation.
In fixed point binary notation the binary point is assumed
to lie between two of the bits.  
This is the same
as an understanding that
the integer the bits represent
should be divided by a particular power of two.

**But it is very hard to stay consistent using integers.**
A programmer must remember where the decimal (or binary) point
"really is" in each number.
Sometimes one program needs to deal with several different ranges of
numbers.
Consider a program that must deal with both the measurements
that describe the dimensions of components on a silicon chip 
(say 0.000000010 to 0.000010000 meters) and also the
speed of electrical signals on that chip, 
100000000.0 to 300000000.0 meters/second.
It is hard to find a place to fix the decimal point so that
all these values can be represented.

Notice that in writing those numbers 
(0.000000010, 0.000010000, 100000000.0,  300000000.0)
I was able to put the decimal point where it was needed
in each number.

## Question

(Take a guess: ) When the decimal point moves to where it
is needed in an expression, the decimal point is said to ____________.
