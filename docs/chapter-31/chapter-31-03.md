---
sidebar_position: 3
title: "Double Precision"
---

Double Precision

## Answer

Because floating point zero has the same representation as integer zero,
32 zero-bits.
Register `$0` works as a floating point zero as well as an integer zero.

(Floating point "negative zero" has the sign bit set, and all other bits zero.
It is rarely needed.)

## Content

**MIPS also has hardware for **double precision** (64 bit) floating point operations.**
For this,
it uses pairs of single precision registers to hold operands.
There are 16 pairs, named `$f0, $f2`, ... , `$f30`.

**Only the even numbered register is specified in a double precision instruction;**
the odd numbered register of the pair is included automatically.

Some MIPS processors allow only even-numbered registers 
(`$f0`, `$f2`,...)
for single precision instructions.
However SPIM allows you to use all 32 registers in single precision instructions.
These notes follow that usage.

## Question

Remember the load delay, where it takes an extra machine cycle
after a load instruction
before integer data reaches a general purpose register?
Do you think there is a load delay for floating point load operations?
