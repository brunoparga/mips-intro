---
sidebar_position: 6
title: "Frame-based Linkage Convention"
---

Frame-based Linkage Convention

## Answer

```
a = a + 1;

```

```mips
lw      $t0,12($fp)    # get a
addiu   $t0,$t0,1      # a + 1
sw      $t0,12($fp)    # a = 

```

## Content

![stack frame](/Chapter-28/stackFrame00.gif)


**Conceptually, when a subroutine is called,
its stack frame is pushed onto the stack.
And, when a subroutine returns
to its caller its stack frame is popped.**
Pushing a stack frame is done by individually pushing
the many full-words that it contains.
And popping is done by individually popping each full-word
in reverse order.

A real-world linkage convention allows many types of
objects to go into a stack frame.
The following rules assume that the stack stores only 32-bit values.
There are other features of real-world linkage that the following does not have.

**Calling a Subroutine**
(done by the caller):

> - Push any registers `$t0-$t9`
>     that contain values that must be saved.
>     Push the registers in numerical order.
> - Put argument values into `$a0-$a3`.
> - Call the subroutine  using `jal`.

**Subroutine Prolog**
(done by the subroutine):

> - Push `$ra` (always).
> - Push the caller's frame pointer `$fp`.
> - Push
>     any of the  registers `$s0-$s7`
>     that the subroutine might alter.
> - Initialize the frame pointer: 
>     `$fp = $sp - space_for_variables`.
>     The "space for variables" is four times the
>     number of local variables.
>  
>     (Remember that subtracting from `$sp` grows the stack,
>      and that our variables are always four bytes wide).
> - Initialize the stack pointer: 
>     `$sp = $fp`.

**Subroutine Body:**

> - At this point the stack looks like the picture.
>  
>     The stack frame and its variables are ready for use.
> - The subroutine may alter any 
>     `T`, 
>     `A`, or 
>     `V` register, or any 
>     `S`
>     register that it saved in the prolog.
> - The subroutine refers to local variables as `disp($fp)`.
> - The subroutine may push and pop values on the stack using `$sp`.
> - If the subroutine calls another subroutine, then it does so
>     by following these rules.

**Subroutine Epilog**
(done at the end of the subroutine):

> - Put return values in  `$v0-$v1`
> - `$sp = $fp + space_for_variables`.
> 
>     Now `$sp` points at the last `S`
>     register that was pushed in the prolog.
> - Pop into  `$s0-$s7`
>     any  values for them
>     that were previously saved by the prolog (in step6).
> - Pop the caller's frame pointer into `$fp`.
> - Pop `$ra` (always).
> - Return to the caller using  `jr $ra`.

**Regaining Control**
from a Subroutine (done by the caller):

> - Pop
>     any registers `$t0-$t9`
>     that the caller previously pushed.

The push in the subroutine call (step 1)
is matched with a pop  when the caller regains control (step 20.)

Each push in the prolog (steps 4, 5, 6)
is matched with a pop in the epilog (steps 18, 17, 16).

## Question

When the caller gets control back, are its frame pointer and
stack pointer the same as when it called the subroutine?
