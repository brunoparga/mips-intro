---
sidebar_position: 15
title: "Printing Each node"
---

Printing Each node

## Answer

No

## Content

```mips
main:
          la     $s0,elmnt01    # get a pointer to the first node
          
loop:     beqz   $s0,done       # while the pointer is not null
          lw     $a0,0($s0)     #   get the data of this node

                                #   do something with the node
          li     $v0,1          #   print it
          syscall               #
          la     $a0,sep        #   print separator
          li     $v0,4          #
          syscall               #
          
          lw     $s0,4($s0)     #   get the pointer to the next node
          b      loop
          
done:     . . . 

          .data   
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

```

**The
 loop is a sentinel controlled loop.
It keeps going until it hits the special
value that signals the end.**
Some new lines have been added
that print the data of each node.

The code that traverses the list is in black;
the code that processes the data at each node is in blue.

## Question

What needs to be done after the loop is done?
