---
sidebar_position: 18
title: "Pushing S Registers"
---

Pushing S Registers

## Answer

The S registers used by the subroutine
must be saved on the stack.

## Content

The subroutine now looks like:

```mips
## maxExp -- compute the maximum of three expressions
##
## Input:
## $a0 -- a signed integer, x
## $a1 -- a signed integer, y
##           
## Returns: 
## $v0 -- the maximum of x*x,  x*y, or 5*y
##
## Registers:
## $s0 --  x*x
## $s1 --  x*y
## $s2 --  5*y

         .text
         .globl maxExp

maxExp:
         # prolog
         sub     $sp,$sp,4        # push the return address
         sw      $ra,($sp)
         
         sub     $sp,$sp,4        # push $s0
         sw      $s0,($sp)
         
         sub     $sp,$sp,4        # push $s1
         sw      $s1,($sp)
         
         sub     $sp,$sp,4        # push $s2
         sw      $s2,($sp)
         
         # body

         # subroutine maxInt call with x*x and x*y
         # subroutine maxInt return

         # subroutine maxInt call with current max and x*y
         # subroutine maxInt return

         # epilog

```

## Question

Do you now know what the epilog looks like?

**Subroutine Epilog**
(done by the subroutine just before it returns to the caller)

> - Put returned values in  `$v0-$v1`
> - Pop from the stack
>     (in reverse order)
>     any registers `$s0-$s7`
>     that were pushed in the prolog (step 5).
> - If it was pushed in the prolog (step 4), pop the return address
>     from the stack into `$ra`.
> - Return to the caller using  `jr $ra`.
