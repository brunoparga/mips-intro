---
sidebar_position: 4
title: "Significant Bits"
---

Significant Bits

## Answer

If the result is small enough 
all the significant bits will be contained in `lo`,
and `hi` will contain all zeros.

## Content

**The **significant bits** in a 
positive or unsigned number represented in
binary are the most
significant 1 bit (the leftmost 1 bit)
and all bits to the right of it.**
For example,
the following has 23 significant bits:

```
0000 0000 0100 0011 0101 0110 1101 1110

```

We 
will mostly write programs that keep the result
under 32 bits in length.
When this is true, the result of a multiplication
will be in `lo`.

The **significant bits** in a 
negative number represented in
two's complement are the most
significant 0 bit (the leftmost 0 bit)
and all bits to the right of it. 
For example,
the following has 23 significant bits:

```
1111 1111 1011 1100 1010 1001 0010 0010

```

**To ensure that a product has no more than 32 significant bits,
ensure that the sum of the 
number of significant bits in each operand
is 32 or less.**
For the programming in this course you will not need to
be careful about this.

## Question

About how many significant bits do you expect in this product:

```
01001010 × 00010101

```
