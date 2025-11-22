---
sidebar_position: 10
title: "Pointers"
---

Pointers

## Answer

![core dump](/Chapter-34/coreDump.gif)

At what address is the first node in the linked list?
0x10010000

What is the address in its link field?
0x10010008

What is the address of the second node in the linked list?
0x10010008

## Content

**When
 a memory address is used as a link between nodes of a
data structure it is sometimes called a **pointer**.**
In some higher level languages (such as C) a pointer is exactly the
same as a main memory address.
Other languages (such as object oriented languages)   
require a pointer to have more features
than a raw memory address can provide.
In these languages a "pointer" is more elaborate than a memory address.

For this course,
**let us regard "pointer" and "memory address" as exactly the same.**
Sometimes the word "reference" is used for the link to a node.
In Java (for example), 
an object reference 
is not a raw memory address.

## Question

(Review:) What bit pattern is used to represent `null`?
