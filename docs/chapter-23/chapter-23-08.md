---
sidebar_position: 8
title: "div  and  divu  Pseudoinstruction"
---

div and divu Pseudoinstruction

## Answer

```mips
div $t0,$s1,$s2

```

Translates into:

```mips
div   $s1,$s2
mflo  $t0

```

## Content

The
SPIM extended assembler includes these
instructions:


```mips
div  d,s,t # divide $s by $t. Put the
           # quotient in $d. Operands are
           # two's complement.
           # (pseudoinstruction)

```


and


```mips
divu d,s,t # divide $s by $t. Put the
           # quotient in $d. Operands are
           # unsigned.
           # (pseudoinstruction)

```

## Question

Is the remainder of an integer division
sometimes useful?
