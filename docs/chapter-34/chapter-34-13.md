---
sidebar_position: 13
title: "Following a Link"
---

Following a Link

## Answer

`$s1`

## Content

```mips
## linked.asm --- hard-coded linked list
##
          .text
          .globl main
          
main:
          la     $s0,elmnt01    # get a pointer to the first node
          
loop:     beqz   $s0,done       # while the pointer is not null
          lw     $a0,0($s0)     #   get the data of this node

          . . .                 #   do something with the node

          lw     $s0,4($s0)     #   get the pointer to the next node
          b      loop
          
done:    
          .data

elmnt01:  .word  1              # displacement 0 off the pointer
          .word  elmnt02        # displacement 4 off the pointer
        
          . . .

```

**The program starts with the first node.
Then (after doing something with the first node)
it moves on to the second node by loading the
address contained in the link field of the node.**

In this case, you want to load data from an
address into a register.
So the **lw** instruction
is the correct one to use.

## Question

What does it mean if the link field (the pointer) of a node contains
a `null` ?
