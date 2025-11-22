---
sidebar_position: 7
title: "Linked List"
---

Linked List

## Answer

No, not easily.

## Content

![Linked List](/Chapter-34/intLinkedList.gif)


**A 
 **linked list** overcomes some of the disadvantages
of arrays (and introduces its own disadvantages).**
In a linked list,
each node consists of two items:

- The data
- The address of the next node (called a link)

The picture shows the idea.
Each rectangle represents a block of memory.
**Part of the block holds the data, and the other part holds
the address of the next block of data.**

The arrows represent memory addresses.
**The diagonal slash in the last node stands for
the value `null` which is how the
last node shows that it has no successor.**
In MIPS assembly (and in most other languages),
`null` is a word full of zero bits.

The blocks of memory (implementing nodes)
need not be adjacent to each other
in physical memory.

## Question

Here is a node of a linked list:



```
          .data
elmnt01:  .word  1
next01:   .word  

```

 

Here, somewhere else in the program, is the second node:



```
elmnt02:  .word  2
next02:   .word  .....

```

 

Fill in the blank so that the field `next01` contains
the address of the second node.
