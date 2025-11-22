---
sidebar_position: 15
title: "More Code"
---

More Code

## Answer

The assembler in SPIM automatically assembles code starting at
address 0x10000000.

- What address corresponds to the symbolic address **x**? 
                  0x10000000
- What address corresponds to the symbolic address **poly**?
        0x10000004

Here is what this part of the SPIM simulation looks like:

![Data Section showing X](/Chapter-15/polyDataSect.gif)

On this little endian machine, the bit pattern 0x00000011 is stored at address 0x10000000.

The byte 0x11 is stored at the address 0x10000000, which for display purposes is on the right of the first 
four-byte group.
This makes reading 32-bit values easy to read with our usual left to right reading style.

## Content

```mips
## poly.asm  
##
## evaluate  5x^2 -12x + 97 
##
## Register Use:
##
## $10 base register, address of x
## $11 x
## $12 value of the polynomial
## $13 temporary

        .text
        .globl  main

main: 
        lui   $10,       #  Init base register to 0x10000000
        
        lw    $11,0($ )  #  Load x

        ori   $12,$0,    #  Initialize the accumulator
                              #  during the "load delay slot"

        . . .  many instructions

        sw    $12, ($ )  #  Store result in poly

        .data
                             # In SPIM, the data section
                             # starts at address 0x10000000
x:      .word   17           # The base register points here .
poly:   .word   0

## End of file

```The program must load a register with data from memory,
and, at the end, store a result back to memory.
The above program fragment does this, when you complete it.

**The register use table in the documentation summarizes how 
registers are used in this program.**
When you program, decide on the registers you need and what
they are used for.
Then write down your decisions!
This is crucial for getting things correct.

**A register where a value is 
built up after several calculations
is called an **accumulator**.**
(Some old processors have a single,
special register that is used for this
purpose.
But MIPS has many general purpose registers
for this).

Remember that data loaded from memory is not
available to the instruction following the load.
The instruction after a   
`lw`, 
in the "load delay slot",
should not try to use the loaded data.

## Question

Fill in the blanks. 
Look at the previous answer to help with
the `lui` instruction.
Use it to load the upper half of the base register with
the upper half of the first data address.
