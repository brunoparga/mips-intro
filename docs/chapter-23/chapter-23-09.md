---
sidebar_position: 9
title: "remu (Pseudoinstruction)"
---

remu (Pseudoinstruction)

## Answer

Of course.

## Content

After a 32-bit integer division, the quotient
is in the `lo` register and the remainder is in
the `hi` register.**The following pseudoinstruction 
uses several basic instructions to
compute the remainder:**


```mips
remu d,s,t # divide $s by $t. Put the
           # remainder in $d. Operands are unsigned.
           # (pseudoinstruction)

```

There is a pseudoinstruction for creating
**the absolute value of an integer:**


```
abs d,s    # d = |s|
           # (pseudoinstruction)

```

## Question

What total amount is given to a waiter if the
bill is $25, the tax rate is 8%, and the tip is 15% ?
(Use integer math).
