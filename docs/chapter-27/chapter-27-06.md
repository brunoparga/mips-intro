---
sidebar_position: 6
title: "Stack-based Linkage Convention"
---

Stack-based Linkage Convention

## Answer

```mips
# subC might use $s0 and $s1         
# subC does not call another subroutine
#       
subC:             
         sub    $sp,$sp,4    # push $s0
         sw     $s0,($sp)
         sub    $sp,$sp,4    # push $s1
         sw     $s1,($sp)

         . . . .             # statements using $s0 and $s1

         lw     $s1,($sp)    # pop s1
         add    $sp,$sp,4
         lw     $s0,($sp)    # pop s0
         add    $sp,$sp,4

         jr     $ra          # return to subB 
         nop       

```

**The registers are popped in the **opposite order**
that they were pushed.**

## Content

The
Simple Linkage Convention can be extended into a
****Stack-based Linkage Convention**.**
This is not an official convention.
However it could be used for a small assembly language
project because it is not very 
complicated and does nearly everything you need.

If you want to link assembly language routines to
"C" programs or to use routines from
program libraries
you need to use the full, official, linkage rules.
(But on the SPIM simulator you can't do that, anyway.)
Here are our much simpler rules:


> **Subroutine Call**
> (done by the caller)
> 
> 
> 
> > - Push onto the stack any registers `$t0-$t9`
> >     that contain values that must be saved.
> >     The subroutine might change these registers.
> > - Put argument values into `$a0-$a3`.
> > - Call the subroutine using `jal`.
> 
> 
> 
> **Subroutine Prolog** 
> (done by the subroutine at its beginning)
> 
> 
> 
> > - If this subroutine might call other subroutines,
> >     push `$ra` onto the stack.
> > - Push onto the stack
> >     any registers `$s0-$s7`
> >     that this subroutine might alter.
> 
> 
> 
> **Subroutine Body**
> 
> 
> 
> > - The subroutine may alter any T or A register, or any S
> >     register that it saved in the prolog (step 5).
> > - If the subroutine calls another subroutine, then it does so
> >     by following these rules.
> 
> 
> 
> **Subroutine Epilog**
> (done by the subroutine just before it returns to the caller)
> 
> 
> 
> > - Put returned values in  `$v0-$v1`
> > - Pop from the stack
> >     (in reverse order)
> >     any registers `$s0-$s7`
> >     that were pushed in the prolog (step 5).
> > - If it was pushed in the prolog (step 4), pop the return address
> >     from the stack into `$ra`.
> > - Return to the caller using  `jr $ra`.
> 
> 
> 
> **Regaining Control**
> from a subroutine (done by the caller)
> 
> 
> 
> > - Pop from the stack 
> >     (in reverse order)
> >     any registers `$t0-$t9`
> >     that were previously pushed (step 1).

## Question

Why do you think there are both T and S registers?
Why not just have S registers and make it a rule that a
subroutine must save (and later restore) each one that it uses?
