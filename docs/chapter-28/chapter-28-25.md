---
sidebar_position: 25
title: "Body of   fact()"
---

Body of  fact()

## Answer

No. Sometimes a global symbol is used 
to label data that several modules
may refer to.

## Content

```mips
#  int fact( int n )
#  {
#    if ( n<=1)
#      return 1;
#    else
#      return n*fact(n-1);
#  }
         .text
         .globl  fact
fact:
                                  # prolog        
         . . . . . .
                                  # body of subroutine
         move    $s1,$a0          # save argument in $s1
         li      $t1,1            # get a 1
         bgt     $s1,$t1,recurse  # if ( n<=1)
         li      $v0,1            #   return 1
         
         b        

recurse:                          # else
                                  #   return n*fact(n-1);
         . . . . . . 
epilog:                           # epilog
                                  #   1. Return value is already in $v0        
         . . . . . .
         jr      $ra              #

```The argument in 
`$a0` is saved in register  
`$s1` 
because later on 
`$a0` may be altered.
(Since this subroutine uses  
`$s1` the contents of  
`$s1`
is saved on the stack in the prolog).

**The `if` statement checks if the argument
(in `$a0`) is 1 or less.
If so, it loads  register
`$v0` with the value to return to the caller, one.
Otherwise, the other branch is taken
and the recursive call is performed.**

## Question

Fill in the blank.
