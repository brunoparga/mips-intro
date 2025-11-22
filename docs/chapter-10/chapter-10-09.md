---
sidebar_position: 9
title: "Sequential Execution"
---

Sequential Execution

## Answer

Each MIPS instruction is 32 bits (four bytes) long.
The PC is incremented to point at the next instruction.

## Content

![SPIM view of the program](/Chapter-10/addProg.gif)

**MIPS**
machine instructions are all 32 bits wide (4 bytes).
Normally,**instructions are executed one after another
starting with the first instruction of the program
and proceeding in sequence through memory.** 
The execution sequence can be changed with a
*branch* or a *jump* machine instruction.

For example, above is the program from the previous chapter.
The three machine instructions have been placed at locations
0x00400000, 0x00400004, and 0x00400008, and are executed
in that order.

It  takes three machine cycles to
execute this very tiny program.

## Question

After the instruction at 0x00400008 has executed,
what happens?
