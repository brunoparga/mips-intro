---
sidebar_position: 10
title: "Structure Rule One: Code Block"
---

Structure Rule One: Code Block

## Answer

Yes, all modern high level programming languages are structured.

## Content

![program block](/Chapter-19/structureRule1.gif)

**If
 the entry conditions are correct,
but the exit conditions are wrong,
the bug must be in the block.**
This is not true if execution is allowed to
jump into a block or jump out of a block.
Then the bug might be anywhere in the program.
Debugging under these conditions is much harder.

> ****Rule 1 of Structured Programming:**
> A code block is structured.
> In flow charting terms, a box with a single
> entry point and single exit point is
> structured.**

This may look obvious, but that is the idea.
Structured programming is a way of making it
obvious that a program is correct.

In assembly language there is no syntax for showing
program blocks.
You think about them when you design the program,
and when you draw a flowchart.
But in coding you just follow your design.

## Question

How is a code block implemented in assembly
language?
