---
sidebar_position: 9
title: "Several Translations"
---

Several Translations

## Answer

```mips
li $v0,12 == ori $v0,$zero,12

```

## Content

The
**load immediate** pseudoinstruction is
useful for loading a register with an integer value.
Here is another example:

```mips
li  $t2,-156

```

This puts the two's complement representation of -156<sub>10</sub>
into register `$t2`.
However, this can not be done with 
`ori`
because the immediate field of that instruction must be a
16-bit unsigned integer
(which is zero-extended to 32 bits upon execution).

**Because the immediate value of the 
`li`
is negative, a different translation is used:**

```mips
 
li $v2,-156   ==   addiu $v2,$0,-156

```

(Remember that `addiu`
sign-extends its immediate operand before
performing the addition. 
Also remember that the `u` part
of the mnemonic means that overflow will not cause
a trap.
The `addiu` instruction can be used
with negative integers).

**The extended assembler translates 
`li`
into different basic instructions depending on the sign of the immediate value.**

## Question

Can either basic instruction, 
`ori`
or
`addiu,`
use an immediate value greater than 16 bits?
