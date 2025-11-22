---
sidebar_position: 20
title: "Body"
---

Body

## Answer

Yes. The S registers are popped in the reverse of the order in which they were pushed.

## Content

Here is the body filled in:

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
         
         # body
         mul     $s0,$a0,$a0      # x*x
         mul     $s1,$a0,$a1      # x*y
         li      $t0,5
         mul     $s2,$t0,$a1      # 5*y
         
         # subroutine maxInt call
         move    $a0,$s0          # compute max of x*x
         move    $a1,$s1          # and x*y
         jal     maxInt           # max returned in $v0
         nop
         # subroutine maxInt return

         # subroutine maxInt call
         move    $a0,$v0          # compute max of
         move    $a1,$s2          # current max, and 5*y 
         jal     maxInt           # total max will be in $v0
         nop
         # subroutine maxInt return

         # epilog


```

## Question

After the return from the second call to maxInt, the
maximum of the three expressions will be in `$v0`.
Is this where we want it?
