---
sidebar_position: 3
title: "Linked List Nodes"
---

Linked List Nodes

## Answer

The address of the successor node.

## Content

The 
 previous chapter implemented linked lists using
static memory and symbolic addresses.
Here is some code and a picture of what it does:


```
          .data
elmnt01:  .word  1
          .word  elmnt02

elmnt02:  .word  2
          .word  0

```



<!-- Missing image: startLinkedList.gif - ![Two Node List](/Chapter-35/startLinkedList.gif) -->


**This chapter will build the same structure using **dynamic** memory.**

Each node contains an integer and an address.

## Question

How many bytes are needed for each node?
