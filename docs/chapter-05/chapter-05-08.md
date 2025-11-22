---
sidebar_position: 8
title: "ASCII Sequences"
---

ASCII Sequences

## Answer

50 Percent, 128 out of 256

## Content

ASCII uses all 128 7-bit patterns.
There are twice as many 8-bit patterns.
Some computer makers use the 
additional patterns to represent various shapes.
Old  Windows PCs, for example,
used these extra patterns to represent
symbols and graphics characters.
Some printers will not work with these additional patterns.

**Part of what an assembler does is to assemble the ASCII bit patterns**
that you have asked to be placed in memory.
Here is a section of an assembly language program:

```
.asciiz      "ABC abc"

```

Here are the bit patterns that the assembler will produce
in the object module:

```
41 42 43 20 61 62 63 00

```

These bit patterns will be placed sequentially in memory,
one pattern per byte.

**The `.asciiz`  part of the source code asked the assembler to assemble
the characters between the quote marks into ASCII bit patterns.**
The first character, "A", corresponds to the bit pattern 0x41.
The second character, "B", corresponds to the bit pattern 0x42.
The fourth character, " " (space), corresponds to the bit pattern 0x20.
The final bit pattern 0x00 (NUL) is used by the assembler to
show the end of the string of characters.

## Question

What will be the assembled patterns
for this assembly code:

```
.asciiz   "A B"

```
