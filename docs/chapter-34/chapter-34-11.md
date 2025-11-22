---
sidebar_position: 11
title: "Traversing a Linked List"
---

Traversing a Linked List

## Answer

In MIPS, 32 zero bits.

## Content

```mips
## linked.asm --- hard-coded linked list
##
          .text
          .globl main
          
main:
             $s0,elmnt01    # get the address of the first node
          
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

```**Here is a program that visits every node of a linked list
and prints out its data.**
A visit to every node of a data structure is called a **traversal**.

The first statement loads register `$s0` with
the **address** of the first node.

## Question

Which instruction should fill the blank in the first statement:

- lw  --- load a register with the data stored at a symbolic address
- la  --- load a register with the address corresponding to a symbolic address
