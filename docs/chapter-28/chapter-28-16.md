---
sidebar_position: 16
title: "Complete   main()"
---

Complete  main()

## Answer

See below.

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
         
                                  # return from subroutine 
                                  #   1. No T registers to restore
                                  
         sw     $v0,0($fp)        # a = mysub( 6 )
        
                                  # print a
         lw     $a0,0($fp)        # load a into $a0
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
         li      $v0,10           # return to OS 
         syscall

```

**Here
is the complete  `main()` routine.**
Nearly all of the code is concerned with subroutine linkage.
This is typical.

If you wish to run the program, copy and paste `main()`
and `mysub()` into one file.

For qtSPIM, you can put `main()`
and `mysub()` into separate files and load them from the File menu.

Also for qtSPIM it works best to return to the system with service 10 of the exception handler.

## Question

Rewrite the following code so that it
does the same thing as the original but
without using a variable.

```
 main()
 {
   int a;   
   a = mysub( 6 );
   print( a );
 }

```
