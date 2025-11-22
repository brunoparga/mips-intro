---
sidebar_position: 12
title: "Memory Dump"
---

Memory Dump

## Answer

In the heap.

## Content

![Three Node List Memory Dump](/Chapter-35/threeNodeListMemDump.gif)

The picture shows memory after the program has run.

**The word of memory at address
`10010000` corresponds to symbolic address `first` .**
It contains the address of the first node, `10040000` .
The red arrow points to the first node.

The first node contains the data, integer `1`
and the address of the next node, `1004008`.
Follow that address to the second node.

The second node contains the data, integer `2`
and the address of the next node, `1004010`.
Follow that address to the third node.

The third node contains the data, integer `3`
and the address  `0000000`.
This indicates it is the last one in the chain.

## Question

Are the nodes of a linked list always sequential in memory as they are here?
