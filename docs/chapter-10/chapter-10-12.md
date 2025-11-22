---
sidebar_position: 12
title: "End of Chapter"
---

End of Chapter

## Answer

Human brains work (mostly) in parallel.
Multitasking gives the *appearance* of
parallel processing.
Brains and some computers actually do it.

## Content

![machine cycle](/Chapter-10/machinecycle.gif)

## Model Summary

Here is a summary of the basic MIPS programming model.
Click on the hyper-links for more details.

**Machine Instructions:** 
[machine instruction, size](chapter-10-09)
Machine instructions
are thirty-two bits wide.
Bit patterns specify the operation, the operands,
and the destination for the result.
Basic operations are arithmetic, logic,
memory access, and control branches.

**Machine Cycle:** The
[MIPS machine cycle](chapter-10-08)
machine cycle
is illustrated at right.
Execution proceeds sequentially one instruction
at a time.
The
[control point](chapter-10-10)
control point
indicates the instruction about to execute.
ALU operations 
never directly access memory.

**Registers:** 
Thirty-two 32-bit wide general purpose registers,
which have various 
[register, naming conventions](chapter-10-07)
conventional uses.
Register `$0` is hard-wired to 32 zero-bits.

**Memory:** 
Thirty-two bit address space,
but only the lower half (most of it anyway)
is for user programs.
User memory is further divided
[memory, conventional layout](chapter-10-03)
(by software convention)
into *text*, *data*, and
*stack* segments.

