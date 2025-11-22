---
sidebar_position: 6
title: "MIPS Addresses"
---

MIPS Addresses

## Answer

Yes.

The details are slightly complicated.
But rest assured that there are international standards for this.

## Content

The
 MIPS instruction that loads a word into a register is
the `lw` instruction.
The store word instruction is `sw`.
Each must specify a register and a memory address.
A MIPS instruction is 32 bits (always).
A MIPS memory address is 32 bits (always).
How can a load or store instruction specify
an address that is the same size as itself?

**An instruction that refers to memory 
uses a **base register** and an **offset**.**

- The **base register** is a general purpose register that contains a 32-bit address.
- The **offset is a 16-bit signed integer** contained in the instruction.
- The **sum** of the address in the base register with the 
(sign-extended) offset **forms the memory address**.

Here is the load word instruction in assembly language:


```mips
lw   d,off(b)       # $d ← Word from memory address b+off
                    # b is a register. off is 16-bit two's complement.
                    # (The data from memory is available in $d after
                    #  a one machine cycle delay.)

```

**At execution time two things happen:**

- An address is calculated by adding
the base register `b` with the offset `off`
- Data is fetched from memory at that address

Because it takes time to copy data from memory, 
**it takes an extra machine cycle before the 
data is available in register `$d`.**
This is called a **load delay**.

In terms of assembly language this means the instruction immediately after `lw`
should not use `$d`.

## Question

Write the instruction that loads
 the word at address 0x00400060 into
register $8.
Assume that register $10 contains 0x00400000.



> ```mips
> lw $8, (   )
> ```
