---
sidebar_position: 2
title: "MIPS Floating Point"
---

MIPS Floating Point

## Answer

Both. Double precision numbers have more bits for the exponent
(so the range of values is increased) and more bits in the mantissa
(so the precision is increased).

## Content

Floating 
point on MIPS was originally done in a separate
chip called **coprocessor 1** also called the FPA 
(**F**loating **P**oint **A**ccelerator).
Modern MIPS chips include floating point operations on the
main processor chip.
But the instructions sometimes act as if there were still
a separate chip.

**MIPS has 32 single precision (32 bit) floating point registers.**

- The registers are named `$f0` – `$f31`
- `$f0` is not special (it can hold any bit pattern, not just zero).
- **Single precision floating point load, store, arithmetic, 
    and other instructions work with these registers.**
- Floating point instructions cannot use general purpose registers.
- Only floating point instructions may be used with the floating point registers.

## Question

(Memory Test: ) Why is `$f0` not hard-wired to contain a floating point zero,
like register `$0` is hard-wired to contain an integer zero?
