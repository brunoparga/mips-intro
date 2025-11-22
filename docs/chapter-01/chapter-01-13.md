---
sidebar_position: 13
title: "Separate Translation"
---

Separate Translation

## Answer

Of course.  Say that the emulator is written in C.
Compile the emulator and run it on a MIPS computer.
Now the program running on the MIPS is a MIPS emulator.
This is a very computer-science-like notion.

## Content

![source to object](/Chapter-01/sourceTOobject.gif)

**Running an emulator on the same processor it is emulating is
often used for debugging.**
Working with an emulator is usually more convenient than
dealing with the hard silicon of the actual hardware.

You might wonder if an emulator of an Apple can run
on an emulator of an Intel machine that is running
on a MIPS machine.
Yes, as long as the various emulators exist.

**For  many years  assembly language
was used for serious enterprise-wide programming for one
reason:  separate source files could be individually
assembled, and later combined (linked) into the full
executable.**
Each source file was assembled into an object module.
This is called **separate assembly**
(or *separate translation*).

**An **object module** is a file that contains 
a machine language program
that is not quite ready to run.**
It may not be ready to run for several reasons:
the source code
might not be completely translated
(since more information is needed),
memory locations for code and data 
might not be assigned,
and more code is needed
before the program is complete.
An assembler creates an object module
for each source file of assembly language.

## Question

(Software Engineering Question:) Why translate many individual
source files? Why not have one, big, complete program
that translates into a complete, ready-to-run executable?
