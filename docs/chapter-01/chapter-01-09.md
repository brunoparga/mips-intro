---
sidebar_position: 9
title: "Machine Language"
---

Machine Language

## Answer

No.  The two machines are very different.

## Content

![machine cycle](/Chapter-01/machinecycle.gif)

There 
 is not just one language called "assembly language."
**Each processor family 
(such as Intel, VAX, MIPS, ARM, ...)
has its own machine instructions and a corresponding
assembly language.**
MIPS assembly language is only for MIPS processors.
The VAX assembly language is only for VAX processors.
There is a different assembly language for IBM mainframe computers,
and others for Intel-based PCs.

**All processors follow the same basic machine cycle**
(see above.)
The differences between processors are in the details
of what operations are done in the "execute" phase of
the basic machine cycle.

**ssembly 
language describes
computations *in terms of the hardware*of a
particular processor.**
A high level computer programming language
(ideally) describes computations
*in terms of the problem being solved*.
Since there are many types problems,
there are many high level languages,
each designed for particular types of problems.
For example,
object-oriented languages,
describe computations in terms of the
objects of the problem and operations with them.

It is much easier to program a computer in a high level
language than in assembly language,
especially when the programming language matches
the problem.
There will never be a universal programming language
since no one language is best for all problems.

## Question

(Hard thought question:)  What type of problem is assembly
language best suited for?
