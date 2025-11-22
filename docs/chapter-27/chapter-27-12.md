---
sidebar_position: 12
title: "Prolog of the Subroutine"
---

Prolog of the Subroutine

## Answer

Yes. That is one of ideas of modularity.
You want to write a subroutine without
the need to look inside other modules.

## Content

The subroutine looks like this:

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

         # prolog


         # body


         # epilog



```

This subroutine does not call another subroutine.

## Question

According to the rules of 
Stack-based Linkage Conventionstack-based linking,
does this subroutine's prolog need to push the return address?
