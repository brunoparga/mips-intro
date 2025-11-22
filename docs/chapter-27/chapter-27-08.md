---
sidebar_position: 8
title: "Nested Subroutine Calls"
---

Nested Subroutine Calls

## Answer

No.

## Content

![chain of subroutine calls](/Chapter-27/popetBeads.gif)

The
diagram at right shows the main routine
linking to subroutine A, which links to subroutine B,
which links to subroutine C.

The subroutines link together like beads on a double string.
Control is passed from the caller to prolog, and from
epilog back to the caller.
All subroutines in a calling chain (except the one at the bottom)
have all five sections (call, prolog, body, epilog, and regaining control).

**Each time another subroutine is added to the chain,
more data is pushed onto the run-time stack.**
At the end of the chain of calls the run-time stack
has a section of data (saved register values) from
each of the subroutines (including main).
**The currently active subroutine is the one whose data
is at the top of the stack** (subroutine C, in our
upside-down stack).

**As
each subroutine returns to its caller,
its section of data is popped from the stack.**

A subroutine does not "know" anything about the
stack other than its own section.
It pushes its data onto the stack, and later on
pops exactly that data back into registers.
It does not look at any other data in the stack.
It does not even know how deep the stack is.

Sometimes instead of saying "calling a subroutine" people say
"activating a subroutine."
Each bead in the picture and each section of the stack
corresponds to one subroutine activation.

Sometimes (on a real computer) when a program "crashes"  the
operating system takes over and prints a **stack trace.**
**A stack trace shows the values on the activation chain at the time
of the crash.**

## Question

After subroutine B returns control to subroutine A, might
subroutine A call another subroutine (say subroutine X)?
