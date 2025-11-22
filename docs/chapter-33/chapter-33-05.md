---
sidebar_position: 5
title: "Impractical Example"
---

Impractical Example

## Answer

Yes. But the SPIM service does not implement that.
With SPIM you can request memory, but can't return it.

So with SPIM, the heap will not develop holes.

## Content

```mips
# MallocOne.asm
#
# Allocate one block of memory, put an integer into it,
# print out the integer.

        .text
        .globl  main

main:     
        li      $v0,9             # (1) Allocate a block of memory
        li      $a0,4             # 4 bytes long
        syscall                   # $v0 <-- address
        move    $s0,$v0           # (2) Make a safe copy
        
        li      $t0,77            # (3) Store value 77
        sw      $t0,0($s0)        # into the block
        
        lw      $a0,0($s0)        # (4) Load from the block
        li      $v0,1             # into $a0. 
        syscall                   # (5) Print the integer

        li      $v0,10            # Return to OS
        syscall       

## end of file

```

Here
 is a program that illustrates memory allocation.
Of course, 
it is not a practical program 
except for use as an
example.

The program: **(1) asks SPIM for a block of 
memory four bytes long.** It (2) makes a safe copy of
the block's address in `$s0`.  This program
does not really need to do this, but it is good practice
because `$a0` might change.

Next, (3), an integer is stored in the block.
The address of the block is determined at run time.
You can't get to it using a symbolic address in the program.
But at **run time** the address is in `$s0`.
**So `sw $t0,0($s0)` stores 32 bits
into the block.**

To illustrate that the first three steps worked as expected,
the program next (4) loads register `$a0` from
the block of memory and (5) prints out that integer.

## Question

Does the programmer ever need to know the actual address of the block?
