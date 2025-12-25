---
sidebar_position: 4
title: "Single Precision Load"
---

Single Precision Load

## Answer

Yes.

## Content

```
l.s   fd,addr  # load register fd from addr
               # (pseudoinstruction)

```

Actual
hardware has a delay between a load instruction and the time
when the data reaches the register.
The electronics of main memory handles all bit patterns in the same
way, so there is the same delay no matter what the bit patterns represent.

In SPIM there is an option that disables the load delay.
For this chapter,  disable the load delay.
(Floating point is tricky enough already).

Loading a single precision value is done with a pseudoinstruction:

**This instruction loads 32 bits of data from address `addr`
into floating point register `$fd`.**
`$fd`  is 
`$f0`,
`$f1`,
...
`$f31`.

Whatever 32 bits are located at `addr` 
are copied into  `fd`.
If the data makes no sense as a floating point value, 
that is OK for this instruction.
Later on the mistake will be caught when floating point operations are attempted.

The address `addr` must be full-word aligned, a multiple of four.

## Question

Every one of the 2<sup>32</sup> patterns that 32 bits can form is a legal
two's complement integer.

Are some 32-bit patterns not legal as floating point values?
Hint: think about how zero is represented.
