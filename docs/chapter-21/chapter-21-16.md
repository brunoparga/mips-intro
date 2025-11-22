---
sidebar_position: 16
title: "LA  Example"
---

LA  Example

## Answer

No.

## Content

**At run time,
`la` 
translates into one or several machine instructions
that load the designated
register with the required address.**
No memory access is done.
(So there is no delay slot after this instruction.)

Here is the previous example code done using 
`la`:


```mips
main:                        #  Load memory address:
        la    $10,val2       #  load a 32-bit address into $10
        lw    $11,0($10)     #  Load contents of memory at the address into $11

        . . . 

        .data
val0:   .word   0 
val1:   .word   1 
val2:   .word   2            # base register $10 points at "2"
val3:   .word   3 
val4:   .word   4 
val5:   .word   5

```

## Question

This `la` instruction
translates into two machine instructions.
What two instructions does it translate into?
(Answer with two instructions mnemonics.)
