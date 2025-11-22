---
sidebar_position: 5
title: "The   jalr   Instruction"
---

The  jalr  Instruction

## Answer

`jal  address`

## Content

A `jal` instruction
always calls the same subroutine.
Here is how `main` would usually
call the first subroutine:

```
jal sub1

```

But what if 
you wanted the same instruction to
call 
different subroutines depending on circumstances?
This is where a jump table is useful.
The table contains a list of subroutine entry points.

**To call a subroutine,
copy its address from the table into a
register.
Now use the following instruction:**


```mips
jal r      # $ra <― PC+4  (the address 8 bytes away from the jal) 
           # PC  <― $r    load the PC with the address in $r
           # a branch delay slot follows this instruction

```

This works just like the `jal` instruction except the
address of the subroutine now 
comes from a register.
The return address (to the caller) is put in register `$ra`
as with  `jal`.

## Question

Here is a section of `main`.
Fill in the blanks so that control 
is passed to `sub1`:

```mips
          .text
main:     
          lw      $t0,     # get the first entry point in the Jump Table
          
          jalr             # pass control to sub1
          
          li      $v0,10          # return to OS
          syscall

          .data
sub1add:  .word   sub1            # Jump Table
sub2add:  .word   sub2

```
