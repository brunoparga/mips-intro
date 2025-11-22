---
sidebar_position: 7
title: "Negating a Two's Comp. Integer"
---

Negating a Two's Comp. Integer

## Answer

No. With the `ori` instruction, 
`const` is a 16-bit immediate operand that is
zero-extended to a 32-bit integer when it is copied to `$d`.
So it can't be negative.

## Content

Here 
is an interesting 
bit manipulation problem.
Say that you wish to negate the representation of
an integer that has been loaded into a register.
Later in these pages there is an easy way to negate an integer,
but for now use the instructions you already have seen.

**Recall that a two's complement integer is negated by
reflecting the bits then adding one.**

## Question

Say 
that register `$8` has been loaded with a bit pattern representing +82
by using:

```mips
ori  $8,$0,82
```

What
instructions
can do the following?

- Reflect the bits in `$8`
- Add one to `$8`
