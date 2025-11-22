---
sidebar_position: 11
title: "Prolog for  mysub()"
---

Prolog for mysub()

## Answer

.text
         .globl  main
main:
                                  # prolog        
         sub     $sp,$sp,4        #   1. Push return address
         sw      $ra,($sp)
         sub     $sp,$sp,4        #   2. Push caller's frame pointer
         sw      $fp,($sp)

                                  #   3. No S registers to push

         addiu   $fp,$sp,4        #   4. $fp = $sp + space_for_variables

         move    $sp,$fp          #   5. $sp = $fp

                                  # subroutine call
                                  #   1. No T registers to push
         li      $a0,6            #   2. Put argument into $a0
         jal     mysub            #   3. Jump and link to subroutine
         
                                  # return from subroutine   
         
         . . . .     
         
                                  # epilog
                                  # return to OS 


```

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
         .globl   
 :
                                  # prolog        
         sub     $sp,$sp,4        #   1. Push return address
         sw      $ra,($sp)
         sub     $sp,$sp,4        #   2. Push caller's frame pointer
         sw      $fp,($sp)

              , ,       #   3. Push register $s1
         
              , 

         sub    $fp,$sp,    #   4. $fp = $sp - space_for_variables

         move   $sp,$fp           #   5. $sp = $fp
         
         . . . .     

         jr      $ra              # return to caller 

```Of
course, `mysub` starts with a subroutine prolog.
There are two variables, so space is assigned to them on the stack.

The subroutine could be written without using `$s1`.
But here is used to show how linkage works.

## Question

Play compiler:

Fill in those blanks.
