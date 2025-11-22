---
sidebar_position: 24
title: "Entry Point"
---

Entry Point

## Answer

`fact`

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
         sub     $sp,$sp,4        #   1. Push return address
         sw      $ra,($sp)
         sub     $sp,$sp,4        #   2. Push caller's frame pointer
         sw      $fp,($sp)
         sub     $sp,$sp,4        #   3. Push register $s1
         sw      $s1,($sp)
         sub     $fp,$sp,0        #   4. $fp = $sp - space_for_variables (==0)
         move    $sp,$fp          #   5. $sp = $fp
         
                                  # body of subroutine
        . . . . . .
                            
epilog:                           # epilog
                                  #   1. Return value is already in $v0        
         add     $sp,$fp,0        #   2. $sp = $fp + space_for_variables (==0)
         lw      $s1,($sp)        #   3. Pop register $s1
         add     $sp,$sp,4        #          
         lw      $fp,($sp)        #   4. Pop $fp
         add     $sp,$sp,4        #           
         lw      $ra,($sp)        #   5. Pop $ra
         add     $sp,$sp,4        #            
         jr      $ra              #   6. return to caller 

```

On
to the subroutine.
**The first address in this subroutine is called `fact`.**
Of course, `fact` will correspond to a main storage address
at run-time.
That address is determined by the assembler,
the linker, and the loader.

he
symbol `fact` is a global symbol
(also called an external symbol) so that
the assembler, linker, and loader can use that symbol
to refer to the same place in memory.

**A location such as `fact` that is a target of
a subroutine call is called an **entry point**.**
Sometimes a subroutine has several entry points,
one for each of several related functions.

## Question

(Thought Question:)  Does a global symbol *always* correspond
to an entry point?
