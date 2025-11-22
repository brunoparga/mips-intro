---
sidebar_position: 14
title: "Bit Pattern Rotation"
---

Bit Pattern Rotation

## Answer

What is the bit pattern in register `$t1` after the following:

```mips
li   $t0,0x12345678
sll  $t1,$t0,8

```

Register `$t1`  will contain 0x34567800

## Content

![Rotate Left and Shift Left](/Chapter-23/shiftRot.gif)

With   
 a **shift left** instruction,
the bits at the left end of the the register
"fall off".
The bits shifted into the right end are always 
zero bits.

**With a **rotate left** instruction,
the bits at the left end of the the register
are fed into the right end of the register.**

The 32-bit register always contains the same
32-bit values it started with, but they are
rotated into new positions.

In the illustration, after rotating left one bit
the pattern changes from **10100111**
to **01001111**.
One more left rotate would change the pattern
to **10011110**.

Of course, registers have 32 bits, not the
eight bits shown in the illustration.

**With a  **rotate right** instruction,
bit values in
the register are moved right.**
Bits at the right end of the register are fed
back into the left end of the register.

## Question

Rotate right this pattern by **two** bit positions:

> 10001100
