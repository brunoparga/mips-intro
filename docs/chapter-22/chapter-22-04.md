---
sidebar_position: 4
title: "Print String"
---

Print String

## Answer

This is how the program returns control to the operating system
without expecting to get control back.

On SPIM, the exit service stops execution of the simulated MIPS processor.

## Content

```mips
li      $v0,4       # code 4 == print string
la      $a0,string  # $a0 == address of the string
syscall             # Ask the operating system to 
                    # perform the service.
    . . . .

        .data
string: .asciiz      "Hello SPIM!\n"

```


The
 *exit* service is
normally used when the program is finished.
A real computer is always running, 
and control has to go *somewhere*,
so this is how control is sent back to the OS.
The OS then goes about its own tasks, possibly starting another user
program.

**The **print string** SPIM exception handler service prints
a **null terminated** string to the simulated monitor.**
The address of the string is loaded into register `$a0`.
Typically the string is in the data section of memory.

The print string service sends bytes to the simulated monitor 
one by one starting
with the byte pointed to by `$a0`.
It continues until it hits a null byte.
It does not check that the bytes are ASCII. 
You will print garbage if you point `$a0` 
at a location that is not an ASCII string.

If you want to advance to a new line, 
use the newline character `'\n'`
inside or at the end of the string.

**Bug Alert:** **the `la` instruction
is used to load the address of the first byte of
the string to be printed.**

**Bug Alert:** values in `t` registers
may be altered by the operating system service,
for this and other services.

## Question

Fill in the blanks.

```mips
  $v0,4           # code 4 == print string
  $a0,message     # $a0 == address of the string
                  # Ask the operating system to perform the service.
    . . . .
         .data
message: .asciiz      "Intruder Alert!\n"

```
