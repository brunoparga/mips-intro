---
sidebar_position: 14
title: "While not null"
---

While not null

## Answer

The node is the last one in the list.

## Content

![Advancing the Pointer](/Chapter-34/advancePointer.gif)

```mips
main:
          la     $s0,elmnt01    # get a pointer to the first node
          
loop:     beqz   $s0,done       # while the pointer is not null
          lw     $a0,0($s0)     #   get the data of this node

          . . .                 #   do something with the node

          lw     $s0,4($s0)     #   get the pointer to the next node
          b      loop
          
done:    

```

**The
 idea is to keep "advancing" the pointer `$s0` from
node to node until it contains a `null`.**
This is done in a loop.
The null pointer is detected with
a `beqz` instruction.

The picture  shows the pointer advancing through
the nodes until it becomes null.

## Question

Is there a limit to the size of linked list that this
program can handle?
