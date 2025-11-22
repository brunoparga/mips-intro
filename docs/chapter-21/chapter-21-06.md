---
sidebar_position: 6
title: "Pseudoinstructions"
---

Pseudoinstructions

## Answer

What does the following assembly language instruction do?

```mips
addu $t5,$zero,$t7

```

It 
copies
the contents of register 
`$t7` 
into register
`$t5`.

## Content

The
`addu` instruction,
used as above with register `$zero`, copies a bit pattern from the source register into
the destination register.
This is usually called a
**move** operation, although the source register does not change.
It is often convenient to move a value from one
register to another.
It
is awkward to say "add" when you mean "move".

**The *extended assembler*
allows you to use the mnemonic
`move`
instead of `addu`.**
This mnemonic does not correspond to a new machine 
instruction.
It is just a way of asking for the same instruction
by using a more intuitive mnemonic.
It is a **pseudoinstruction** that the assembler
translates into 
the appropriate basic assembly instruction.

**A **pseudoinstruction** is an instruction that 
the extended assembler replaces with
one or more
basic assembly instructions.**

**The
extended assembler implements 
many pseudoinstructions.**
Sometimes they are just convenient re-naming of basic assembly
instructions.
Other times they correspond to a small, convenient
sequence of basic assembly instructions.
Here is the `move` pseudoinstruction:

```
move d,s  # copy the contents of 
          # the source register s
          # to the destination 
          # register d
          # (pseudoinstruction)

```

The registers `d` and `s` can be
specified by using register mnemonic names 
(such as `$t5` or `$zero`) or by
using register numbers
(such as `$13` or `$0`).
This is true for all instructions of the extended assembler.

## Question

Write the instruction that moves (copies) the contents of
register `$t3` into register `$s1`.

```
    , 

```
