---
sidebar_position: 3
title: "Memory Layout"
---

Memory Layout

## Answer

- Does a **load** operation change the bit pattern in memory?  
NO: a register gets a copy of the bit pattern in memory.
- Does a **store** operation change the bit pattern in memory? 
YES: the bit pattern in the register replaces the contents of memory
at the designated addresses.

## Content

![Picture of Memory Organization](/Chapter-10/memoryLayout.gif)

Load and store operations copy the bit pattern 
from the source into the destination.
The source (register or memory) does not change.
Of course, the pattern at the destination 
is replaced by the pattern at the source.

Memory is built to store bit patterns.
Both instructions and data are bit patterns, and either of these
can be stored anywhere in memory (at least, so far as the hardware is concerned.)
However, 
**it is convenient for programmers and systems software to organize
memory so that instructions and data are separated.**
The picture shows how memory is laid out for a typical operating system.
QtSpim lays out memory this way.

Although the address space is 32 bits,
**the top addresses from 0x80000000
to 0xFFFFFFFF are not available to user
programs.**
They are used for the operating system
and for ROM.
When a MIPS chip is used in an
embedded controller 
the control program
exists in ROM in
this upper
half of the address space.

The parts of address space accessible 
to a user program are divided as follows:

> ****Text Segment:**** 
> This holds the
> machine language of the user
> program (the *text*).
> 
> 
> 
> ****Data Segment:****
> This holds the data that the program
> operates on.
> Part of the data is *static*.
> This is data that is allocated by the
> assembler and whose size does not change as a program executes.
> Values in it do change; "static"
> means the size in bytes does not change
> during execution.
> 
> 
> 
> On top of the static data is the
> *dynamic* data.
> This is data that is allocated 
> and deallocated as the
> program executes.
> In C programming, dynamic allocation 
> and deallocation is done with
> *malloc()* and *free()*.
> 
> 
> 
> ****Stack Segment:****
> At the top of user address space
> is the stack.
> With high level languages,
> local variables and parameters
> are pushed and popped on the
> stack as procedures are activated
> and deactivated.

## Question

(Thought Question)
As the program runs, the data segment
grows upward (as dynamic variables are allocated)
and the stack grows downward (as procedures get
called).
Is this sensible?
(Hint: how much user memory is left when the two
segments meet?)
