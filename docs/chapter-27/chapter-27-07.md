---
sidebar_position: 7
title: "Diagram"
---

Diagram

## Answer

This is an optimization for speed.
Many subroutines need to use only a few registers for
temporary values.
They can use the T registers without the added expense
of saving and restoring them.
A subroutine that needs more registers or that needs to
have values saved across a subroutine call may use some
S registers, but must pay for them by saving and restoring them.

## Content

![two linked subroutines](/Chapter-27/prologEpilog.gif)

These
rules are somewhat complicated.
Here is a  picture.
The basic tasks of each section are:

> ****Subroutine Call:**** Push  all T registers that contain
> values that will be needed after the call.
> Put arguments in A registers.
> `jal` to the subroutine.

> ****Prolog:**** If this subroutine calls other subroutines,
> push `$ra`. Push all S registers that the subroutine alters.

> ****Body:**** Normal code, except that it must follow these conventions
> if it calls a subroutine.
> T registers and A registers can be used freely, as
> can any S registers that were saved in the prolog.

> ****Epilog:**** 
> Put return values in V registers.
> Pop  any S registers.
> Pop `$ra` if it was pushed in the prolog.
>  `jr $ra`  back to the caller.

> ****Regaining Control:**** Pop  any T registers that were previously pushed.

## Question

Is there any limit in these rules about how many levels deep subroutine
calls may be?
