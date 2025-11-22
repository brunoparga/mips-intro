---
sidebar_position: 4
title: "Basic Machine Cycle"
---

Basic Machine Cycle

## Answer

No, although different car models differ in many ways, 
all cars are fundamentally the same.
You don't need special lessons if you switch from a Ford to a Chevy.

Assembly language is much the same way.
The details vary from processor to processor,
but the fundamentals are the same.

## Content

![machine cycle](/Chapter-01/machinecycle.gif)

Processors
endlessly repeat
three basic steps.
**Each
**machine cycle**
results in the execution of one 
*machine instruction*.**
A modern processor performs millions of machine cycles per second.

**A **machine instruction**
is a pattern of bits that corresponds to a
fundamental operation of the processor.**
This might be adding two 32-bit integers together
or testing if a value is zero.
The details of the machine cycle differ
between processor families.
The machine cycle
of most processor chips
looks like the following:

> ****Fetch the Instruction.****
> The instruction is fetched from memory
> from the address in the program counter.
> The *program counter* (PC)
> is part of the processor.
> It contains the address of the instruction in memory.

> ****Increment the Program Counter.**** 
> The program counter now points to the next instruction.

> ****Execute the Instruction.**** 
> The operation asked for  by the
> current machine instruction is
> performed.

On a 32-bit processor, memory addresses are 32 bits wide and so the program counter (PC) 
holds a 32 bit address.

## Question

In what order are machine instructions in a program executed by the basic machine cycle?
