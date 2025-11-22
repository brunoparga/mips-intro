---
sidebar_position: 4
title: "The   addu   and   add  Instructions"
---

The  addu  and  add Instructions

## Answer

```
11111 111
 1010 1011
 0101 0101
———————————
 0000 0000

```

Does overflow happen for:

- Unsigned Binary?   Overflow -- The carry out is one.
- Two's Complement?  In Range -- The carry in is the same as the carry out.

## Content

```mips
addu  d,s,t     # d ← s + t
                # no overflow trap
                

```

**The 
`addu` instruction performs the
Binary Addition Algorithm on the contents of two 32-bit
registers and places the result in the destination
register.**
The destination register can be the same as one of the
source registers.
The `addu` instruction mechanically grinds
through the Binary Addition Algorithm, producing  a 32-bit
result from two 32-bit operands.
**Overflow is ignored** (that is what the "u" at then end of
the mnemonic means).

```
add   d,s,t     # d ← s + t
                # with 2's comp. 
                # overflow trap

```

**There is another instruction, `add`, which
causes a *trap* when two's complement overflow is detected.**
Other than that, it is the same as `addu`.
A **trap** is an interruption in the normal machine cycle.
Typically on a computer system a trap 
results in sending control back to
the operating system.

Most assembly programs deal with overflow by
making sure that the operands won't cause it.
Usually they use the `addu` instruction.
That is the approach we will take.

## Question

Is this instruction correct?

`addu $8,$8,$8`What is the largest unsigned integer that `$8` could contain?
