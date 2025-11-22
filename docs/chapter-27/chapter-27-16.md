---
sidebar_position: 16
title: "maxExp"
---

maxExp

## Answer

Of course, if linkage conventions are followed.

## Content

The subroutine looks like this:

```mips
## maxExp -- compute the maximum of three expressions
##
## Input:
## $a0 -- a signed integer, x
## $a1 -- a signed integer, y
##           
##  Returns: 
## $v0 -- the maximum of x*x,  x*y, or 5*y

         .text
         .globl maxExp

maxExp:
         # prolog


         # body
         # compute x*x,  x*y, 5*y 

         # subroutine maxInt call with x*x and x*y
         
         # subroutine maxInt return

         # subroutine maxInt call with current max and x*y
         
         # subroutine maxInt return

         # epilog


```

**This subroutine has all four parts of the linkage convention.**

## Question

According to the rules of 
stack-based linking,
does this subroutine's prolog need to push the return address?

**Subroutine Prolog** 
(done by the subroutine at its beginning)

> - If this subroutine might call other subroutines,
>     push `$ra` onto the stack.
> - Push onto the stack
>     any registers `$s0-$s7`
>     that this subroutine might alter.
