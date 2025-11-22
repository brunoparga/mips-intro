---
sidebar_position: 6
title: "Starting SPIM"
---

Starting SPIM

## Answer

It is a machine language program in memory (possibly in ROM).

## Content

![SPIM settings](/Chapter-22/exceptionOptions.gif)

**With  SPIM, 
exceptions are handled  by the simulator.**
On a real machine an exception handler might be permanently
in ROM, might be loaded from a "boot sector" of the hard disk,
or (in the good old days) might be entered into memory by hand.

To use the exception handler with SPIM do the following
in the Simulator Settings panel.**Set the options "Allow pseudoinstructions"
and "Load trap file".
Disable "Mapped I/O".**

**Bug Alert!**
Make sure that "Mapped I/O" is disabled!
The memory mapped I/O option simulates the hardware implementation of I/O
and interferes with these system calls.

Now to assemble and load your program go to
File Open and select the source file
(just as we have been doing).
Your program is loaded along with some
initialization code.
The initialization code starts at address 0x00400000,
the address that has until now been where your programs
started.

To run the program click on Simulator Go
and then OK in the pop-up panel.

## Question

Can you single step starting at address 0x00400000 as before?
