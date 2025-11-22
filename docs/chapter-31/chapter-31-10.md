---
sidebar_position: 10
title: "Mistake"
---

Mistake

## Answer

Register `$v0`

## Content

Depending
on the service, you may have to place arguments
in other registers as well.

**The following example program prints out
a floating point value.**
It first does this correctly (using system call 2).
Then does it incorrectly uses the integer print service
(system call 1).
Of course, the 32 bits of the floating point value can
be interpreted as an integer, so system call 2 innocently
does what we asked it to do.

```mips
## print.asm
##
## Print out a 32 bit pattern, first as a float,
## then as an integer.

        .text
        .globl  main

main:
        l.s     $f12,val        # use the bit pattern
                                # in val as a float
        li      $v0,2           # code 2 == print float
        syscall                 # (correct)

        li      $v0,4           # print
        la      $a0,lfeed       # line separator
        syscall

        lw      $a0,val         # use the bit pattern
                                # in val as an int
        li      $v0,1           # code 1 == print int
        syscall                 # (mistake)

        li      $v0,10          # code 10 == exit
        syscall                 # Return to OS.
                
        .data
val :   .float  -8.32           # floating point data
lfeed:  .asciiz "\n"

```

## Question

Will the assembler catch this error?
Will the program bomb when it runs?
