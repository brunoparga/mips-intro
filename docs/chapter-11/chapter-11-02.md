---
sidebar_position: 2
title: "Immediate Operand"
---

Immediate Operand

## Answer

Yes, as long as the remaining 16 bits are enough to specify the machine operation.

## Content

**Some 
 machine instructions 
 contain a 16  bit
 operand.**
 The second operand is contained in a register.
**An operand that is directly encoded as part of
a machine instruction is called an
**immediate operand**.**

For example, here is one of the instructions from
the previous example program:

```mips
address         machine code      assembly code

0x00400000      0x34080002        ori $8,$0,0x2

```

The last 16 bits (four hex characters) of the 
machine instruction contain the operand 0x0002.
The assembly language instruction can just say "0x2".
The assembler creates a pattern padded with zeros to fill 16 bits.



| OR Operation on Bits |
| --- |
| first operand | 0 | 0 | 1 | 1 |
| second operand | 0 | 1 | 0 | 1 |
|   |   |
| result | 0 | 1 | 1 | 1 |

The machine instruction tells the ALU to perform a
**bitwise OR** between the contents of register
`$0` and the immediate operand 0x0002.
The result is put in register `$8` .

**A **bitwise** operation is where
a logical operation is performed on the bits of 
each column of the operands.**
The result in each column depends only on the bits in that column.
Here is the bitwise OR between two 8-bit patterns:

```
0110 1100    operand
0101 0110    operand
0111 1110    result

```

## Question

- What bit pattern is contained in register `$0` ?
- How many bits are there in each MIPS instruction?
