---
sidebar_position: 3
title: "Variables"
---

Variables

## Answer

Yes.

## Content

![stack frame](/Chapter-28/stackFrame00.gif)


Programming languages have global variables.
Also, a program block nested within other program blocks
can use variables
of the outer blocks.
Let us skip these details and implement
local variables, only.
The details may be covered in a course on
compilers or in a course on programming languages.

**Conceptually, when a subroutine is called,
its stack frame is pushed onto the stack.
And, when a subroutine returns
to its caller its stack frame is popped.**
(Details follow.)

**The picture shows a stack frame
of
an active subroutine.**
This stack frame is on the top
of the run time stack.
The rest of the stack is not shown.
Stack frames for other subroutines may be
below it on the stack.

As always (for these notes),
each item on the stack is four bytes long.
Stacks (for us) grow in the direction of
decreasing addresses.

When a subroutine is called,
the caller pushes values from `T` registers
that it will need to restore when it regains control.
The subroutine (the callee) pushes values from `S` registers that
it might change.

In this example, 
**space is reserved in the stack frame for implementing
four **local variables** `a, b, i` and `j`.**
The rest of the stack frame is used to save register values and the return address.

In the picture, the space reserved for variable `a` is
labeled "a", but of course what is in that space is the 32-bit
pattern that the variable holds. 
Usually our variables will be integer variables.

> **A **variable** is a location in the run-time stack that
> is used to store data.** The values stored in a variable may
> change as the program executes.

Variable `a` is the space on the stack. 
There is no other "thing" that implements the variable.
In the program, manipulating a variable  
is done by using registers to load and store values from
the variable's space in the stack.
However, the variable is the space in the stack, not a register.

## Question

When the stack frame is popped, what happens to the local variables?
