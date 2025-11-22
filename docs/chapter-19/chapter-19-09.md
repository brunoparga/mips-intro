---
sidebar_position: 9
title: "Bug-free Blocks"
---

Bug-free Blocks

## Answer

No.  Not by hardware.
As long as the target address is within your program a jump would work.

## Content

![program block](/Chapter-19/codeBlock.gif)

Bugs
happen when control 
jumps into the middle of a block of code. 
If the block was written to execute from start to finish,
then all the statements must execute or there will be errors.
*Don't jump into the middle of blocks,*
or bugs will happen.

**This is one of the ideas of
**structured programming**.
A block of code is a 
list of instructions
that has one
**entry point** 
(where execution starts)
and one
**exit point** 
(where execution leaves the block).**
The entry point has well defined
*entry conditions*.
The exit point has well defined
*exit conditions*.

For the block to execute correctly, 
execution must start at the entry point,
and the entry conditions must be met.
When execution leaves the block,
the exit conditions are true
(if the block itself is bug free).

## Question

Are Java, C, and C++ structured languages?
