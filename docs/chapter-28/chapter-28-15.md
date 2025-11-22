---
sidebar_position: 15
title: "Back to   main()"
---

Back to  main()

## Answer

The caller must restore any `T` registers it saved.

## Content

```mips
#  main()
#  {
#    int a;                      // a: 0($fp)
#    a = mysub( 6 );
#    print( a );
#  }
         .text
         .globl  main
main:
                                  # prolog        
         sub     $sp,$sp,4        #   1. Push return address
         sw      $ra,($sp)
         sub     $sp,$sp,4        #   2. Push caller's frame pointer
         sw      $fp,($sp)
                                  #   3. No S registers to push
         sub     $fp,$sp,4        #   4. $fp = $sp - space_for_variables
         move    $sp,$fp          #   5. $sp = $fp

                                  # subroutine call
                                  #   1. No T registers to push
         li      $a0,6            #   2. Put argument into $a0
         jal     mysub            #   3. Jump and link to subroutine

                                  # regaining control from  the subroutine 
                                  #   Return value is in $v0
                                  #   1. No T registers to restore
                                  
         sw     $v0,()       # a = mysub( 6 )
        
                                         # print a
                                  
         lw     $a0,()       # load a into $a0
         
         
         li     $v0,1             # print integer service
         syscall
                                   
                                  # epilog
                                  #   1. No return value         
         add     $sp,$fp,4        #   2. $sp = $fp + space_for_variables       
                                  #   3. No S registers to pop      
         lw      $fp,($sp)        #   4. Pop $fp
         add     $sp,$sp,4        #           
         lw      $ra,($sp)        #   5. Pop $ra
         add     $sp,$sp,4        #                                    
         jr      $ra              # return to OS 

```
In
this example, `main()`
did not save any `T` registers.
It does not need to restore them.

**The value the subroutine returned is in
`$v0`.
This value is assigned to variable `a` .**

Look down to the section where `main`
regains control.
Fill in the blanks that follow so that the
value returned by the subroutine
(contained in `$v0`) is copied
to the variable `a` on the stack.

The next few statements
load `$a0` with the value
of `a` from the stack,
and then print that value by using
a SPIM service.
This could have been done
without the stack.
The return value could have been copied directly into `$a0`.
But this example shows the type of
code that a non-optimizing compiler
might produce.

## Question

Fill in the blanks.
