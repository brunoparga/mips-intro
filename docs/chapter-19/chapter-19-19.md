---
sidebar_position: 19
title: "Computational Power of Structured Programming"
---

Computational Power of Structured Programming

## Answer

Yes.  We will do this in a later chapter.

## Content

You might think that these rules are OK for ensuring stable code,
but that they are too restrictive.  Some power must be lost.
But nothing is lost.

**Two researchers, Böhm and Jacopini, proved that any program can be written
in a structured style.
No computing power is lost by restricting control flow to 
the forms of structured programming.**

The other control structures you may know,
such as *case*, 
*do-until*, *do-while*, and *for* are not needed.
However, they are sometimes convenient,
and are usually regarded as part of structured programming.
In assembly language they add little convenience
(since you have to implement them yourself).
I recommend using only the structures discussed in this chapter.

**Any program you need to write in assembly
can be written in a structured style.
You should think about a problem and the means of solving it
in exactly the way you would using a high-level, 
structured language.**
Once you have the solution designed, the implementation
becomes mere "coding".
Coding is the near-mechanical 
translation of a design into code.
Design and coding should not be done simultaneously
(in an ideal world, where all projects are on time,
and dot-coms never fail).

## Question

(Thought question:) Can a structured assembly language program
sometimes be speeded up by using non-structured control?
