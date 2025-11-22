---
sidebar_position: 3
title: "Set on Less Than"
---

Set on Less Than

## Answer

```

The two operators  
 `<`
   and    `>=`   
cover all possible integer values.

## Content

****set** instructions set a register to 1 or 0 to show
the relation between two values.**
They
are used to implement relational operators.
However, they do not in themselves alter
the flow of control.

The `slt`
instruction is used with
two's complement integers:

```mips
                   #  $s and $t contain
                   #  signed integers
                   #
slt   d,s,t        #  if ( $s < $t )
                   #    d = 1
                   #  else
                   #    d = 0

```

The `sltu`
instruction is used with
unsigned integers:

```mips
                   #  $s and $t contain
                   #  unsigned integers
                   #
sltu  d,s,t        #  if ( $s < $t )
                   #    d = 1
                   #  else
                   #    d = 0

```

## Question

(Trick Question)

**A.** After the following code executes, what value is in register `$7` ?

```mips
addiu    $5,$0,-25
addiu    $6,$0,25
slt      $7,$5,$6

```

**B.** After the following code executes, what value is in register `$7` ?

```mips
addiu    $5,$0,-25
addiu    $6,$0,25
sltu     $7,$5,$6

```
