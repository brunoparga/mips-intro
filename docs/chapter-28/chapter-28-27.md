---
sidebar_position: 27
title: "Recursive Call"
---

Recursive Call

## Answer

See Below.

## Content

```mips
         . . . . . .

recurse:                          # else
                                  #   return n*fact(n-1);
         sub     $a0,$s1,1        #     argument0 = n-1
                       
                                  # subroutine call
                                  #   1. No T registers to push
                                  #   2. Argument is in $a0 
         jal     fact             #   3. Jump and link to subroutine

         mul     $v0,$v0,$s1      # n*fact(n-1)

epilog:                           # epilog
                                  #   1. Return value is already in $v0        
         . . . . . .
         jr      $ra              #

```

**Recursion
has been implemented by using: (1) the normal machine operations
of sequential execution, testing, and branching, and (2) the run-time stack.**

This is (yet another) example of a new level of abstraction being build
upon a foundation level.

## Question

The programming language FORTRAN IV did not have support for recursion.
Was it possible to write a recursive program in FORTRAN IV?
