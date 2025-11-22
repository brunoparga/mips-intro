---
sidebar_position: 13
title: "Single Precision Arithmetic"
---

Single Precision Arithmetic

## Answer

The answer is the same for both: 7 or 8 places, same as MIPS.
All three use the same IEEE standard for single precision float.
(But be careful: some C compilers allow you to specify how many
bits of precision you want for various data types.
Also, C implemented on a weird machine might be non-standard).

## Content

| Instruction | Operation |
| --- | --- |
| `abs.s fd,fs` | $fd = \|$fs\| |
| `add.s fd,fs,ft` | $fd = $fs + $ft |
| `sub.s fd,fs,ft` | $fd = $fs - $ft |
| `mul.s fd,fs,ft` | $fd = $fs * $ft |
| `div.s fd,fs,ft` | $fd = $fs / $ft |
| `neg.s fd,fs` | $fd = -$fs |
| `mov.s fd,fs` | $fd = $fs |

Here are some single precision arithmetic instructions.
Each of these corresponds to one machine instruction.
**The two operand registers and the result register must all be floating point registers.**
For SPIM, they can be any floating point register, 
but some actual hardware uses only the even numbered floating point registers.

There is a double precision version of each instruction
that has a
"d" in place of the "s".
So `add.s` becomes  `add.d` and
corresponds to the machine code that adds 
two double precision registers.

The first instruction computes the absolute value
(makes a positive value) of the value in register `$fs`

If the data in an operand register is illegal or an
illegal operation is performed (such as division by zero)
an exception is raised.
The IEEE 754 standard describes what is done in these
situations.

## Question

(Thought Question: ) How does the `abs.s` instruction
alter the 32-bit pattern of the float?
