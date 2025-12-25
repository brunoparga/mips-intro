---
sidebar_position: 14
title: "Data Movement"
---

Data Movement

## Answer

It clears (makes zero) the sign bit, bit 31.
All the other bits stay the same.

## Content

| Instruction | Operation |
| --- | --- |
| mov.s  fd, fs | copy 32 bits from float register `$fs` 
 to float register `$fd` |
| mtc1  rs, fd | move to coprocessor 1


                             
                             Copy 32 bits from general register 
                             `$rs` 
 
                             to float register 
                             `$fd`.

                             No data conversion is done.
                             

                             **Note:** the source register is 

                             `$rs` and the destination
                             register is 

                             `$fd`, the reverse of the usual order. |
| mfc1  rd, fs | move from coprocessor 1


                             copy 32 bits from float register  
                             `$fs` 
                             
to general register `$rd`.

                             No data conversion is done. |

There
are three instructions that move data between
registers inside the processor.

**These instructions merely copy bit patterns between registers.
The patterns are not altered.**
With the `mfc1` instruction,
the contents of a floating point register is copied "as is"
to a general purpose register.

A complicated calculation with integers can use float registers
to hold intermediate results.
But the float registers cannot be used in integer instructions.
And a complicated calculation with floats can use general purpose registers
the same way.
But the general purpose registers cannot be used in floating point instructions.

## Question

(Thought Question: )
If a calculation needs to save an intermediate value,
why not just save it to memory?  Or save it on the stack? Why bother saving it in a register?
