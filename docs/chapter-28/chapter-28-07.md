---
sidebar_position: 7
title: "Diagram"
---

Diagram

## Answer

Yes.

## Content

![prolog epilog](/Chapter-28/prologEpilog.gif)


Those
rules are complicated.
In broad outline it works the same way as the
previous chapter's stack-based linkage convention.
But now, **the subroutine prolog pushes room on the stack
for local variables, and the epilog pops that room.**

The picture shows the sections of  subroutine linkage.
The basic tasks of each section are:

> **Subroutine Call:** Push  any `T` registers that  
> contain values that are needed.
> Put arguments in `A` registers.
> `jal` 
> to the subroutine.

> **Prolog:** Push 
> `$ra` and the caller's 
> `$fp`. 
> Push any 
> `S` 
> register the subroutine will alter.
> Make room for variables and initialize the subroutine's 
> `$fp` and  
> `$sp`.

> **Body:** Normal code, except it must follow these conventions
> if it calls another subroutine. 
> `T` and 
> `A` registers can be used freely, as can any 
> `S` registers that were saved in the prolog.
> Use `disp($fp)` to access variables on the stack.

> **Epilog:** 
> Put return values in 
> `V` registers.
> Reset 
> `$sp`.
> Pop  any 
> `S` registers.
> Pop the caller's 
> `$fp` and 
> `$ra`.
> `jr $ra` 
> back to the caller.

> **Regaining Control:** Pop  any previously pushed 
> `T` registers.

## Question

Is there a limit to how many variables a subroutine may have?
