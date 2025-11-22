---
sidebar_position: 26
title: "Subroutine   doLines"
---

Subroutine  doLines

## Answer

Yes, because `main` calls a subroutine.
The completed code for `main` is below.

```mips
         .text
         .globl  main
main:
         sub     $sp,$sp,4        ## push the return address
         sw      $ra,($sp)        ##
         
         la      $a0,mainPr       # prompt the user
         li      $v0,4            # service 4
         syscall

         jal     doLines          # process lines of input
         
         lw      $ra,($sp)        ## pop return address
         add     $sp,$sp,4        ##
         
         jr      $ra              ## return to OS 

         .data
mainPr:  .ascii  "Type each line of text followed by ENTER.\n"
         .asciiz "Type Q at the start of a line to finish.\n"

```

(As before, to run on QtSPIM remove the lines with ## and use exception handler service 10 to return to the system.)

## Content

The
`main` routine calls `doLines`.
The flowchart shows the design for that routine.
Below is its (incomplete) code.

```mips
# doLines -- read in and process each line of user input
#
# on entry:
#    $a0 -- address of the prompt text
#    $ra -- return address
#
# on exit:
#    no return values


         .text
         .globl  doLines
doLines:   
         sub     $sp,$sp,4        # push the return address
         sw      $ra,($sp)
 
loop:                             # get a line

         la      $a0,    # argument: address of buffer
         
         li      $a1,    # argument: length of buffer
         
         jal             # get line from user
         
         la      $a0,line         # if "Q"
         jal     testEnd          # return to caller
         beqz    $v0,endloop          

                                  # convert to capitals
                                  
         la      $a0,    # argument: address of buffer
         
         li      $a1,    # argument: length of buffer
         
         jal             # convert
         
         
         la      $a0,outline      # print out the result
         li      $v0,4
         syscall
         
         b       loop             # continue with next line
         
endloop:          
         lw      $ra,($sp)        # pop return address
         add     $sp,$sp,4         
         jr      $ra              # return to caller 

         .data
outline: .ascii  ":"              # pad so output lines 
                                  # line up with input
line:    .space  132              # input buffer

```

## Question

No time like the present to fill in those blanks.
