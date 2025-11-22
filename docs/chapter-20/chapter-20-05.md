---
sidebar_position: 5
title: "Loop Body"
---

Loop Body

## Answer

The answer is below.

## Content

```mips
 


## strlen.asm
##
## Count the characters in a string
##
## Registers:
##  $8 -- count
##  $9 -- pointer to the char
## $10 -- the char (in low order byte)

        .text
        .globl  main
		
# Initialize
main:    ori      $8,$0,0       #  count = 0
         lui      $9,0x1000     #  point at first char

# while not ch==null do
loop:    lbu   $10,0($9)        # get the char
         sll   $0,$0,0          # load delay
           
         beq   $10,$0,done      # exit loop if char == null
         sll   $0,$0,0          # branch delay

         addiu    ,,   # count++

         addiu    ,,   # point at the next char

         j       loop
         sll   $0,$0,0          # branch delay slot
         
# finish
done:    sll   $0,$0,0           # target for branch

         .data
string:  .asciiz  "Time is the ghost of space."


```

The
 address of the byte in the `lbu` instruction 
  is computed by (displacement + `$9`). 
  Since the base, `$9`, has the address of (points 
  at) the character, the displacement is zero. 
  **The `lbu` loads the 
  character into the low-order byte of `$10`.**
  The upper three bytes are zero.

**The 
  `beq` instruction tests 
  if the entire register is zero,
   but, of course,
   that also tests if the low-order byte is zero.**

Next, the program must increment the count, then move
the base register (the character pointer) to the next
byte of the string.

## Question

Fill in the blanks.
