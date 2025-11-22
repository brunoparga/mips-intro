---
sidebar_position: 16
title: "Complete Program"
---

Complete Program

## Answer

Not too much: end the current output line,
perhaps write a final message, and return to the OS.

## Content

```mips
## linked.asm --- hard-coded linked list
##
          .text
          .globl main
          
main:
          la     $s0,head       # get pointer to head
          
loop:     beqz   $s0,done       # while not null
          lw     $a0,0($s0)     #   get the data 
          li     $v0,1          #   print it
          syscall               #
          la     $a0,sep        #   print separator
          li     $v0,4
          syscall
          lw     $s0,4($s0)     #   get next
          b      loop
          
done:     la     $a0,linef      # print end of line
          li     $v0,4
          syscall               # print ending message
          la     $a0,endmess
          li     $v0,4
          syscall
          
          li     $v0,10         # return to OS
          syscall   
           
          .data

head:
elmnt01:  .word  1
          .word  elmnt02

elmnt02:  .word  2
          .word elmnt03 

elmnt03:  .word  3
          .word elmnt04 

elmnt04:  .word  5
          .word  elmnt05
          
elmnt05:  .word  7
          .word  0

sep:      .asciiz "  "
linef:    .asciiz "\n"
endmess:  .asciiz "done\n"

```

Here
 is the complete program.
**The **head** of a linked list is the
first node of the list.**
The complete program uses `head`
as an alternate name for the address of the
first node.

It is OK to have several symbolic addresses
designate what will be the same memory address
at run time.

## Question

If `$s0` is pointing at the first node,
is it possible to jump immediately to the fourth node?
