---
sidebar_position: 6
title: "A Run of the Program"
---

A Run of the Program

## Answer

What is the *symbolic address* of the first byte
of the `.data` section?
    tape    
What main storage address will it have at run time?
    0x10000000

**The main storage address for the first byte of
the data section is 0x10000000 by default
(of the SPIM assembler).**
There is nothing in the program that says this.

## Content

![SPIM Display](/Chapter-16/endianRun.gif)

**The 
SPIM display shows data in groups of 4-byte words with
the most significant byte on the left.**
This makes the data readable by humans.
Within each group of four, the byte with the
lowest address is on the right.
The picture show SPIM looks after the low-order byte of
register `$9` has been stored to the buffer.

In the dis-assembly part of the SPIM display of the second statement,
the instruction is showh as

```mips
ori  $9,$9,22136

```

Here, the bit pattern `0x5678` has been translated into decimal representation by SPIM.

Register `$9` has been loaded with the bit pattern `0x12345678`.

The low-order byte has been stored where it should be in memory,
although you have to look at the
display carefully to see this.
(Recall that SPIM displays each group of four bytes in backwards order to make reading little-endian integers easier.)

## Question

Which byte of `$9` should go into address $0x10000000?
