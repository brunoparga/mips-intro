---
sidebar_position: 6
title: "Virtual Memory"
---

Virtual Memory

## Answer

What is the hexadecimal name for the 32-bit pattern
that consists of all 1 bits?

0xFFFFFFFF

## Content

![virtual memory](/Chapter-04/virtualMem.gif)

The MIPS32 has an address space of 2<sup>32</sup> bytes.
A Gigabyte is 2<sup>30</sup>, so the MIPS has 4 gigabytes
of address space.
Ideally, all of these memory locations would
be implemented using memory chips
(usually called RAM).

**On
modern computers,
the full address space is present
no matter how much RAM has been installed.**
This is done by keeping some parts of
the full address space on disk and some parts in RAM.
The RAM, the hard disk, some special electronics,
and the operating system
work together to provide the full 32 bit
address space.
To a user or an applications programmer
it looks as if all 2<sup>32</sup>
bytes of main memory are present.

**This method of providing the full address space
by using a combination of RAM memory and the hard
disk is called **virtual memory**.**
The word *virtual* means 
"appearing to exist, but not really there."
Some computer geeks have a virtual social life.

## Question

Which is faster:
access to physical (RAM) memory or access to the hard disk?
