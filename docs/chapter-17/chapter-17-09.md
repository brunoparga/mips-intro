---
sidebar_position: 9
title: "Assembled Program"
---

Assembled Program

## Answer

Five.  Each time the loop executes, the  instruction in
the branch delay slot increments `$8`.

## Content

Here
 is a SPIM view of the program.
When you run it, remember to set the value
of the PC to 0x400000.
To see the branch delay
it should be enabled in the options menu.

**The assembler constructed the
same machine language jump
instruction as we did by hand.**
(Compare with two pages back).
Using the assembler and a 
symbolic address is much easier.

![SPIM Program](/Chapter-17/branchDelayRun.gif)

## Question

Is the jump instruction all we need
to construct a **while** loop?
