---
sidebar_position: 1
title: "CHAPTER  33 — Dynamic Memory Allocation"
---

# CHAPTER  33 — Dynamic Memory Allocation

## Content

### Chapter Topics:

- Dynamic Memory Allocation
- Records and Structures
- Subroutine Calls with Structures
- C program versions of the above

# CHAPTER  33 — Dynamic Memory Allocation

**Dynamic memory allocation is used in assembly language and
high level languages for building data structures.**
In object oriented languages it is used to get the memory 
used to construct objects.

Just 
before a program starts running,
the loader copies
machine code from the executable file into
the **text** segment of memory.
It also copies data from the executable file into the
**data** segment of memory.

Source
code declares a fixed amount of memory
(in the .data section for assembly language).
**But often as a program runs
it requests more memory for data.**
The operating system finds a block of available memory
and allocates it to the program.
**This is **dynamic memory allocation**.**

## Question

(Review: ) How many addresses does MIPS main storage have?
