---
sidebar_position: 6
title: "Most Jumps (and Branches) are Local"
---

Most Jumps (and Branches) are Local

## Answer

The PC contains the address of the instruction that follows the jump instruction.
Recall that the machine cycle is "fetch - increment PC - execute" so the PC
will have been incremented.

## Content

**Most jumps and branches are to nearby addresses.**
The target of the jump instruction 
and the
instruction following the jump instruction 
are likely to be close together in memory.
The high-order four bits of their addresses will be identical.
**So the high-order four bits of the PC 
are  the same as needed for the target address.**

Of course,
an assembly language programmer must be careful 
to make sure that
this is so.
When a compiler translates a source program into
machine language it also must pay attention to addresses.
For the tiny programs  you will write for this course
the high four bits of the PC will always be the high four
bits of the jump address.

A jump instruction can't jump to any arbitrary location in the
full 32-bit address space.
It must jump to an address
within the following range:

```
wxyz 0000 0000 0000 0000 0000 0000 0000
                   .
                   .
                   .
wxyz 1111 1111 1111 1111 1111 1111 1100

```

Here, **wxyz** represents the high-order four bits of the PC.
Almost always the jump instruction and the jump address
are both within this range.

All these details may look terrible to you at this point.
Don't worry: (1) its not as bad as it looks, and
(2) usually the assembler does all the work.
(But for now, *you* get to do the work).

## Question

Some 32-bit processors have instructions of several lengths.
Such processors can include the full 32-bit address in a jump instruction
thats long enough to hold it.
But MIPS instructions are always 32 bits.
Some sort of trick must be used with its jump instruction.

Here is a great idea!
Why not implement the jump instruction
without using an explicit op-code?
Build the processor so that
when execution encounters 
a 32-bit address it automatically
jumps to that address.

Will this scheme work?
