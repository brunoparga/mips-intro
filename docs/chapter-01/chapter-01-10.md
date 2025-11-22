---
sidebar_position: 10
title: "Main Storage"
---

Main Storage

## Answer

Problems that involve the very computer the program is
running on.

## Content

![IMSAI computer](/Chapter-01/IMSAI.jpg)

*A Beautiful Computer*


Assembly 
language *does* match the problem when the
problem is the operation of the computer system.
**Assembly language is used for operating systems,
compilers, communications, low-level graphics, and other
programs where the architecture of the processor
must be visible.**
Often  the crucial parts of these programs are written
in assembly and the rest
in a high level language (usually C.)

The most common use of assembly language is in programming
**embedded systems**.
Here a processor chip is
part of a machine built for a specific purpose.
Examples are 
aviation electronics, 
communication satellites, DVD players, 
robots, automobile electronics,
cell phones,
and game consoles.
MIPS chips are commonly used in these.

Now let us move on to the memory of a computer system.
**Eight bits make up a **byte**. 
A **bit** is a single on/off value.**
Early computers had rows of toggle switches
which were used to set the values of bits in main memory.
You could program these computers by entering
the bits of each machine instruction from the front panel switches.
A light above each switch 
showed whether it was on or off (1 or 0).
Modern computers have more convenient methods
for moving bit patterns into memory.

**he 
bytes that make up the
machine instructions of a program are stored in
**main memory****
and fetched into the processor as needed.
**Data is also kept in main memory.**
Keeping both data and instructions in main memory
is one of the characteristics of a **Von Neumann** machine, 
the name for the basic design of most modern computers.

In the MIPS, as in most computers,
**each byte of main memory has an address.
An address is an integer that uniquely identifies the byte.**
The addresses run from 0 up to about four billion.
However, on the MIPS, user programs and data 
(such as you will write) are
restricted to the first two billion addresses.

## Question

It it necessary to install four billion bytes of RAM on a MIPS
computer?
(Hint: the address range of a MIPS is the same as that of a 32-bit Pentium).
