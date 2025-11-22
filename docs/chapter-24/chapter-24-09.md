---
sidebar_position: 9
title: "Set on Less Than"
---

Set on Less Than

## Answer

Set instructions 
set a register to 1 or clear it to 0
to show the outcome of a comparison
between two values.

## Content

**Think of the "1" and "0" that a set instruction
puts in the flag register as "true" and "false".**
Here is the `slt`
from chapter 18, but now made more useful
by the extended assembler:


```mips

                   #  $s and t contain two's comp. integers  
                   #  t can be a register or an immediate operand
                   #
slt   d,s,t        #  if ( $s < $t )
                   #    d = 1
                   #  else
                   #    d = 0
                   #
                   #  (pseudoinstruction)

```

With the extended
assembler, the operand `t` can be
an immediate operand.

## Question

Is the following correct?

```mips
slt   $t5,$v0,87        #  if ( $v0 < 87 ) $t5 = 1

```
