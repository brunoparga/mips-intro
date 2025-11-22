---
sidebar_position: 2
title: "Implementation of Local Variables"
---

Implementation of Local Variables

## Answer

```

Other programming languages have the same idea, implemented with different syntax.

## Content

**In a high-level language a **local variable** is
implemented as a location on the
run-time stack.**
Each time a subroutine is activated,  
locations for its variables are  pushed onto the stack.

**The section of the stack for each activation
is called a **stack frame** or an **activation record.****
A **frame pointer** holds the address of the stack frame
for a subroutine.

**When a subroutine returns to its caller the stack frame
is popped from the stack.
Thus, local variables only exist as memory locations while
a subroutine is active.**
A subroutine is active if it is currently executing, or
if a subroutine it has called is active.

The format of a stack frame used by MIPS 
language processors is complicated.
There are many situations that must be
handled and many optimizations.
It takes a compiler to do it correctly.
These notes describe a much simplified
stack frame.

The important part is to understand what a
local variable is, in general: 
a location on the run-time stack.
This is an important idea in computer science,
one you will run into repeatedly as you study
advanced topics.

## Question

In a high-level language are there variables that are not local?
