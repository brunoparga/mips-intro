---
sidebar_position: 11
title: "Executable Files"
---

Executable Files

## Answer

No. ASCII characters are wasteful of bits,
since only seven of the eight bits are used.
A compressed file makes better use of bit patterns.
The bytes in the compressed file do not correspond directly to ASCII.

## Content

When 
one says "executable file" one
really means:

> ****Executable File:** 
> A file containing a sequence of bytes.**
> Each byte holds a bit pattern  
> that represents part of a machine instruction
> for a particular processor. 
> The operating system
> can load (copy) an executable file into main storage  
> and can then execute the program.

A byte  in an executable file
can contain any possible 8-bit pattern.
A file like this
often is called a **Binary File**.
This is  misleading vocabulary.
All files represent their information
as binary patterns.

When one says "MS Word file" one
really means:

> ****Word File:** A file containing a sequence of bytes.**
> Each byte holds a bit pattern 
> created by the MS Word program, 
> which encodes data only that program
> (and a few others) can process.

There is nothing special about the various "types"
of files.
Each is a sequence of bytes.
Each byte holds a bit pattern.
A byte can hold one of 256 possible patterns
(although some file types allow only 128 or fewer of these patterns).
When longer bit patterns are needed
they are held in several contiguous bytes.

## Question

Say that you compress 
a text file with a file compression
utility.
What is the minimum compression can you expect?
