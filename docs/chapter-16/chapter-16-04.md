---
sidebar_position: 4
title: "All Addresses Great and Small"
---

All Addresses Great and Small

## Answer

```mips
sb    $10,0x119($8)

```

## Content

**There 
are no alignment requirements for the three instructions:**
`lb`,
`lbu`, and
`sb`.
Any byte in memory that is acceptable for program data
can be used.
This is fortunate since character strings
are usually stored in successive bytes.

Byte 
load and store instructions are often
used for input and output with media
that must be used on many types of systems.
Often the data written to magnetic tape
by one government agency is used
by other agencies using different computers.
To make the data transportable,
the format of the data is described
byte by byte.
The format must be followed,
regardless of the inherent byte order
of the computers writing or reading the data.

## Question

A particular data tape requires **big-endian** integers.
Data is assembled in memory in a buffer before it is written out to the tape.
The I/O buffer for the tape starts at address 0x10000000.

Complete the following instructions so that the
integer in register `$9` is stored in the four bytes
starting at address 0x10000000. 
Put the most significant byte (the "big end") at the starting address.

```mips
lui  $8,0x1000       # $8 is base register

sb   $9,($8)    # least significant byte

srl  $9,$9,     # move next byte to low order

sb   $9,($8)    # bits 8-15 

srl  $9,$9,     # move next byte to low order

sb   $9,($8)    # bits 16-23 

srl  $9,$9,     # move next byte to low order

sb   $9,($8)    # most significant byte

```
