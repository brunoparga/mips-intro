---
sidebar_position: 7
title: "mul  Pseudoinstruction"
---

mul Pseudoinstruction

## Answer

```mips
mul $v2,$s3,$t0

```

Translates into:

```mips
mult  $s3, $t0

mflo  $v2

```

## Content

The
`mul`
pseudoinstruction makes it look as if MIPS has a
32-bit multiply instruction that places its 32-bit result
in a register.
(Some MIPS processors actually have a basic instruction
that does this.)


```mips


mul  d,s,t # multiply $s by $t. 
           # put the
           # result in $d
           # Operands are two's
           # complement.
           # (pseudoinstruction)


```

**There is no overflow checking.
The bits of **hi** are not examined nor saved.**
There are several other pseudoinstructions that examine
**hi** and perform various actions on overflow.
We won't use them.

**There is a similar pseudoinstruction for division**
built out of basic instructions.

## Question

Finish the translation.
The operand registers are `$s1` and `$s2`,
the destination register is `$t0`.



```mips
div $t0,$s1,$s2

```



Translates into:



```
div   , 

mflo   

```
