---
sidebar_position: 13
title: "Example Program"
---

Example Program

## Answer

The address of data[0]: 0x00605000. In fact, in ANSI C, the identifier
for an array (in this case *data*) stands for the address of
its first element.
At run time this address will likely be in a base register.

## Content

You
may be thinking that there has got to be an easier way
to load a register from memory.
At the machine language level there is not.

However, **the assembler has features that make it easier
to write `lw`
and `sw`
instructions.**
These are discussed in a later chapter.

Let us start on an example program.
The program is to
evaluate the polynomial
`5x2 -12x + 97`.
The value `x` is located in memory.
Store  the result  at location
`poly` in memory.

## Question

How many `lw`
instructions will be needed?

How many `sw`
instructions will be needed?
