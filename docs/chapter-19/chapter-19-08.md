---
sidebar_position: 8
title: "Bug-free Software"
---

Bug-free Software

## Answer

```mips
start:   ori   $8,$0,4      # $8 = 4
         ori   $9,$0,12     # $9 = 12
         addu  $10,$8,$9    # $10 = 12+4 = 16
         sll   $10,$10,2    # $10 = 16*4 = 64

```

Ordinarily, you would say "yes",
assuming that the comments are correct.

## Content

The
answer assumes that execution starts
at `start`.**What if execution started at the
`addu`
instruction?**
Registers `$8` and `$9` would probably contain
different numbers.
That could happen if
the following code
were somewhere 
in the program:

```mips
ori   $8,$0,99     # $8 = 99
ori   $9,$0,43     # $9 = 43
j     start+8      # jump to the 
                   # second statement 
                   # after start

```

`start`
is a symbolic address that stands for
the first instruction's run time address.
`start+8`
stands for the address 8 bytes away.
The jump instruction transfers control to that address.

**If control can jump into the middle of a block of code, 
then that block might compute something other than intended.**
Somehow, there needs to be restrictions on where control can go.

(QtSPIM does not allow the `j` instuction used here,
but most assembler will allow something similar.)

## Question

Is there a way  to *prevent*
distant statements from jumping into the 
middle of a block?
