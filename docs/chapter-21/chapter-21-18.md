---
sidebar_position: 18
title: "SPIM Run"
---

SPIM Run

## Answer

Six!
The `la` instruction is
translated into  two machine instructions,
and F10 is pushed once for each.

## Content

Here
is a run of the program.
The SPIM listing shows the 
two machine instructions that
the assembler used for the
`la`
pseudoinstruction in this context.
The assembler uses different
machine instructions in different contexts.

Recall that the listing shows the source code to the right of the semicolon.
The machine language it assembled into is in the column that follows 
the addresses.
The column after that is the machine language translated back into assembly (disassembled.)

**Look carefully in the disassebly column at the two instructions
that SPIM used for the `la` instruction in the source code.**
They both use register `$1`.


![Run of SPIM](/Chapter-21/SPIMla.gif)

## Question

In the
Register Table 
what is the mnemonic name for register `$1`?
