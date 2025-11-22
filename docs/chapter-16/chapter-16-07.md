---
sidebar_position: 7
title: "Loading Halfwords"
---

Loading Halfwords

## Answer

Which byte of `$9` should go into address $0x10000000?

0x12 — the "big end" of an integer 
goes into the first address of a group of bytes
with big-endian byte order.

Eventually, after a few more right shifts, it gets there.

![SPIM Display](/Chapter-16/finalRun.gif)

## Content

**A
MIPS **halfword** is two bytes.**
This, also, is a frequently used length of data.
In ANSI C, a short integer is usually two bytes.
So, MIPS has instructions to load halfword and store halfwords.

**There are two load halfword instructions.**
One extends the sign bit of the halfword in memory
into the upper two bytes of the register.
The other extends with zeros.

```mips
lh   t,off(b)   # $t ←  Sign-extended halfword 
                # starting at memory address b+off. 
                # b is a base register. 
                # off is 16-bit two's complement.

```

```mips
lhu  t,off(b)   # $t ←  zero-extended halfword 
                # starting at memory address b+off. 
                # b is a base register. 
                # off is 16-bit two's complement.

```

**Halfword addresses must be 
**halfword aligned**.**
Attempting to load a halfword from
an unaligned address will cause a trap.

## Question

How can you tell if an address is halfword aligned?
