---
sidebar_position: 14
title: "Epilog"
---

Epilog

## Answer

The return value (the maximum) is already in `$v0`.
So all the epilog needs to do is return to the caller.

## Content

It is OK if the return value is already in `$v0` when the
epilog is reached.
Here is the complete subroutine:

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
          jr     $ra              # return to caller
          nop

```

**This subroutine could be put in
its own file, perhaps `maxInt.asm`, and separately 
assembled.**
Later on it could be used with programs we don't
even know about, as long as they follow the
Stack-based Linkage Convention.

With QtSPIM, main and each subroutine can be placed 
in a separate file and separately loaded.
Use the "File" menu. 
Use the "Reinitialize and Load File" menu choice for main, and
use "Load File" with the subroutines.

Here is a main that can be used with this subroutive.
It has a prolog and epilog that follow the linkage convention.

```mips
## maxIntMain
##
## Call maxInt to find the maximum of two hard-coded integers
##
         .text
         .globl main

main:
          #prolog
          sub     $sp,$sp,4       # push the return address
          sw      $ra,($sp)
          
          # body
          li     $a0,12           # A = 12
          li     $a1,34           # B = 34  
          jal    maxInt           # $v0 = max
          nop
          move   $s0,$v0          # $s0 = max
          la     $a0,capt         # print caption
          li     $v0,4
          syscall 
          move   $a0,$s0
          li     $v0,1            # print max
          syscall
          
          # epilog
          lw      $ra,($sp)        # pop return address
          add     $sp,$sp,4         
          jr      $ra              # return to caller 
          nop      
          
          .data
capt:     .asciiz "Maximum: "

```

## Question

Must the `nop` follow the `jr`?
