---
sidebar_position: 13
title: "Structure Rule Two: Sequence"
---

Structure Rule Two: Sequence

## Answer

If the big block entry conditions are correct, 
then the big block exit conditions are correct.

## Content

![structure rule two](/Chapter-19/structureRule2.gif)

A
sequence of blocks is correct if the
exit conditions of each block matches 
the entry conditions of the following block.
Execution enters each block at the block's
entry point, and leaves through the block's
exit point.
The whole sequence can be regarded as a single
block, with an entry point and an exit point.

> ****Rule 2 of Structured Programming:**
> Two or more code blocks in sequence are structured.**

The assembly language implementation of this rule
is the same as rule one: 
a programmer must  consciously follow the rule.
This means that there must be no jumps elsewhere in
the code to points inside the blocks.

## Question

Are **if-then-else** structures possible in
assembly language?
