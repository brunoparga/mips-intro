---
sidebar_position: 12
title: "Using Variables"
---

Using Variables

## Answer

See below.

## Content

```mips
#  int mysub( int arg )
#  {
#    int b,c;                     // b: 0($fp)
#                                 // c: 4($fp)
#    b = arg*2;
#    c = b + 7;
#    
#    return c;  
#  }
         .text
         .globl  mysub
mysub:
                                  # prolog        
         sub     $sp,$sp,4        #   1. Push return address
         sw      $ra,($sp)
         sub     $sp,$sp,4        #   2. Push caller's frame pointer
         sw      $fp,($sp)

         sub     $sp,$sp,4        #   3. Push register $s1
         sw      $s1,($sp)

         sub     $fp,$sp,8        #   4. $fp = $sp - space_for_variables

         move    $sp,$fp          #   5. $sp = $fp
         
                                  # body of subroutine    
                                   
         mul     $s1,$a0,2        # arg*2
         
         sw      $s1, ( )     # b = "   "
         
         lw      $t0, ( )     # get b
         
         add     $t0,$t0,             # b+7
         
         sw      $t0, ( )     # c = "  "
         
         . . . . .

                                   # return to caller 

```The
subroutine uses two variables so there are eight bytes
of space on the stack frame for them.

The program is not very efficient, as written.
There is no need to store and then load `b`.
A non-optimizing compiler might do just that, however.

## Question

Fill in the blanks.  Assume that `b` is at displacement 0
and that `c` is at displacement `4`.
