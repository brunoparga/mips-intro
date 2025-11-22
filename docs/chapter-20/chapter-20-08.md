---
sidebar_position: 8
title: "Example Program: sum of an array"
---

Example Program: sum of an array

## Answer

Because a null word, 0x00000000, is a legitimate (and common) integer.

## Content

Sometimes
programmers try to end an array with a pattern that 
they think will never occur in the data, like 0x00000000, or 0xFFFFFFFF. 
This is an invitation for bugs. 
The pattern might truly never occur in correct data, but faulty data 
is common, and your program should deal with it gracefully.

The next example program 
uses an array of integers.
The length of the array is
given in the data.

**The program calculates three sums:**

- The sum of all integers in the array
- The sum of the positive integers in the array
- The sum of the negative integers in the array

You have probably seen this example before,
done in Java or C.

## Question

Sketch out the flowchart for the program
(or write it in pseudo code).
