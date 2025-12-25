---
sidebar_position: 4
title: "Arithmetic Pseudoinstructions"
---

Arithmetic Pseudoinstructions

## Answer

yes

## Content

With the non-extended assembler there is
an  `addu d,s,t` 
instruction where
d, s, and t are registers
There is also
and an
 `addiu d,s,imm`  instruction where
`imm` is an immediate operand.

**With the extended assembler the 
 `addu d,s,x` 
instruction translates into different basic instructions
depending on `x`.**
`x` can be a register, a 16-bit immediate operand, or a
32-bit immediate operand.

Examine the following instruction (for the extended assembler):

```mips
addu $t0,$s0,40000

```

The decimal value 40000 is too large to represent in 16 bits,
(the range for 16 bits is -32768 to +32767)
so the instruction cannot be translated into a basic
`addiu`
instruction.
Two instructions must be used to add `$s0` to 40000<sub>10</sub>
and to place the result in `$t0`.

## Question

Translate the following:



```mips
addu $s1,$s0,40000

```



into basic instructions.
(Use mnemonic register names.)



```mips
li   ,40000    # use pseudoinstruction li

addu $s1,$s0,  # perform 32-bit addition

```
