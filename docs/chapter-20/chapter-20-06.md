---
sidebar_position: 6
title: "Complete Program"
---

Complete Program

## Answer

The complete program is below.

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
main:    ori      $8,$0,0        #  count = 0
         lui      $9,0x1000      #  point at first char

# while not ch==null do
loop:    lbu      $10,0($9)      # get the char
         sll      $0,$0,0        # branch delay
           
         beq      $10,$0,done    # exit loop if char == null
         sll      $0,$0,0        # branch delay

         addiu    $8,$8,1        # count++
         addiu    $9,$9,1        # point at the next char

         j        loop
         sll      $0,$0,0        # branch delay slot

# finish
done:    sll      $0,$0,0        # target for branch

         .data
string:  .asciiz  "Time is the ghost of space."



```
**The base register is "moved" through the string
by increasing the address by one for each byte.**
This is also called "moving a pointer".
This program has an important concept on
every line.
Using these concepts is how you
program!

**The program is very close to the C standard library function
`int strlen(char*)`.**
As it is written, the program contains its 
own data,
and it is not written as a function that can be called.
In a few chapters,
we will write functions that 
can be called and that use parameters.

## Question

Does the program work correctly if the string is the null string
(the string of length zero that consists of just a null byte)?
