---
sidebar_position: 19
title: "Popping S Registers"
---

Popping S Registers

## Answer

Yes —  it pops what the prolog pushed, and then does a `jr`.

## Content

The epilog must also ensure that the correct return value is in `$v0`.
That will be done later.
Here is the code so far:

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
         lw      $s2,($sp)        # pop $s2 
         add     $sp,$sp,4                                    
         lw      $s1,($sp)        # pop $s1 
         add     $sp,$sp,4                                    
         lw      $s0,($sp)        # pop $s0 
         add     $sp,$sp,4                                    
         lw      $ra,($sp)        # pop return address
         add     $sp,$sp,4         
         jr      $ra              # return to caller 
         nop

```

## Question

Have the pops been done in the correct order?
