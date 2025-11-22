---
sidebar_position: 10
title: "Control"
---

Control

## Answer

After the instruction at 0x00400008 has executed,
what happens?

The processor fetches the 32-bit pattern (whatever it is) at address
 0x0040000C 
and tries to execute it as an instruction.

(Actually, the SPIM simulator stops at this point.
This is a convenience for student programmers, but not what actual hardware would do.)

## Content

**Any bit pattern that is fetched as an instruction 
by the machine cycle is
interpreted as an instruction.**
The bit patterns in the fields tell the
electronics what operation to perform and what data to use.
If the bit pattern makes no sense as
an instruction then the machine cycle is interrupted.
This causes the program to "crash" (or to "bomb".)
However, if the pattern can be interpreted as an instruction then it
will be executed,
whatever it does.

**The **control point** of an executing
program is the address in memory of the instruction
being executed.**
When an instruction is being executed
(in the third step of the machine cycle)
the program counter holds the address of
the instruction after the control point.

Normally the control point moves sequentially
through the machine instructions.
On the MIPS this means it normally moves through
memory in steps of four bytes (32 bits) at a time.
Usually "control point" is shortened to "control" and
the phrase *flow of control* means how the control point
moves through memory.

**If control flow leads to an address in memory,
then the four bytes starting at that address
are fetched
as a machine instruction.**
The processor has no other way to tell instructions
from data.
Whatever bit pattern gets pulled in from memory as
an instruction will be executed as an instruction.
It is common for the control point of a buggy program 
to enter a section of data.
Now, bit patterns that were intended as data get executed as instructions.
This sometimes leads to mystifying results.

By software convention, data and instructions are
placed in different sections of memory.
(This helps prevent mystifying results).
But this is not a requirement of the architecture.

Some processors have **bounds registers** that the operating system sets
to the first and last address of a user program.
Only instructions within bounds may be fetched as instructions.
This also helps prevent mystification.

## Question

Most computer systems start running an
operating systems when power is applied.
When an application program runs, the operating
system passes control to the application.

What must the application do when it is finished
running?
