---
sidebar_position: 8
title: "Links of a Linked List"
---

Links of a Linked List

## Answer

```
          .data
elmnt01:  .word  1
next01:   .word  elmnt02

 . . . . . 

elmnt02:  .word  2
next02:   .word  .....

```

## Content

**A 
 **symbolic address** such as `elmnt02`
is a symbol in a source program that stands for an address.**
The above program fragment corresponds to this
picture:

> ![Two-node Linked List](/Chapter-34/startLinkedList.gif)

The two nodes are not necessarily next to each other in memory.
The following fragment implements the entire five node linked list:

```
          .data
elmnt01:  .word  1
          .word  elmnt02

elmnt02:  .word  2
          .word  elmnt03

elmnt03:  .word  3
          .word  elmnt04

elmnt04:  .word  5
          .word  elmnt05

elmnt05:  .word  7
          .word  0

```

**Each node contains the address of its successor node.
The field that holds this address is called the **next field****
or (to avoid ambiguity) the **link field**.
There is no need to provide a label for this field in
the nodes.

In a practical program you would never implement a linked list
by explicitly coding it this way.
And usually there is more data per node than a single integer.
But for now let us keep it simple.

## Question

Is the following a logically equivalent implementation of the list?

```
          .data
elmnt05:  .word  7
          .word  0

elmnt02:  .word  2
          .word  elmnt03

elmnt03:  .word  3
          .word  elmnt04

elmnt01:  .word  1
          .word  elmnt02

elmnt04:  .word  5
          .word  elmnt05


```
