---
sidebar_position: 5
title: "The  mfhi  and   mflo  Instructions"
---

The mfhi and  mflo Instructions

## Answer

About how many significant bits do you expect in this product:

```
01001010 ×  00010101

```

About 12 significant bits.

## Content

**Two instructions
move the result of a multiplication into a general
purpose register:**

```
mfhi    d        #  d ←  hi.  Move From Hi

```

```
mflo    d        #  d ←  lo.  Move From Lo

```

The `hi` and `lo` registers
cannot be used with any of the other arithmetic or logic
instructions.
If you want to do something with a product, it must first
be moved to a general purpose register.

However there is a further complication on MIPS hardware:

**Rule:**
The next two instructions after a `mflo` 
or `mfhi` must not be a multiply or a divide instruction.
The reason for this involves the way the MIPS pipeline works.

On the SPIM simulator this rule does not matter
(but on actual hardware it does.)

## Question

Must you move the result of a multiplication into a general purpose register
before you start another multiply operation?
