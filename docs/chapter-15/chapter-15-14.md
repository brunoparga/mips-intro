---
sidebar_position: 14
title: "Symbolic Address"
---

Symbolic Address

## Answer

How many `lw`
instructions will be needed?

> One, near the start
> of the program to load `x` into a register.

How many `sw`
instructions will be needed?

> One, near the end
> of the program to save the result in `poly`.

## Content

```
## poly.asm
##
## evaluate  5x^2 -12x + 97 
##

        .text
        .globl  main

main: 

        . . . . many instructions

        .data
                             # In SPIM, the data section
                             # starts at address 0x10000000
x:      .word   17           # The base register points here.
poly:   .word   0

## End of file

```


In the description of this problem, memory locations
are called **x** and **poly**.
Of course, at run time, addresses are 32-bit patterns.

In assembly language  source code, it is convenient to use
names for memory locations.
**These names are called **symbolic addresses**.**

One of the most important features of an assembler
is support for symbolic addresses.
In the following example we will ignore some of this
support in favor of explaining 
how the hardware instructions work.

In the above (incomplete) sample program,
****x** is a symbolic address.**
It corresponds to the address where, at run-time, four bytes hold a two's complement 17.

**The assembler directive `.data` means:
*here is the start of the data section of memory.***

**The assembler directive `.word` means:
*put a 32-bit two's complement integer here.***
The integer is specified using base 10 (by default).

In the above, the `.word 17` calls for a 32-bit two's complement
representation of an integer that in base 10 is "17".
The assembler converts the representation into the appropriate bit pattern.

You can also specify the bit pattern using the hexadecimal name for the pattern.
`.word 0x11` does exactly the same thing as `.word 17.`

## Question

The assembler in SPIM automatically assembles the
.data section starting at
address 0x10000000.

- What address corresponds to the symbolic address **x**?
- What address corresponds to the symbolic address **poly**?
