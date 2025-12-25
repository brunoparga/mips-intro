---
sidebar_position: 14
title: "Pattern Name and Number Representation"
---

Pattern Name and Number Representation

## Answer

1A44D

## Content

![pattern names](/Chapter-07/NameRelations.gif)

**A bit pattern that represents an integer
in unsigned binary has a pattern name using hex.
That pattern name is the same string of characters
as the base 16 representation of the integer.**

Converting between base 16 representation and base 2 representation
is easy because 16 is a power of 2.
Another base where this is true is base 8 (octal), since 8 is 2<sup>3</sup>.
In base 8, the digits are 0, 1, 2, 3, 4, 5, 6, and 7.
The binary equivalents of the digits are 
000, 001, 010, 011, 100, 101, 110, 111.

Each place in a base 8 representation 
corresponds to a left shift of 3 places
in the bit pattern of its binary representation.

Be careful:  in some computer languages (Java and C, for instance) a number
written with a leading zero signifies octal.
So 0644 means base eight, and 644 means base ten, and 0x644 means base sixteen.

## Question

What is the binary equivalent of 4733 octal?
