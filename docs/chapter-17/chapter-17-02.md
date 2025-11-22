---
sidebar_position: 2
title: "How a Jump Works"
---

How a Jump Works

## Answer

Yes. Each byte of main memory has an address. 
The address of a machine instruction is the address of the first of its four bytes.

## Content

![Machine Cycle](/Chapter-17/MachineCycle.gif)

**When a program is executing,
its instructions
are located in main memory.**
Each instruction has an address.

Each machine cycle 
executes one 
machine instruction.
**At the top of the machine cycle, 
the **PC** (program counter) 
contains the address of an
instruction to fetch from memory.**
The instruction is fetched into the
processor and is prepared for execution.

In the middle of the machine cycle the
**PC** is incremented 
by four so that it points to
the instruction that follows the one just fetched.
Then the fetched instruction is executed
and the cycle repeats.
The machine cycle automatically executes
instructions
in sequence.

**When a **jump** instruction executes
(in the last step of the machine cycle),
it puts a new address into the PC.**
Now the fetch 
at the top of the next machine cycle would fetch the
instruction at that new address.
Instead of executing the instruction that follows
the jump instruction in memory,
the processor would "jump" to an instruction
somewhere else in memory.


**However,
it takes an extra machine cycle before
the change in the PC takes effect.**
Before the PC changes,
the instruction that follows 
the jump instruction in memory is
fetched and executed.
After that instruction executes,
the next instruction to execute is the one
that was jumped to.
**The instruction that follows
a jump instruction in memory
is said to be in the **branch delay** slot.**

**The reason for this delay 
is that MIPS
is **pipelined.****
Logically, instructions are executed one after another in sequence.
However, in order to gain speed, the processor  works on 
several sequential instructions simultaneously.
These instructions are in an instruction **pipe**.
When a jump instruction is about to change the PC,
the work already started on the instruction that follows it is allowed to finish.

**The instruction that 
follows a jump instruction in memory
(in the branch delay slot)
is always executed.**
Often this is a no-op instruction.
After it executes, 
the next instruction to
execute is the one that was 
the target of the jump instruction.

The SPIM simulator allows you to turn the pipeline
feature off, but this is not an option 
with actual hardware.
So, for now, leave this option on.

## Question

(Review:) What does a no-op instruction do?
