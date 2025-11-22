---
sidebar_position: 11
title: "No Type Checking"
---

No Type Checking

## Answer

The assembler will not catch this mistake,
and the program will run to completion.
However, the second print method call
writes an incorrect value to the screen.

## Content

![SPIM output](/Chapter-31/printOutput.jpg)


**This
type of mistake often happens when
programming in C where **type checking** is weak.**
A variable `j` might hold a bit pattern that represents an integer.
If that bit pattern is passed to a function that expects a float,
such as `printf("%f", j)`, odd
things happen.

Compilers that keep track of the data types of values
and that make sure that the correct types are used as
arguments do **strong type checking**.
Java is strongly typed.
In assembly language type checking is up to the programmer.

## Question

Look at the program on the previous page.

The first line of output shows the 32 bits interpreted as
a single precision floating point value.
Is this output correct?
