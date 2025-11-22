---
sidebar_position: 4
title: "SPIM Dynamic Memory"
---

SPIM Dynamic Memory

## Answer

No.  Recall that a stack has a "last-in, first-out" organization.
Unneeded memory is always popped from the top of the stack.
Like a stack of plates, there are no holes underneath the top plate.

## Content

```mips
li      $a0,xxx   # $a0 contains the number of bytes you need.
                  # This must be a multiple of four.
li      $v0,9     # code 9 == allocate memory
syscall           # call the service.
                  # $v0 <-- the address of the first byte
                  # of the dynamically allocated block

```

A
stack is an easily managed structure.  
Only a few memory addresses are
needed to keep track of it.
(Some of these addresses are in the stack pointer and in the frame
pointer registers.)
As a program executes, the stack 
grows and shrinks 
as subroutines are called and exited.

**The heap is more like a book shelf.** 
Books are constantly being
taken off the shelf from various locations,
leaving gaps,
and then
later returned, filling the gaps.

Here is how a SPIM program requests a block of memory from
SPIM's heap.
**Use service code 9 to allocate a block of memory.
Put the number of bytes requested in `$a0`**

You don't know in advance what range of addresses you will get
back for the allocate memory request.
**The SPIM service returns the first address of a contiguous block of memory
in `$a0`.**
(This is similar to a call to `malloc()` in C.)

## Question

In a full operating system, is there a service for *deallocating*
memory, for returning a previously allocated block to the system?
