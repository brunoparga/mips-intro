---
sidebar_position: 12
title: "Address of a word vs. Contents of a word"
---

Address of a word vs. Contents of a word

## Answer

- la  --- load a register with the address corresponding to a symbolic address

## Content

```mips
## linked.asm --- hard-coded linked list
##
          .text
          .globl main
          
main:
          la   $s0,elmnt01      # get the address of the first node
          
loop:     beqz   $s0,done       # while not null

          . . .          
done:    

          . . .
                     
          .data

elmnt01:  .word  1
          .word  elmnt02

elmnt02:  .word  2
          .word elmnt03 

          . . . 

```

****Bug Alert!** To get the address in memory corresponding to a
symbolic address, use the **la** instruction.**
The **lw** loads the value stored at that address.

In this program, register `$s0` contains the
address of each node as it is visited.
So to start it out correctly use the **la** instruction.

## Question

```mips
          la      $s0,head
          lw      $s1,head
          . . .
          
          .data
head:     .word   7

```

Which register, `$s0` or `$s1`,
contains the value `7` after this fragment executes?
