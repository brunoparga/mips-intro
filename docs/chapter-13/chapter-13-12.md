---
sidebar_position: 12
title: "The Absent Subtract Immediate"
---

The Absent Subtract Immediate

## Answer

```mips
addiu    $8,$0,-86  

```

Yes.  The immediate operand -86 is *sign*-extended
to 32 bits then added to a 32-bit zero.
The sum (-86) is loaded into `$8` .

## Content

You 
would expect that since there are
`add,` `addu,` `addi,` `addiu`
and since there are `sub`, `subu`
that there would be subtract immediate instructions.

**But there are no subtract immediate instructions.**
They are not really needed.
Use the  add immediate instruction  with a negative immediate operand.
To subtract 201 
from register `$10` 
do this:

```mips

addiu    $8,$10,-201    #  $8 = $10 - 201 

```

Say that we want to compute `5*x - 74` where the
value `x` is in register `$8` .
MIPS has an integer multiply instruction, 
but let us say that we don't want to use it.
How can `5*x` be done using the instructions you have seen
so far?

## Question

How could you compute `4*$8 + $8`?
