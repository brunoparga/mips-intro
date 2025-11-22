---
sidebar_position: 4
title: "Register Problem"
---

Register Problem

## Answer

Sure. And that new subroutine can call another one and so on.

## Content

**A subroutine always has its return address available,
either in `$ra` or on the top of the stack.**

When a subroutine calls another subroutine,
control will return to the caller a few instructions after the call.
Subroutines always return to their caller.
Subroutines are "last called, first return."
This is  implemented using the runtime stack,
which is "last in, first out."

**In
the Simple Linkage convention of the previous chapter,
registers `$s0―$s7` must not be altered by a subroutine.
But this restriction creates a problem when subroutines call other subroutines.**

Say that `main` calls `subA` and
that `subA` calls  `subB`.
`subA` can't save any values in `$s0―$s7` 
(because it is not allowed to alter them).
But values it saves in  `$t0―$t9` might be
altered by  `subB` (because  `subB` is allowed to use these registers).
It seems that
`subA` can't use any registers!
Not good.

**The solution is to allow `subA` to use 
`$s0―$s7`.
However, before using one of these registers,
`subA` must save its value on the stack.
Later, when
`subA`
returns to its caller,
it must restore the register to its initial state.**

## Question

Is it safe to store 
`$s0―$s7`
and `$ra` on the stack?
