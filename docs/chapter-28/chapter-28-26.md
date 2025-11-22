---
sidebar_position: 26
title: "More   fact()"
---

More  fact()

## Answer

See below.

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
         b       epilog  

recurse:                          # else
                                  #   return n*fact(n-1);
         sub     $a0,$s1,1        #     argument0 = n-1
                       
                                  # subroutine call
                                  #   1. No T registers to push
                                  #   2. Argument is in $a0 
         jal     fact             #   3. Jump and link to subroutine
                                  #
                                  #   value is returned in $v0

         mul      ,  ,    # n*fact(n-1)

epilog:                           # epilog
                                  #   1. Return value is already in $v0        
         . . . . . .
         jr      $ra              #

```**The
alternate branch of the `if` statement
(at symbolic address `recurse`)
has the job of calculating `n*fact(n-1)`.**
It does this by first calculating the argument 
`n-1`.

Then it calls the subroutine `fact()` in the normal way.
It does not hurt for `fact()` to call `fact()` because
each activation has its own data on the stack.

On return from the (inner) call to `fact()`, 
register `$v0` has the returned value, and
register `$s1` has the argument `n`.
Now the return value from the current activation must be
placed in  `$v0` to be returned to the caller.

## Question

Fill in the blanks. (Hint: study the last paragraph).
