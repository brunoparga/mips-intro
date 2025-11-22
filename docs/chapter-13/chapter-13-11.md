---
sidebar_position: 11
title: "The   subu   Instruction"
---

The  subu  Instruction

## Answer

```mips
    ori      $7, $0, 146        # put +146 into $7
    addiu    $10,$7,-82         # add -82

```

The program is much shorter. The assembler made a 16 bit -82, which the ALU sign-extended to 32 bits, which it added to the contents of $7.

## Content

**MIPS 
has two integer subtraction instructions.
The `subu` instruction does not
generate a trap on overflow.**
Overflow is possible if you subtract a large negative integer from
a large positive integer
(or subtract a large positive integer from a negative integer.)

```mips
subu   d,s,t        # d ←  s - t 
                    # No overflow trap.
                    # This is equivalent to $d <—— s + (-t)
                    # where (-t) is reflect-add-one of t.

```

**The `sub` instruction does
generate a trap on overflow.**
It would be OK to use,
but this course does not discuss
how to deal with traps.

```mips
sub    d,s,t        # d ←  s - t
                    # Two's comp. overflow is trapped!
                    # This is equivalent to $d ←  s + (-t)
                    # where (-t) is reflect-add-one of t.

```

## Question

When `ori  $d,$0,const` is used to load 
the register `$d`,
`const` must be 16-bit  unsigned binary.

But say that you want to load `$8` with a negative 86.
Will the following work?

```mips
addiu    $8,$0,-86  # $8 ← -86 

```
