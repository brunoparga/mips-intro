---
sidebar_position: 3
title: "Zero Extension"
---

Zero Extension

## Answer

- What bit pattern is contained in register `$0` ?
    - All zero bits
- How many bits are there in each MIPS instruction?
    - 32 bits

## Content

Look
again at the instruction:

```mips
address         machine code      assembly code

0x00400000      0x34080002        ori $8,$0,0x2

```

The sixteen bits of immediate operand,

```
0000 0000 0000 0010
```

are to be bitwise ORed with the thirty-two bits of register zero,

```
0000 0000 0000 0000 0000 0000 0000 0000
```

This would not ordinarily be possible
because the operands are different lengths.
However, **when the instruction is executed
the processor **zero extends** the sixteen-bit operand
so the operands are the same length.**
Sometimes this is called *padding with zeros* on the left.


```mips
 
   zero extension
---- ---- ---- ----
0000 0000 0000 0000 0000 0000 0000 0010   -- zero extended immediate operand
0000 0000 0000 0000 0000 0000 0000 0000   -- data in register $0
---------------------------------------
0000 0000 0000 0000 0000 0000 0000 0010   -- result, put in register $8


```

An OR operation is done in each column.
The 32-bit result is placed in register `$8` .

## Question

After the instruction
`ori $8,$0,0x2`
executes, what is in `$8`  ?
