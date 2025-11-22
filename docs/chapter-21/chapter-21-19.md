---
sidebar_position: 19
title: "Assembler Temporary Register"
---

Assembler Temporary Register

## Answer

`$at`,
the *assembler temporary* register.

## Content

**The
**assembler temporary register**
is reserved for use in the
machine instructions that pseudoinstructions 
are translated into.**
Often a pseudoinstruction
is implemented as a short sequence of
machine instructions that use
`$at`.
Here is  how
`la`
was translated in the example:

```mips
la $t0,val2 == lui $1,4097
               ori $8,$1,8

```

**Sometimes
a pseudoinstruction has the
same mnemonic as a  basic  assembler instruction.**
For example,
`lw` (load word)
is a basic assembler instruction.

As an assembler instruction, it is used like this:

```mips
lw    $t1,8($t0)   
#  load the word at address $t0+8

```

This instruction
designates the address  with a displacement
(eight, in this case) to add to a base register
(`$t0`, in this case).
This corresponds exactly to one machine instruction.
There is no other form for the non-extended
assembler instruction.

However, with the extended assembler,**the following  *pseudo*instruction
can be used:**

```mips
lw  $t1,val2    
#  load value at  address val2

```

The *basic instruction* `lw`
uses a base register to form an address.
The *pseudoinstruction* `lw`
must be translated into instructions that also use a base register
(since this is the only way MIPS instructions can address memory.)

## Question

What base register is used?
