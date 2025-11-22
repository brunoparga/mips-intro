---
sidebar_position: 3
title: "MIPS Multiply Unit"
---

MIPS Multiply Unit

## Answer

No. In general, 64 bits are needed.

## Content

![High and Low Registers](/Chapter-14/HiLoMult.gif)

**MIPS contains two 32-bit
registers called **hi** and **lo**.**
These are not general purpose registers.
When two 32-bit operands are multiplied,
**hi** and **lo** hold the 64 bits
of the result.
Bits 32 through 63 are in **hi**
and bits 0 through 31 are in **lo**.

Here are the instructions  that do this.
The operands are contained in general-purpose
registers.


```mips
 
mult    s,t        # hilo ← $s * $t   (two's comp operands)
 
multu   s,t        # hilo ← $s * $t   (unsigned operands)

```

There is a multiply instruction for unsigned operands,
and a multiply instruction for signed operands 
(two's complement operands).
Integer multiplication never causes a trap.

**Confusion Altert!** `add` and `addu`, 
both perform the same operation.
The "u" means "don't trap overflow".

With `mult` and `multu`,
different operations are carried out.
Neither instruction ever causes a trap.

If the operands are too big, overflow will happen.
But with these instructions the overflow will not cause a trap.

## Question

Two small integers are multiplied.
Where is the result?
