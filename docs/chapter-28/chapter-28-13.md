---
sidebar_position: 13
title: "Subroutine Epilog"
---

Subroutine Epilog

## Answer

See Below

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
         sw      $ra,($sp)

         sub     $sp,$sp,4        #   3. Push register $s1
         sw      $s1,($sp)

         sub     $fp,$sp,8        #   4. $fp = $sp - space_for_variables

         move    $sp,$fp          #   5. $sp = $fp
         
                                  # body of subroutine     
         mul     $s1,$a0,2        #     arg*2
         sw      $s1,0($fp)       # b = "   "
         
         lw      $t0,0($fp)       # get b
         add     $t0,$t0,7        #      b+7
         sw      $t0,4($fp)       # c = "  "
         
                                  # epilog
                                  
         lw      $v0,()  #   1. Put return value in $v0
         
         
         add     $sp,$fp,      #   2. $sp = $fp +space_for_variables
         
         
         lw      $s1,()        #   3. Pop register $s1
         
         add     ,,         
         
        
         lw      $fp,()       #   4. Pop $fp
         
         
         add     ,,      
         
         lw      $ra,()       #   5. Pop $ra
         
         add     ,,        
         
          
         jr      $ra               #   6. return to caller 

```

The
epilog of a subroutine
prepares the values that are returned to the caller.
It then restores the registers and stack to how they
were when the subroutine first got control.
Finally it returns to the caller.

## Question

Those blanks are made for filling.
