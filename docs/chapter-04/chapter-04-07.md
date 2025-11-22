---
sidebar_position: 7
title: "Cache Memory"
---

Cache Memory

## Answer

Which is faster:
physical memory or the hard disk?

Physical memory.

## Content

Disk
 access is slow compared to RAM access.
Potentially, using a combination of real memory and
disk memory to implement the address space could
greatly slow down program execution.
However, with clever electronics and a good operating
system, virtual memory is only slightly slower
than physical memory.

Computer systems also have
**cache memory**.
**Cache memory is very fast RAM that is inside (or close to)
the processor.
It duplicates sections of
main storage that are heavily used
by the currently running programs.**
The processor does not have to use the system bus to
get or store data in cache memory.
Access to cache memory is much
faster than to normal main memory.

Like virtual memory, cache memory looks like ordinary memory to most programs.
It is an electronic detail below the level of
abstraction provided by assembly language.
**Hardware keeps cache up
to date and in synch with main storage.
Your programs are unaware that there is
cache memory and virtual memory.**
They just see "main memory".
Application programs don't contain 
instructions that say "store this
in cache memory",
or say "get this from virtual  memory".
They only refer to the contents of
main memory at a particular address.
The hardware makes sure that the program
gets or stores the correct byte,
no matter where it really is.

## Question

Since memory looks like an array of bytes, is it
necessary for each item of data in memory to be
one byte long?
