---
sidebar_position: 2
title: "Pushing the Return Address"
---

Pushing the Return Address

## Answer

No.

In the previous chapter, 
after a subroutine is called,
the return address to main is
in register `$ra`.
If that subroutine calls another subroutine, 
the address in `$ra` is changed
and the return address to main is lost.

## Content

![Main calling A](/Chapter-27/mainCallingA.gif)

**To
return to the caller
a subroutine must have the correct 
return address
in `$ra` when
the `jr` instruction is performed.**

But this address does not have to remain in `$ra` 
all the time the subroutine is running.
It works fine
to save the value in `$ra` somewhere.
The value can be restored, later on, when 
it is time to return to the caller.

In the  picture, 
the operating system calls
`main`.
The return address to the operating system
is in `$ra`.
**When it gets control,
`main`
pushes the return address on the stack**   (step 1).
The return address that `main`
should use when it returns to the operating system
is now on the top of the stack.

The
"push" and "pop" instructions in the picture are conceptual.
Actual code does these operations in the usual way.

After pushing the return address,
`main` computes for a while.
**Then `main` calls `subC`
using a `jal` instruction (step 2).**
This puts the return address to `main`
in `$ra`.
It does not matter that `$ra` has
been changed because the return address that `main`
will use to return to the operating system is safely on the stack.

`subC` receives control and computes for a while.
Because it does not
call another subroutine, `subC` 
does not alter `$ra` and does not need to save it on the stack.
**When `subC`  returns to `main`
it uses a `jr $ra` instruction (step 3).**

Control returns to
`main`,
which computes for a while.
**`main` returns to the OS
by popping the stack into `$ra`
and executing
a `jr $ra` instruction** (step 4).

Exception handler
service 10 is another way to return to the OS.
For this example let us not do that.

NOTE: The latest version of QtSPIM requires   `main` to end by using exception handler service 10.

## Question

Is there room on the stack for additional addresses?
