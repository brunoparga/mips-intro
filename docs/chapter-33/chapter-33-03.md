---
sidebar_position: 3
title: "Dynamic Memory Allocation"
---

Dynamic Memory Allocation

## Answer

dynamic memory allocation

## Content

![Memory Fragmentation](/Chapter-33/fragmentation.gif)

Dynamic memory allocation
is when an executing program
requests that the operating system 
give it a block
of main memory.
The program then uses this memory for some purpose.
Usually the purpose is to add a node to a data structure.
In object oriented languages, dynamic memory allocation
is used to get the memory for a new object.

The memory comes from above the static 
part of the data segment.
**Programs may request memory and may also return previously
dynamically allocated memory.**
Memory may be returned whenever it is no longer needed.
Memory can be returned in any order without any relation
to the order in which it was allocated.
**The heap may develop "holes"
where previously allocated memory has been returned 
between blocks of memory still in use.**

A new dynamic request for memory might return a range of addresses
out of one of the holes.
But it might not use up all the hole, so further dynamic requests 
might be satisfied out of the original hole.

**If too many small holes develop, memory is wasted** because
the total memory used by the holes may be large, but
the holes cannot be used to satisfy dynamic requests.
**This situation is called **memory fragmentation**.**
Keeping track of allocated and deallocated memory is complicated.
A modern operating system does all this.

## Question

Does the Stack Segment also have memory holes in it?
