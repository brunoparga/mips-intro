---
sidebar_position: 8
title: "Finished Program"
---

Finished Program

## Answer

See below

## Content

Here
is the finished program.
If you had plenty of registers available you
would use them to hold the terms of the expressions,
and not use the stack.
But in a large program,
with most registers already in use,
you might do it this way.

**Notice how each push is matched with a pop,
and how the pops happen in
the reverse order of the pushes.**


```mips
# Evaluate the expression ab - 12a + 18b - 7
#
# Settings: Load delays OFF; Branch delays OFF,
#           Trap file    ON; Pseudoinstructions ON   

        .globl  main

main:   
        lw      $t0,a          # get a
        lw      $t1,bb         # get b
        mul     $t0,$t0,$t1    # a*b
        subu    $sp,$sp,4      # push a*b onto stack
        sw      $t0,($sp)
        
        lw      $t0,a          # get a
        li      $t1,-12        # 
        mul     $t0,$t0,$t1    # -12a
        subu    $sp,$sp,4      # push -12*a onto stack
        sw      $t0,($sp)
        
        lw      $t0,bb         # get b
        li      $t1,18         # 
        mul     $t0,$t0,$t1    # 18b
        subu    $sp,$sp,4      # push 18*b onto stack
        sw      $t0,($sp)

        li      $t1,-7         # init sum to -7
        lw      $t0,($sp)      # pop 18*b
        addu    $sp,$sp,4
        addu    $t1,$t1,$t0    # 18b -7
                
        lw      $t0,($sp)      # pop -12*a
        addu    $sp,$sp,4
        addu    $t1,$t1,$t0    # -12a + 18b -7
                
        lw      $t0,($sp)      # pop a*b
        addu    $sp,$sp,4
        addu    $t1,$t1,$t0    # ab - 12a + 18b -7
         
done:   li      $v0,1          # print sum
        move    $a0,$t1
        syscall
        li      $v0,10         # exit
        syscall   

        .data
a:      .word  0
bb:     .word  10

```

## Question

(Thought Question:) Is it possible to run out of memory if too many things
are pushed onto the stack?
