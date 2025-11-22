---
sidebar_position: 2
title: "Passing Control with a Jump Instruction"
---

Passing Control with a Jump Instruction

## Answer

The `j` (jump) instruction or the `b` (branch) instruction.

## Content

![subroutine called once](/Chapter-26/subOnce.gif)

**At
right is a sketch of what you can do with 
the `j` instruction.**
(The same could be done with the `b` instruction.)
If the main routine needs to start up ("to call") 
a subroutine `sub` it can jump to
it with a `j` instruction.
At the end of the subroutine, control can
be returned with another `j` instruction.

The subroutine returns to a statement in
`main` labeled `ret`.
The subroutine is
called at just one point in `main` 
and it returns to an address a few instructions after
that point.

**The subroutine can only be used once**
in the `main` program because it
always returns to the same location.
(You could write some tricky code to overcome
this limitation.
But it is much better to follow a subroutine linkage
convention such as is about to be discussed.)

A subroutine **call** is when a main routine (or other routine) passes control
to a subroutine.
The main routine is said to be the CALLER and the
subroutine is said to be the CALLEE.

A  **return** from a subroutine is when a subroutine passes control
back to its CALLER.
When a CALLEE finishes execution
it nearly always returns control to its CALLER.

## Question

Is it normal that a subroutine can be used
in only one place in a program?
