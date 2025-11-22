---
sidebar_position: 3
title: "Unconditional Branch Instruction"
---

Unconditional Branch Instruction

## Answer

```mips
beq    $s1,$0,label          # branch to label if register $s1 == 0

```

## Content

The
pseudocomputer has an ****unconditional branch**
instruction that always causes a branch.**
The mnemonic for the instruction is `b`:


```
b     label       # branch to label 
                  # (pseudoinstruction)

```

This instruction behaves like the jump instruction:
it unconditionally loads the PC with the address specified by
`label`.

Unlike the jump instruction,
the branch target `label` must be
relatively close to the branch instruction,
as is true with all branch instructions.
The 32-bit address is computed using a 16 bit offset
in the instruction and the current value of the PC.

## Question

The extended assembler implements the `b` instruction
using the `beq` instruction.
Fill in the blanks to show what it does:



```
b  label     ==     beq   , ,offset

```



Offset is the 16-bit offset that is added to the PC
to calculate `label` (if possible).
