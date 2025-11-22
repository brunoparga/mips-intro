---
sidebar_position: 20
title: "Load Word (pseudoinstruction)"
---

Load Word (pseudoinstruction)

## Answer

The assembler temporary register, `$at` (which is also `$1`.)

## Content

![levels inside a computer system](/Chapter-21/pseudocomputer.gif)

**The
`lw` pseudoinstruction
copies a word of data from memory into a register 
seemingly in one instruction:**

```mips
lw    d,exp    #  Load register $d with the value at 
               #  address exp.  exp can be any
               #  of several expression types 
               #  that evaluate to  an address
               #  (pseudoinstruction) 

```

Here is a possible translation the pseudoinstruction
`lw`.
Say that the symbol 
`data`
stands for the address `0x10000004`

```mips
lw $t0,data   ==   lui $1,0x1000
                   lw $8,4($1)

```

The base address in `$1` is `0x10000000` after
the `lui` instruction executes.
The `lw` instruction adds 4 to that address
to form the desired address.

**The
extended assembler and its 
pseudoinstructions 
make it look like you 
are programming a 
*pseudo*computer — a computer system
that is richer in features and more convenient 
to program than the actual hardware.**
(Often this is called  a "virtual computer"; 
but to avoid confusion I'll say that 
pseudoinstructions run on
the pseudocomputer.)
This idea of implementing a virtual machine on top of
another machine (which may also be virtual)
is very important in computer science.

**The pseudocomputer built on top of the hardware is a
*layer of abstraction*.**
When you write programs using 
the extended assembler and its pseudoinstructions
you think in terms of the pseudocomputer and its capabilities.
You can pretend that the pseudocomputer will directly
execute your program.

## Question

Should the `lw`
pseudoinstruction be followed by a load delay slot?
(Hint: look at its translation.)
