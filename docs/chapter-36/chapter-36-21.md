---
sidebar_position: 21
title: "Allocating Memory for an Object"
---

Allocating Memory for an Object

## Answer

Usually not.

## Content

Object
one is built out of dynamically
allocated memory.
Here is the start of the program
that allocates the memory for one
object.
**The address of the newly allocated
memory is saved at
`object1`.
(this is roughly equivalent
to a reference variable in Java.)**

The symbolic address `object1`
corresponds to just one word of 4 bytes.
The object it references will be in dynamic
memory, in the heap.


```mips
          .globl   main
          .text
main:                                 # object1 = new object(); 
          li       $v0,           #   allocate 32 bytes
          
          li       $a0,           #  
          
          syscall                     #   $v0 = address of allocated block of memory
          sw       $v0,           #

          . . . . . .

          .data
object1:  .word    0
object2:  .word    0

```

## Question

Fill in the blanks.
(Hint: the code for the dynamic memory allocation
service is 9.  The argument for the service is the number of bytes to allocate.)
