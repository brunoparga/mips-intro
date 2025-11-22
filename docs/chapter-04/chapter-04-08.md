---
sidebar_position: 8
title: "Contents of Memory"
---

Contents of Memory

## Answer

No. Most data and instructions are several bytes long
and occupy several consecutive memory addresses.

## Content

**The  memory system merely stores bit patterns.**
The electronics is build to do that and that is all it does.
Some of these patterns represent integers,
some  represent characters, 
and some  represent instructions (and so on).
But that does not matter to the electronics.
How these patterns are used depends on the programs that 
use them.
A word processor program,
for example,
is written to process patterns that represent characters.
A spreadsheet program
processes patterns that represent numbers.

Of course,
**most programs process several types of data,
and must keep track of how each type is used.**
Often programs keep the various uses
of memory in separate sections,
but that is a programming convention, not
a requirement of electronics.

> **Any byte in main storage can contain any 8-bit pattern.**
> No byte of main storage can contain anything but an 8-bit pattern.
> There is nothing in the memory system of a computer that says what
> a pattern represents.

## Question

When first turned on,
many computer systems test their RAM by writing various
patterns to various locations and then reading the patterns back.
Do you think this is a good test?
