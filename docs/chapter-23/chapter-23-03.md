---
sidebar_position: 3
title: "Implicit Immediate Operand"
---

Implicit Immediate Operand

## Answer

`not $s1,$t5`
    =     
`nor  $s1, $t5, $0`

The order of `$t5` and `$0` could be reversed.
(You could also say `$zero` rather than  `$0`.)

## Content

**Some pseudoinstructions
translate into different basic instructions
depending on the type of operands.**

A pseudoinstruction used with  an immediate operand 
translates into different basic instructions
than one used with all register operands.

**Sometimes the same mnemonic
is used for a basic instruction and also for a 
pseudoinstruction.**
For example, you can use the mnemonic `or`
for an or with register operands and also for an or with an immediate operand:

```mips
or $s0,$s1,0x00ff      

translates into:      

ori $s0,$s1,0x00ff

```

Here, the extended assembler notices the immediate
operand and translates the instruction into an 
`ori` basic instruction.
The resulting machine code is a 32-bit or immediate.

However, the following statement is not translated into
a pseudoinstruction:

```mips
or $s0,$s1,$t1 

```

It corresponds to a basic instruction.
The resulting machine code is a 32-bit `or`  instruction.

The mnemonic
`and`
is similar.
It might call for the
basic instruction 
`and`,
or the basic instruction
`andi`,
or other basic instructions
depending on the operands.

There is no flexibility at the
machine code level.
The op-code for `or` requires three registers to be specified
in the 32-bit instruction.
The op-code for `ori` is different, and requires two registers 
and an immediate operand.

## Question

Is there both a basic add instruction and an add immediate 
instruction?
