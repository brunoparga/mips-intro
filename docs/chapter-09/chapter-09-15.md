---
sidebar_position: 15
title: "Run Time"
---

Run Time

## Answer

What algorithm do you suppose is used for the 32-bit addition?

The Binary Addition Algorithm (of Chapter 8)

## Content

It
is awkward to keep saying:

> *The instruction, after it is assembled and loaded
> into main memory, 
> upon execution does ....*

Instead one says:

> ***At run time the instruction does ...***

For example,

> At run time, the instruction `ori $8,$0,0x2` 
> loads register eight with a two.

Even sloppier is,

> "the instruction `ori $8,$0,0x2`
> loads register eight with a two."

It is vital that you understand that 
this phrase is a short way of saying the
longer phrase.
In a computer
it is the bit patterns of machine instructions that
cause things to happen, and this happens only at run time.

Sometimes one talks about **assembly time**,
the phase where the assembler is creating bit patterns
out of the source file.

## Question

(Review) In a typical computer system
(not a simulated one) where does the assembler place the
bit patterns it creates?
