---
sidebar_position: 14
title: "The   sra  Instruction"
---

The  sra Instruction

## Answer

Is there a need for an *arithmetic shift left* instruction?

No. A logical shift left moves zeros into the low-order bit,
which is correct for both signed and unsigned integers.

## Content

```mips
sra    d,s,shft   #  $d ← $s shifted right
                  #  shft bit positions.
                  #  0 ≤ shft ≤ 31

```

**MIPS
has a shift right arithmetic instruction.**
This instructions takes the bit pattern in `$s`,
arithmetic shifts it right by shft positions,
and deposits the result in register `$d`.
Register `$s` is not changed
(unless it is the same as the destination register.)

Sometimes you need to divide by two.
This instruction is faster and
more convenient than the
`div`
instruction.

## Question

Does the `sra` instruction
give the correct results for *unsigned* integers?
