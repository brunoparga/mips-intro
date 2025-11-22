---
sidebar_position: 18
title: "Structure Rule Five: Nesting Structures"
---

Structure Rule Five: Nesting Structures

## Answer

Yes

## Content

![Iteration](/Chapter-19/absIterate.gif)


**In flowcharting terms, any code block can
be expanded into any of the structures.**
Or, going the other direction, if there is a portion of the flowchart
that has a single entry point and a single exit point, it can be
summarized as a single code block.

> ****Rule 5 of Structured Programming:**
> A structure (of any size) that has a single entry point
> and a single exit point is equivalent to a code block.**

For example, say that you are designing a program to
go through a list of signed integers calculating the
absolute value of each one.
You might (1) first regard the program as one block, then
(2) sketch in the iteration required, and finally
(3) put in the details of the loop body.

Or, you might go the other way.
Once the absolute value code is working,
you can regard it as a single code block to be used
as a component of a larger program.

**Sometimes this idea is called **modularity.****
If a structure (say the third view, above) computes
something useful, call it a **module**.
The module is a self-contained component that does something
useful if the entry conditions are met.
The module can now be used as a building block for larger structures.

When the larger structures are working, they can be themselves
be regarded as as modules and used to build yet-bigger modules.
This idea is common in science and engineering.
Open the hood of your car and look at the engine-module,
built of modules, that are build of yet-smaller modules.

## Question

(Thought question:) Would it be a good idea to implement
a useful code block as a subroutine (as a function)?
