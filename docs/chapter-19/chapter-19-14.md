---
sidebar_position: 14
title: "Structure Rule Three: Alternation"
---

Structure Rule Three: Alternation

## Answer

Yes.

## Content

![structure rule three](/Chapter-19/structureRule3.gif)

If-*then-else* 
is sometimes called **alternation**
(because there are alternative choices).
In structured programming, 
**each choice is a code block.** 
The decision box (the diamond) picks the correct branch 
so that the entry conditions for that block are correct.

If alternation is arranged as in the flowchart at right,
then **there is one entry point (at the top) and
one exit point (at the bottom).**
The structure should be coded 
so that if the entry conditions
are satisfied, 
then the exit conditions are fulfilled
(just like a code block).

> ****Rule 3 of Structured Programming:**
> The alternation of two  code blocks is structured.**

An example of an entry condition  for an alternation
structure is: *register $8 contains a signed integer*.
The exit condition might be: 
*register $8 contains the absolute value of the signed integer*.
The branch structure is used to fulfill the exit condition.

## Question

Can the condition which is tested (in the diamond-shaped box) be complicated?
