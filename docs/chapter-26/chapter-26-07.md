---
sidebar_position: 7
title: "Calling Convention"
---

Calling Convention

## Answer

Yes.

## Content

![Correct Subroutine Linkage](/Chapter-26/subManyCorrect.gif)

The
diagram shows the subroutine `sub` being
called from three different points in the main routine.
Each time the subroutine is called it returns to the
appropriate return address.

**A **calling convention** is an agreement 
about how subroutines are called and how
control is returned to the caller.**
Mostly (as we will later see) this is an agreement
about how software will work.
In processors (like MIPS) that have hardware features that support subroutines,
the convention says how those features are used.

Different languages 
and different operating systems 
for the same processor
usually have different calling conventions.
A C program compiled for Linux on a MIPS processor
will not work correctly with Irix on a MIPS processor.
This is largely because the calling conventions are different.
These chapters discuss several calling conventions
that show what calling conventions are about, 
but are not the calling convention of
any particular operating system.

There is more to a calling convention than how to
pass control, as the next question shows:

## Question

Is subroutine `sub`
free to use any of the 32 registers?
