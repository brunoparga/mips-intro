---
sidebar_position: 9
title: "Linear Activation Chain"
---

Linear Activation Chain

## Answer

Yes. The chain does not need to unwind completely back to main before
it starts growing again.

## Content

**A particular subroutine (say A) may call several other subroutines in
succession (say B, then X, then Y, then Z).
But at any moment, it will have only one subroutine linked to it in
the chain of activation.**
The calls in most modern programming languages follow this stack-based
behavior.
The currently executing subroutine 
is at the end of a linear chain of activations that link back to the
operating system that first started   `main`.

The run-time stack has the same form as the chain of activation.
The top of the stack is for the currently running subroutine.
When that subroutine is finished 
its stack data is popped.

> Stacks are Last In, First Out data structures.
> 
> 
> 
> Subroutines are activated in a Last Called, First Finished  order.

**When a subroutine reaches its end, it returns to its caller,
and the chain is shortened.
Its caller might then call another subroutine, and the chain is
lengthened again.**

While a program that contains many subroutines is executing, the activation chain
grows up and down like a yo-yo.
Ultimately the chain is of length zero when the main routine returns
control to the operating system.

## Question

Does your brain feel like a yo-yo?
