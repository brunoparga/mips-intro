---
sidebar_position: 4
title: "Registers"
---

Registers

## Answer

Yes. Rather than allocate a fixed amount of memory
for each, this arrangement means each can grow into
available memory.
When the two meet, there is no memory left.

## Content

Often 
data consist of several contiguous bytes.
Each computer manufacturer has its own 
idea of what to call groupings larger
than a byte.
The following is  used for MIPS chips.

- *byte* — eight bits.
- *word* — four bytes, 32 bits.
- *double word* — eight bytes, 64 bits.

**A block of contiguous memory is referred to by the
address of its first byte** 
(ie. the byte with the lowest address.)
Most MIPS instructions involve a fixed number
of bytes.

Often you need a number of bits 
other than one of the standard amounts.
Use the next larger standard amount,
and remember to be careful.
Attempting to use the very minimum number of bits
is more complicated than it is worth and
is a rich source of errors in assembly
language programming.

A **register**
is a part of the processor
that can hold a bit pattern.
On the MIPS, a register holds 32 bits.
There are many registers in the processor, but only
some of them are visible in assembly language.
The others are used by the processor in carrying out its operations.

- **A **load** operation copies a bit pattern from memory into a register.**
- **A **store** operation copies a bit pattern from a register into memory.**

The registers that are visible in assembly language are called
**general purpose** registers and
**floating point** registers.
There are 32 general purpose registers.
**Each general purpose register holds a 32 bit pattern.**
In assembly language, these registers are
named `$0, $1, $2, ... , $31`.
There are 32 floating point registers.
These are discussed in a later chapter.

One of the general purpose registers is hard-wired to always
contain the value 0x00000000 (all zero bits).

## Question

Which register `$0, $1, $2, ... , $31`
 do you suppose always contains all zero bits?
