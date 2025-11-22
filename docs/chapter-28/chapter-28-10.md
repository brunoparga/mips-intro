---
sidebar_position: 10
title: "Subroutine Call"
---

Subroutine Call

## Answer

See below.

## Content

```mips
#  main()
#  {
#    int a;
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
                                  
         li      $a0,     #   2. Put argument into $a0
         
         jal           #   3. Jump and link to subroutine
         
         
                                  # return from subroutine   
         
         . . . .     
         
                                  # epilog
                                  # return to OS 


```At
this point we have "compiled" into assembly language
the first three lines of the "C" program.

Next, the program calls the subroutine
`mysub()`.
This is shown, in outline form,
in the code.

## Question

Fill in the blanks.
