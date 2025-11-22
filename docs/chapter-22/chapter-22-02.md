---
sidebar_position: 2
title: "syscall"
---

syscall

## Answer

No.

## Content

```mips
li  $v0,code      # Load $v0 with the "code" number of an OS service.

.......           # Put parameters for the service in
.......           # registers $a0, $a1 or $f12 (see below).

syscall           # Invoke the operating system.

                  # Return value (if any) is in $v0 or $f0 
                  # 

```


In even the simplest  computer,
putting a character on the screen involves many
instructions and a detailed knowledge of the video card.
Let's leave this topic until later (perhaps years later).
SPIM includes an "exception handler" that simulates a tiny
operating system that can do input from the keyboard and output
to the monitor.

**Assembly language programs
request operating system services
using the `syscall` instruction.**
The `syscall` 
instruction transfers control to the operating system
which then performs the requested service.
Then control (usually) returns to the program.
(This description leaves out many details).

```mips
syscall  # ask the operating system
         # to perform a service
         # specified in $v0

```

Different operating systems use this instruction in different ways.
For the  SPIM exception handler it is used as above.

**The `syscall` instruction causes an exception,
which transfers control to an exception handler.**
An exception handler is a section of code, part of the operating system,
that performs operating system services.
Different services expect data in different registers, and
not all services return values to the caller.

**A system service works like a subroutine and may alter the
temporary registers.
Values in saved registers are preserved, however.**

## Question

Is `syscall` a *basic instruction*
or a *pseudoinstruction*?
