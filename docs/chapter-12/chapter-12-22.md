---
sidebar_position: 22
title: "A Run of the Program"
---

A Run of the Program

## Answer

Would it be possible to *dis-assemble* the
instruction in `$25`?

Sure. Bit logic operations can take apart the various
fields and put them in different registers.

## Content

Disassembly 
sounds like a really great programming assignment.
But now let's run the assembler program.

The machine instruction in register `$25` is correct, as expected.
It would be nice to save the instruction to memory at this
point, but you don't know how to do this yet.

![SPIM display of program](/Chapter-12/complAss.gif)

Note that the bit pattern (machine instruction) we assembled in register  `$25`
is the same bit pattern the real assembler gave us for the assembly instruction in the last line of the program.

## Question

Could this program be written using fewer registers?
