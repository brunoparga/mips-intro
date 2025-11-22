---
sidebar_position: 15
title: "Load Address Pseudoinstruction"
---

Load Address Pseudoinstruction

## Answer

Yes: the programmer must know the address
in advance.

## Content

**It is not always possible to know the address in advance.
Conveniently, symbolic addresses and systems software make this
unnecessary.**
This happens
by using the `la`
mnemonic.
This mnemonic does not correspond to a single machine 
instruction.
It is a pseudoinstruction that the assembler
translates into to several machine instructions.

**In this pseudoinstruction, 
`exp`
is an expression that evaluates to a memory address.**
There are several possible forms for 
`exp`.
Often it is a symbolic address.
The `la`
pseudoinstruction translates into different machine code
instructions depending on `exp`.


```mips
la   d,exp          #  load register $d with the address
                    #  described by the expression "exp"
                    #  "exp" is often a symbolic address
                    #  (pseudoinstruction)

```

## Question

Does the `la`
instruction access (look at) memory?
