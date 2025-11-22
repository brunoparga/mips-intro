---
sidebar_position: 3
title: "Jump Instruction does not work for Subroutine Call"
---

Jump Instruction does not work for Subroutine Call

## Answer

No. You would like to call a useful
subroutine from many locations in a program.

## Content

![subroutine called three times](/Chapter-26/subMany.gif)

**Especially useful subroutines are put into
subroutine libraries and can be called from many locations**
in many programs, and so, of course, they must
return to many different locations.

**There is a problem with using `j`
for the call of and return from a subroutine.**

The
problem is illustrated at right.
The `main` routine is written
to call a useful subroutine
`sub` at several locations 
in the code.
But, as it is written, `sub` always returns
control to the same location.
Usually this will not work.

In the past, before the concept
was completely understood,
hardware support for
subroutines was missing.
Various nasty software tricks were used to
implement the idea.

**What is needed is a way 
to send
a **return address**
to the subroutine when it is called.**
Now when the subroutine finishes,
it passes control to that return address.

Of course, "passing control to a return address"
means that 
**the subroutine loads the 
PC (program counter) with the return address.**
The next instruction fetch of the machine cycle
will get the instruction from that address.

## Question

(Hardware Design Question: )
How should the return address be passed to
the subroutine?

- By placing it in main memory somewhere, or
- By placing it in a register designated for this purpose.
