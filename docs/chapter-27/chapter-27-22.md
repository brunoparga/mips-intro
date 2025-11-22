---
sidebar_position: 22
title: "Complete Program"
---

Complete Program

## Answer

Yes.

## Content

Here is the complete program
that asks the user for two integers, `x` and `y`,
and then prints out the maximum of `x*x`, `x*y`, or `5*y`.
Copy the program to one big file to run it with SPIM.

Or, with QtSPIM, main and each subroutine can be placed in a separate file and separately loaded.
Use the "File" menu. 
Use the "Reinitialize and Load File" menu choice to load the driver, then 
use "Load File" to load the subroutines.

Also with QtSPIM, `jr $ra` can't be used to return to the system.
To run the program using QtSPIM, remove the parts from `main` dealing with the stack
(with ## marking comments).

```mips
## Driver --  main program for the application

         .text
         .globl main
 
main:
         sub     $sp,$sp,4        ## push the return address
         sw      $ra,($sp)        ##
         sub     $sp,$sp,4        ## push $s0
         sw      $s0,($sp)        ##
         
         la      $a0,xprompt      # prompt the user
         li      $v0,4            # service 4
         syscall
         li      $v0,5            # service 5 -- read int
         syscall                  # $v0 = integer
         move    $s0,$v0          # save x
         
         la      $a0,yprompt      # prompt the user
         li      $v0,4            # service 4
         syscall
         li      $v0,5            # service 5 -- read int
         syscall                  # $v0 = integer
         
                                  # prepare arguments
         move    $a0,$s0          # x         
         move    $a1,$v0          # y
         jal     maxExp           # maximum expression
         nop                      # returned in $v0
         move    $s0,$v0          # keep it safe

         la      $a0,rprompt      # output title
         li      $v0,4            # service 4
         syscall

         move    $a0,$s0          # get maximum
         li      $v0,1            # print it out
         syscall
                                                      
         lw      $ra,($sp)        ## pop $s0
         add     $s0,$sp,4        ##
         lw      $ra,($sp)        ## pop return address
         add     $sp,$sp,4        ## 
                                  ##
         jr      $ra              ## return to OS 
         nop
         
         .data
xprompt: .asciiz  "Enter a value for x --> "
yprompt: .asciiz  "Enter a value for y --> "
rprompt: .asciiz  "The maximum expression is: "

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
endif:                           # endif 
         # epilog
         jr     $ra              # return to caller
         nop
          
## maxExp -- compute the maximum of three expressions
##
## Input:
## $a0 -- a signed integer, x
## $a1 -- a signed integer, y
##           
## Returns: 
## $v0 -- the maximum of x*x,  x*y, or 5*y
##
## Registers:
## $s0 --  x*x
## $s1 --  x*y
## $s2 --  5*y

         .text
         .globl maxExp

maxExp:
         # prolog
         sub     $sp,$sp,4        # push the return address
         sw      $ra,($sp)
         sub     $sp,$sp,4        # push $s0
         sw      $s0,($sp)
         sub     $sp,$sp,4        # push $s1
         sw      $s1,($sp)
         sub     $sp,$sp,4        # push $s2
         sw      $s2,($sp)

         # body
         mul     $s0,$a0,$a0      # x*x
         mul     $s1,$a0,$a1      # x*y
         li      $t0,5
         mul     $s2,$t0,$a1      # 5*y
         
         move    $a0,$s0          # compute max of x*x
         move    $a1,$s1          # and x*y
         jal     maxInt           # current max in $v0
         nop

         move    $a0,$v0          # compute max of
         move    $a1,$s2          # current max, and 5*y 
         jal     maxInt           # total max will be in $v0
         nop
         
         # epilog
         lw      $s2,($sp)        # pop $s2 
         add     $sp,$sp,4                                    
         lw      $s1,($sp)        # pop $s1 
         add     $sp,$sp,4                                    
         lw      $s0,($sp)        # pop $s0 
         add     $sp,$sp,4                                    
         lw      $ra,($sp)        # pop return address
         add     $sp,$sp,4         
         jr      $ra              # return to caller 
         nop         

```

Run the program using SPIM settings: Bare machine (off), Allow pseudo instructions (on), load
exception file (on), delayed branches (on) delayed load (on), mapped I/O (off).
Run the program after loading it with Simulator/Go.

## Question

Would you like to skip to the end of the chapter?
