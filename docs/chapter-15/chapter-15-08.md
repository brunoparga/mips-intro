---
sidebar_position: 8
title: "Store Word Instruction"
---

Store Word Instruction

## Answer

```mips
lw $12, 0x10($13)
```

The original value in `$12`  is irrelevant; it is replaced with
a value from memory (memory remains unchanged).

## Content

```mips
sw   t,off(b)       # Word at memory address (b+off) ← $t 
                    # b is a register. off is 16-bit two's complement.

```

**The
 store word instruction, `sw`,
copies data from a register to memory.**
The register is not changed.
The memory address is specified using a base/register pair.

As with the `lw` instruction,
**the memory address must be word aligned (a multiple of four).**

## Question

![Picture of the Problem](/Chapter-15/lwProblem.gif)

Look at registers `$12` and `$13` and memory (at right).
Write the instruction that puts the word 0xFFFFFFFF into
memory location 0x0004000C.

- Register $12 contains `0xFFFFFFFF`
- Register $13 contains `0x00040014`

> ```mips
> sw $ ,($)
> ```

Hint: it is OK to specify the 16-bit offset as a signed decimal integer.
