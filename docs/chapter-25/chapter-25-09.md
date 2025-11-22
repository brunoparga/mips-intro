---
sidebar_position: 9
title: "Runtime Stack"
---

Runtime Stack

## Answer

Yes.

## Content

![memory layout](/Chapter-10/memoryLayout.gif)

There
is a finite amount of memory, even in the best computer systems.
So it is possible to push more words than there are words of memory.
Usually this would be the result of an infinite loop 
because when a program is first entered the operating system gives it
space for a very large stack.

**The picture shows how a 
typical operating system arranges memory
when a program starts running.**

There are four gigabytes of (virtual) memory available in total.
The section of memory from 0x10000000 to 0x7FFFFFFF is available for
the data segment and the stack segment.
This is 1.8 Gigabytes of space.

When
the program is started the stack pointer (`$sp`) is
initialized to  0x7FFFFFFC
(the address of the last fullword of user memory).
**As the program runs,
the stack grows downward into the available space.**

Dynamically allocated memory is implemented by the data segment.
This is where objects are allocated (in object oriented programming),
or where `malloc()` allocates memory in C programming.
**The data segment grows upward as the program runs.**
(This is the subject of chapter 33.)

In a dynamic program,
the segments grow and shrink.
If the combined size of the segments exceeds the
available space their boundaries will meet
somewhere in the middle of the range.
When this happens there is no memory left.

Another (inferior) way of arranging memory might
be to divide the space above the text segment
so the stack gets half and the data segment gets half.
But now the stack could grow too large for its
allocated space, even if there was a tiny data segment
that used little of its space.

## Question

Which segment is for the machine instructions?
