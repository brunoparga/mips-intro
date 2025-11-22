---
sidebar_position: 8
title: "Load Immediate"
---

Load Immediate

## Answer

`ori $t5,$0,74`
puts the binary representation of `7410` into
register `$t5`.

## Content

The
`ori` instruction,
used as above, copies a bit pattern from the instruction into
the destination register.
(Recall that the 16 bit immediate operand is zero-extended into 32 bits.)
**This operation is usually called a
**load immediate** operation — it loads a register with
a value that is immediately available (without going to memory).**

You
might wish that there were a mnemonic
for "load immediate".
There is.**The extended assembler includes the `li`
mnemonic.**
The assembler
translates this pseudoinstruction into 
the appropriate basic instruction.

```mips
li   d,value        #  load register $d with the 
                    #  positive or negative integer
                    #  "value".  Value may be a 
                    #  16 or a 32-bit integer. 
                    #  (pseudoinstruction)

```

## Question

Translate the following pseudoinstruction
into the corresponding basic assembly instruction (use mnemonic register names):

```mips
li $v0,12

```

```mips
ori ,,

```
