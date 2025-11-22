---
sidebar_position: 4
title: "Writing an Assembly Program"
---

Writing an Assembly Program

## Answer

![](/Chapter-09/startAddress.jpg)

8fa40000

(The display uses lower case hex digits.)

## Content

Messages 
from the *simulated computer* 
appear in the console window when an
assembly program that is running (in simulation) 
writes to the (simulated) monitor.
These are the messages your program writes.
If your program were running on a real MIPS computer you would see
these messages on its monitor.

Messages from the *simulator* 
are written by the simulator program (not by your program running on it.)
These are error messages, prompts,
and reports.

Depending on the settings of the simulator,
**qtSpim may start with some machine instructions already in 
simulated memory (into the text section).**
These instructions assist in running your programs when you load one into memory.
But right now, you have not done this.
If you start the simulator from the 
Simulator menu this code will run,
but it will immediately stop with an error message.

**A **source file****
(in assembly language or in any programming language)
**is a text file containing programming language statements
created (usually) by a human programmer.**

An editor like *Notepad* will work.
You will probably want to use a better editor,
but as a common ground I'll use *Notepad*.   
(The freeware *Notepad++* is especially good
but any text editor will be work).

## Question

(Review) What type of files does *Notepad* create?
