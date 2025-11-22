---
sidebar_position: 13
title: "Prolog"
---

Prolog

## Answer

No.

## Content

**A prolog is required to push `$ra` 
only if the subroutine  calls another subroutine, and must push any S registers the subroutine uses.**
But our subroutine does neither.
So, the prolog pushes nothing at all.

```mips
## maxInt -- compute the maximum of two integer arguments
##
## Input:
## $a0 -- a signed integer
## $a1 -- a signed integer
##
## Returns:
## $v0 -- maximum

         .text
         .globl maxInt

maxInt:
          # body
          move   $v0,$a0          # max = $a0
          bgt    $a0,$a1,endif    # if $a1 > $a0  
          nop
          move   $v0,$a1          #    max = $a1
endif:                            # endif 
          # epilog
           
          

          


```The body computes the maximum of the two arguments
and puts it in `$v0`.

## Question

According to the rules of 
Stack-based Linkage ConventionStack-based Linkage,
what should the epilog of this subroutine do?
