---
sidebar_position: 2
title: "Review of Memory"
---

Review of Memory

## Answer

2<sup>32</sup>  — about four billion

## Content

![Memory Layout](/Chapter-10/memoryLayout.gif)

Recall 
(from chapter 10) that there are 2<sup>32</sup> bytes
available in main memory, each one with its own address.
Most of these bytes are *virtual*.
They are implemented by the virtual memory system and do
not directly correspond to bytes in RAM chips.
But to executing programs it looks as if all the bytes are present.

Usually, with a multitasking system,
the processor is shared among many executing programs.
But the operating system makes it appear to each
executing program as if it is the only one running on the system.
Also, the operating system makes it look to each program as if
2<sup>31</sup> bytes are there for it alone.
(The other half of memory is for the operating system.)

For these chapters,
ignore these details
and just think of a program as running by itself
in two billion bytes of memory and the
operating system running in the other two billion bytes.

The picture shows a program running in the bottom half
of memory
and the operating system in the top half.
The operating system divides the memory available 
to a program into sections.
This is not required by hardware, 
but makes managing computer operations easier.

- The *Text Segment* holds the machine language of the program.
- The *Data Segment* holds the memory that has been allocated to the
program just as it starts.
- The *Stack Segment* is for the run-time stack.



**Between the data segment and the stack segment there is unallocated memory.
It is used for growing the stack (shown as the downward-pointing arrow at the top)
or for creating dynamic data structures (shown as the upward-pointing arrow at the bottom).**
Both of these activities occur as the program is running.

**The **heap** is the portion of memory above the fixed data segment  
used for dynamic memory allocation.**

## Question

What is the process of allocating memory from the heap called?
