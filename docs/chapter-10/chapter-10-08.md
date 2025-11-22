---
sidebar_position: 8
title: "Machine Cycle"
---

Machine Cycle

## Answer

No, because register `$0` always contains a zero.
You may try to copy a value into it,
and the instruction will appear to execute correctly,
but register zero will not be changed.

## Content

![machine cycle](/Chapter-10/machinecycle.gif)

**The MIPS processor endlessly cycles through
three basic steps.
Each cycle executes one machine instruction.**
Everything the processor does is done by a
sequence of machine operations.
So, everything that a program does is
the result of performing
millions of machine cycles.

As execution proceeds through a sequence of instructions in memory,
**a special register, the **program counter**,
contains the address the instruction that is next in line to execute.**

> ****Fetch the next Instruction.****
> The program counter contains the address of the next
> machine instruction.
> The instruction is fetched from memory.

> ****Increment the PC.****
> The address in the program counter is incremented by four.

> ****Execute the Instruction.****
> The machine operation specified by the
> instruction is performed.

## Question

Why is the program counter (PC) incremented by four each time?
