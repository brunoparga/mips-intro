---
sidebar_position: 15
title: "Rotate Instructions"
---

Rotate Instructions

## Answer

Rotate right the following bit pattern by **two** bit positions:

```
10001100
```

```
00100011
```

## Content

**The   
rotate instructions are both
pseudoinstructions.**
Each one takes four basic instructions
to implement.
The shift amount is given in a register
or as an immediate operand.

**Negative immediate operands are not allowed.**
However, if the third operand is a register
it may contain a negative integer.
In that case the rotation is the opposite direction.


```

rol d,s,t    # d <—s rotated left by t
             # (pseudoinstruction)
 
ror d,s,t    # d <— s  rotated right by t
             # (pseudoinstruction)

```

## Question

Inspect the following:

```mips
li  $t2,-2
li  $t1,4
ror $t0,$t1,$t2

```

What does `$t0` hold after the sequence has executed?
