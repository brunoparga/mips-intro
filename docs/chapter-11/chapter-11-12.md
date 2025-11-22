---
sidebar_position: 12
title: "Exclusive Or Immediate"
---

Exclusive Or Immediate

## Answer

Is the following instruction correct? What does it do?

```mips
andi $8,$0,0xFFFF

```

It is syntactically correct, but not very sensible.
At runtime, it ANDs the contents of the zero register (all zeros)
with the zero-extended immediate operand and puts 
the result in register `$8`.
Of course, the result is all zeros, 
regardless of the immediate operand.

## Content

```mips
xori d,s,const     # register d is assigned
                   # the bitwise XOR of zero-extended
                   # immediate operand const
                   # and the contents of register $s.
                   # const is a 16-bit pattern, so
                   # 0x0000 ... const ... 0xFFFF

```

Filling
a register with all zero bits is called
**clearing** the register.
Clearing a register is common, but the above instruction is
not the best way to do it.

**An **exclusive OR** is nearly the same as the
more common OR (the *inclusive OR*)
except that when both operands are one the result is zero.**

The machine language for the instruction looks much the same
as the `ori` and the `andi` instruction.
At runtime,
the immediate operand is extended to 32 bits.

The three operands of the instruction must appear in the correct order,
and `const` must be within the specified range.
If the immediate operand in the assembly program is less than sixteen bits
(such as 0x2) the assembler expands it to sixteen.
If it is more than sixteen bits the assembler writes an error message.




| XOR operation on Bits |
| --- |
| first operand | 0 | 0 | 1 | 1 |
| second operand | 0 | 1 | 0 | 1 |
|   |
| result | 0 | 1 | 1 | 0 |

## Question

Here are the two patterns, written both in  bit patterns and in hex.
Perform the bitwise XOR operation.
(Do it with the bits, then translate the answer to hex).

```
0000 1111 1010 0101           0FA5
0011 0110 1000 1111           368F
      

```
