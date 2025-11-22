---
sidebar_position: 21
title: "Operands must be Consistent with the Operation"
---

Operands must be Consistent with the Operation

## Answer

No

## Content

**The `addu` instruction performs the binary addition algorithm with whatever bit patterns it is given as operands.**
In the program, one operand is in IEEE format, the other in two's complement. The instruction will combine 
these bit patterns using the binary addition algorithm
and produce garbage.

Of course, using floating point registers and floating point addition will also not work because the floating point addition require two floating point operands:


```mips

##  Another Failure
##
        .text
        .globl main
main:   l.s     $f0,af              # get a one
        l.s     $f2,ai              # get another one
        add.s   $f4,$f0, $f2        # 1 + 1 = ??

        
        .data
af:     .float  1.0
ai:     .word   1

```

Recall that the data movement instructions (`mtc1` and `mfc1`) merely copy bit patterns, they don't convert formats.
So they are of no help, here.

## Question

(Thought Question: ) Would it be possible for a program to have a section (perhaps a subroutine) that converts data from two's complement into IEEE?
