---
sidebar_position: 7
title: "More Blanks"
---

More Blanks

## Answer

See Below

## Content

The
 immediate operand used in the set instruction
is changed to 56 to implement "less than or equal to 55".
Notice that the assembly language uses decimal 
numbers for temperatures.
This is fine.
The assembler translates the decimal representation
of the source file into the correct bit pattern
for the machine instruction.

The next part of the program tests if 
`temp`
is less than 30.
Be careful with the branch instruction
so that it branches for the correct condition.


```mips
## tempRange.asm
##
## Check that   30 <= temp <= 55
## Set flag to 1 if in range, to 0 if out of range
##
## Registers:
## $2 --- temperature
## $3 --- in/out range indicator flag
## $8 --- scratch


      .text
      .globl  main
# Set range indicator to 1
main:   ori     $3,$0,1         #  set to 1

# Test  30 <= temp <= 55
        sltiu   $8,$2,56        #  $8=1 if temp <= 55
        beq     $8,$0,out       #  0? out of range
        sll     $0,$0,0         #  delay

        sltiu   $8,$2,     #  $8=1 if  temp <30
        
        beq     $8,$0,     #  0? in range
        
        sll     $0,$0,0         #  delay

# Out of Range: clear range indicator to 0
out:
        ori     $3,,    #  clear flag to 0

cont:   sll     $0,$0,0         #  target for the jump


```

## Question

Fill in the blanks.
