---
sidebar_position: 5
title: "Subtraction"
---

Subtraction

## Answer

```mips
addu $s1,$s0,40000 

```

Translates into:

```mips
li   $at,40000    # use pseudoinstruction li
addu $s1,$s0,$at  # perform 32-bit addition

```

## Content

The
`li`
in the above is itself a pseudoinstruction.
The extended assembler will translate it, also, into basic instructions.

There is also (with the extended assembler)
a `subu d,s,x`
instruction where the last operand can be a register,
a 16-bit immediate, or a 32-bit immediate.
This instruction translates into the pseudoinstruction
`addu d,s,-x`
(which is then translated into basic instructions).

**The  `negu d,s` 
pseudoinstruction calculates the two's complement negation of
register `$s` 
and puts it in register `$d`.**


```
negu d,s  # d = -s
          # two's complement operands
          # (pseudoinstruction)

```

## Question

Translate this instruction



```mips
negu $v2,$s3 

```

 

into a basic instruction:



```mips
sub  ,$0,

```
