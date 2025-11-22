---
sidebar_position: 11
title: "Handy ANDI Instruction"
---

Handy ANDI Instruction

## Answer

An assembler.

An assembler  uses bit manipulation to put
together (to "assemble") the bit patterns of each machine instruction. 
This is a typical assignment in a systems programming course.
Of course, you will likely write your assembler in C 
and will use its bitwise operators.
But they ultimately become the processor's bitwise operations.

## Content

```mips
andi d,s,const     # register d loaded with
                   # bitwise AND of zero-extended immediate operand const
                   # and the contents of register $s.
                   # const is a 16-bit pattern, so
                   # 0x0000 ... const ... 0xFFFF

```

**The `andi` instruction does a bitwise AND of two 32-bit
patterns. At run time the 16-bit
immediate operand is padded on the left with zero bits to make it a 32-bit operand.**

The three operands of the instruction must appear in the correct order,
and `const` must be within the specified range.
The immediate operand in the source instruction always specifies sixteen bits
although the zeros on the left can be omitted (such as 0x2).


| AND Operation on Bits |
| --- |
| first operand | 0 | 0 | 1 | 1 |
| second operand | 0 | 1 | 0 | 1 |
|   |
| result | 0 | 0 | 0 | 1 |

## Question

Is the following instruction correct? What does it do?

```mips
andi $8,$0,0xFFFF

```
