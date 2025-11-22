---
sidebar_position: 4
title: "OR Immediate Instruction"
---

OR Immediate Instruction

## Answer

After the instruction
`ori $8,$0,0x2`
executes, what is in `$8`?

The 16-bit 0x2 
immediate operand has been zero-extended and copied into register `$8`.

## Content

```mips
ori  d,$0,const    # register d <-- const.
                   # const is 16-bits, so
                   # 0x0000 ... const ... 0xFFFF

```

**If the OR operation is done with the zeros in register `$0`,
the result is a copy of the zero-extended immediate operand
into the result register.**

Copying a bit pattern into a register is usually called 
**loading** the register.
Register `$8` was *loaded* with 
a 32-bit pattern.
The pattern could represent a positive two.
If so, register `$8` was loaded with positive two.

If `const` represents an integer, 
then 0 ≤ `const` ≤ 65535.

Of course, the operation is pure bit manipulation
and the bits might represent something other than an integer.

**The three operands of the assembly instruction 
d, `$0`, and `const` 
must appear in that order.**

## Question

Can the immediate operand 
of an `ori` be regarded as a **signed** integer?
