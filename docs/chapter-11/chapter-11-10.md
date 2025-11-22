---
sidebar_position: 10
title: "Uses of Bitwise Logic"
---

Uses of Bitwise Logic

## Answer

```mips
000000  00100 00101 01010    000000 100001  

addu     $4    $5      $10    unused   2nd ary
     operand  operand  dest.           op code
     reg.     reg.     reg.        

```

## Content

**The
first six bits of a machine
instruction (the opcode) specify the machine
operation.**
(Sometimes a secondary opcode is needed).
The opcode also determines how the rest
of the instruction is laid out.
A human needs to look at documentation to figure
out the bit fields of an instruction and what they mean.
The electronics MIPS processor is wired to do this.

Recall (from the second chapter) the fourth advantage of binary:

> - Simple; easy to build.
> - Unambiguous signals (hence noise immunity).
> - Flawless copies can be made.
> - Anything that can be represented with
>      some sort of pattern can be represented 
>      with patterns of bits.

**Most computers have built-in integer arithmetic operations
and built-in floating point operations.**
But computers are used for much more than numbers!
Bit patterns are used to represent very many things.
Bitwise logic is needed 
when computing with bit patterns in all
their various uses.

For example,
a document created with 
a word processor has font and formatting
information embedded within it.
The information is encoded with bit patterns
in ways specific to each word processor family.
A word processor program must use bitwise operations
to process these codes.

## Question

What type of program reads in
strings of symbols encoded in ascii and outputs bit
patterns that encode data and machine operations?
