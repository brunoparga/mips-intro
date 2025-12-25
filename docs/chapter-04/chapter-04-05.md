---
sidebar_position: 5
title: "Addresses"
---

Addresses

## Answer

A byte.

## Content

![cells of memory](/Chapter-04/memory01.gif)

**Each byte of  main storage has an **address**.**
Many processors use 32-bit addresses, 
so there are 2<sup>32</sup> possible
addresses.
Think of main storage as if it were an array:

```
byte mainStorage[0x00000000 ... 0xFFFFFFFF];

```

**A main storage address is an index into memory.**
A 32-bit address
is the address of a single byte.
Thirty-two wires of the bus contain an address
(there are many more bus wires for timing and control).

Sometimes people talk about addresses like 0x2000,
which looks like a pattern of just 16 bits.
But this is just an abbreviation for the full 32-bit address.
The actual address is 0x00002000.

The first MIPS processors (designed in 1985)  
used 32-bit addresses.
From 1991 to present, top-end
MIPS processors use 64-bit addresses.

The MIPS32 processor used in these notes is a modern chip designed
for embedded applications.
It uses 32-bit addresses, since embedded applications
often don't need 64 bits.
Recent processor chips from AMD and Intel
have 64-bit addresses, although 32-bit versions are
still available.

**The assembly language of this course is for the MIPS32 chip,
so we will use 32-bit addresses.**
The assembly language of the 64-bit MIPS chips is similar.

## Question

What is the hexadecimal name for the 32-bit pattern
that consists of all 1 bits?
(Hint: look at the picture.)
