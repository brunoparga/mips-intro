---
sidebar_position: 22
title: "Example Program"
---

Example Program

## Answer

```mips
sw   $t0,val3   ==    lui  $1,0x1000

                          sw   $8,12( $1 )

```

It would be OK to say `$t0` for `$8` and `$at` for `$1`.

## Content

```mips
## pseudoPoly.asm
## evaluate the polynomial ax2 + bx + c
##
        .text
        .globl  main

main:
        lw   $t3,x          # get x
        lw   $t0,a          # get a
        lw   $t1,bb         # get bb
        lw   $t2,c          # get c

        mult $t3,$t3        # x2
        mflo $t4            # $t4 = x2
        nop
        nop
        mult $t4,$t0        # low  = ax2
        mflo $t4            # $t4  = ax2
        nop
        nop

        mult $t1,$t3        # low  = bx
        mflo $t5            # $t5  = bx
        addu $t5,$t4,$t5    # $t5  = ax2 + bx

        addu $t5,$t5,$t2    # $t5 = ax2 + bx + c
        sw   $t5,value      # value = polynomial

        .data
x:      .word   4 
value:  .word   1 
a:      .word  20
bb:     .word  -2           # the SPIM assembler does not allow the label "b"
c:      .word   5
 

```


**Here
is an example using the `lw`
and
`sw`
instructions.**

The program starts out by loading data into several registers.
The load delay slots of the load instructions 
are filled with useful instructions.
This is possible because the data is not used until
several instructions later.
For example, the value for `x` is not used until
four instructions later, so the
`lw` that loads it has its load delay slot filled
with a useful instruction.

The `nop`
(no-operation) instructions are used to
follow the rule that a 
`mult`
instruction should not be started until two
instructions after a 
`mflo`
or
`mfhi`
instruction.
(Usually our SPIM programs do not follow this rule
because SPIM does not emulate that aspect of MIPS.)

This is a straightforward evaluation of the polynomial.
By using Horner's method, and by cleverly filling
some of the no-ops with instructions, 
the program could be improved.

## Question

What big assumption was made in writing this program?
