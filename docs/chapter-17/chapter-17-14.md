---
sidebar_position: 14
title: "Absolute Value"
---

Absolute Value

## Answer

No.

## Content

![Absolute Value Flow Chart](/Chapter-17/absValChart.gif)





You can build a real rats-nest of code with assembly language.
Avoid this by implementing the structures of a high level language.
**Draw a flowchart of the program or rough it out
in C or Java before coding.**
Put comments in the assembly source program 
before you add code to show 
how the code and the flowchart correspond.

The flowchart at right shows a program that calculates
the absolute value of the integer at symbolic address "A".
The program follows that logic.

Assume that "A" starts at 
address 0x10000000.
The `lui` instruction
points the base register `$10` at that address.




```mips
## absVal.asm
##
## Calculate the absolute value of A

    .text
    .globl  main

main: 
# Get A
      lui   $10,0x1000     #  Initialize the
                           #  base register
                           
      lw    $8,($10)    #  Load A
      
         $0,$0,0        #  load delay slot

# Is A Negative?

# Store -A

done:   

    .data
A:  .word   -1

```

## Question

Fill in the blanks.
