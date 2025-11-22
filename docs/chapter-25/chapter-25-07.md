---
sidebar_position: 7
title: "Program Continued"
---

Program Continued

## Answer

See below:

## Content

**Terms
of the expression are pushed onto the stack as they are evaluated.**

Then the sum is initialized to -7 and the terms on the stack are popped
one by one
and added to the sum.

```mips
# Evaluate the expression ab - 12a + 18b - 7

        .globl  main
        lw      $t0,a          # get a
        lw      $t1,bb         # get b
        mul     $t0,$t0,$t1    # a*b
        subu    $sp,$sp,4      # push a*b onto stack
        sw      $t0,($sp)
        
        lw      $t0,a          # get a
        li      $t1,-12        # 
        mul     $t0,$t0,$t1    # -12a
        subu    $sp,$sp,4      # push -12a onto stack
        sw      $t0,($sp)
        
        lw      $t0,bb         # get b
        li      $t1,18         # 
        mul     $t0,$t0,$t1    # 18b
        subu    $sp,$sp,4      # push 18b onto stack
        sw      $t0,($sp)

        li      $t1,-7         # init sum to -7
        
        lw      $t0,      # pop 18b
        
        addu    $sp,$sp,
        
        addu    $t1,$t1,$t0    # 18b -7

        . . . .

```

## Question

Fill in the blanks to pop the `18b` term.
