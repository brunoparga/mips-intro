---
sidebar_position: 6
title: "Overflow Detection"
---

Overflow Detection

## Answer

32 bits.

And the result is 32 bits.

## Content

Here 
is an addition problem using 4-bit operands:

```
1111
 0111
 1001 
 0000
 
Overflow happened

```

**Two four-bit numbers are added,
but the sum does not fit in four bits.**
Overflow happened.
The carry-out from the leftmost column is "1".

If we were using five bits the sum would be
`1 0000.`
But with four bits there is no room
for the leftmost 1.
Because the carry out from the most significant
column of the sum  is 1, 
the 4-bit result is not valid.
The leftmost column is called the *most significant* column
because it corresponds to the highest power of two.
The bits in the leftmost columns are called the *most significant bits*
or the *high-order bits*.

**The electronic circuits of a processor can detect overflow
by checking the carry-out of the leftmost column.**
A program might branch to an error handling routine when overflow
is detected.

## Question

Add these unsigned numbers, represented in eight bits.
Determine if overflow occurs.

```
 0010 1100
 0101 0101 
  

```
