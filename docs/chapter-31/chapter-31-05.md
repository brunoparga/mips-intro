---
sidebar_position: 5
title: "Single Precision Store"
---

Single Precision Store

## Answer

Some 32-bit patterns are not legal floating point.

It is not legal to have an exponent field of zero with a non-zero mantissa.
There are other combinations that are also illegal.

## Content

```
s.s   fd,addr     # store register fd to addr
                  # (pseudoinstruction)

```

There is a single precision store pseudoinstruction:
**The 32 bits in `fd` are copied to `addr`.**

In both of these pseudoinstructions the address  `addr`
can be an ordinary symbolic address, or an indexed address,
but must be full-word aligned.

Sometimes
the floating point registers are used as temporary registers
for integer data.
For example, rather than storing a temporary value to memory,
you can copy it to an unused floating point register.
This is OK, as long as you don't try to do floating point math with the data.

## Question

Why would you want to copy a temporary integer value to a floating point register?
