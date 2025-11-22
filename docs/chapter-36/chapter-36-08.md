---
sidebar_position: 8
title: "Dynamic Load Libraries"
---

Dynamic Load Libraries

## Answer

Yes.

## Content

With
a dynamic load library,
a subroutine is loaded from the library into  
main memory
only when it is needed by a program  running on the computer system.

Several programs might share the same subroutine
by having its entry point in their jump tables.
**By sharing subroutines,
programs can share and coordinate system resources.**

For example,
nearly all programs interact with the user
by using the resources of the windowing system.
**The windowing system is managed through 
dynamically loaded subroutines that are shared
by the programs.**

If you followed the above discussion you will have
(I hope) a better idea of how this works.
The idea has been around
since the middle nineteen sixties.

Object oriented programming has recently become
very popular.

## Question

(Review of OOP: )
What is an object?
