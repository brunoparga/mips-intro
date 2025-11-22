---
sidebar_position: 12
title: "Emulation"
---

Emulation

## Answer

No.  Sometimes machine instructions (such as Java .class files) are
*interpreted* by software.

## Content

![machine cycle](/Chapter-01/machinecycle.gif)

Apple 
 computers can run Microsoft Windows ".exe" files
(executable files) intended for
Intel computers
even though these machines have different
architectures.  
This is done by running a program on the Apple that
*emulates* (imitates) an Intel processor.

A processor's architecture is a logical description of its
components and its basic operations.
This says nothing about how the architecture is implemented.

**The operations need not be done in electronics.**
They can be done with software.
**A program that implements  a processor's
architecture is the logical equivalent of an implementation in silicon.
Such a program is called an **emulator**.**
Any computer can run an emulator of any kind of computer.
Of course, somebody has to write the emulator, and that is
difficult.

You could do a long division problem with paper and pencil.
Or the same operations could be done by an electronic calculator.
The steps in doing the problem are the same (mostly),
but the implementation is different.

**he 
 basic flow chart of an emulator program
is the machine cycle of
the emulated processor.**
But now the steps are implemented in software,
not in silicon.
The emulated machine cycle 
involves perhaps thousands of program statements.
When the emulator is running, each simulated machine
cycle requires the execution of many instructions
on the host processor.
So emulators run much slower than the processor they are emulating.

This course uses an emulator for the MIPS architecture.
Using an emulator has many advantages over using the
actual hardware.
The biggest advantage is that the architecture described
in these notes will exactly match the architecture implemented
by the emulator.
You can download exactly what you need to use to follow these
notes.
The emulator runs on most common desktop computers;
PC, Mac, or even ...    MIPS.

## Question

Is it possible to run an emulator for a MIPS processor on
an actual hardware MIPS processor?
