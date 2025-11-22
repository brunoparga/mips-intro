---
sidebar_position: 22
title: "Storage Classes"
---

Storage Classes

## Answer

`a` and `b`: (1) Storage for
them exists only while the subroutine is active 
(while it has not yet returned control to its caller).
(2) When it exists, the storage is on the run-time stack.

`prompt1` and `prompt2`:
(1) Storage for them exists while the program is in
main storage.
(2) Storage is in the data section of memory.

## Content

![memory](/Chapter-10/memoryLayout.gif)

**There
are three places in memory where data may be placed:**

- the data section 
(declared with `.data` in assembly language),
- the run-time stack,
- the heap.

A subroutine other than `main()`
can have data in the **`.data` section.**
In high-level programming languages, such as "C",
this type of storage is called ****static**.**

**Variables whose storage is allocated on the run-time
stack are (sometimes) called **automatic** variables.**
This is because their storage is "automatically" pushed and
popped as a subroutine is entered and exited.
Usually these are subroutine parameters and local variables.

**A variable whose memory is located in the heap is called
a **dynamic variable**.**
The heap is where memory for objects is found
(using the `new` operation in Java or C++).
In C dynamic memory is allocated using the `malloc`
operation (or similar).
Chapter 33 of these notes discusses the heap.

The **heap** is on top of the data segment.
As dynamic variables are created it grows upward (towards the stack stack segment.)

## Question

(Review:) What happens if the stack and heap get larger and larger?
