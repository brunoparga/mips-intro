---
sidebar_position: 21
title: "More   main()"
---

More  main()

## Answer

```mips
                       
                                  # subroutine call: b = fact( a )
                                  #   1. No T registers to push
         lw      $a0,0($fp)       #   2. Put argument into $a0
         jal     fact             #   3. Jump and link to subroutine
         
                                  # return from subroutine 
                                  #   1. No T registers to restore
                                  
         sw     $v0,4($fp)        # b = fact( a )

```

## Content

Next
`main()` does some  routine things:

```mips
                       
                                  # print( b )
         lw     $a0,4($fp)        # load b into $a0
         li     $v0,1             # print integer service
         syscall                                  
                                  # end the print line
         li     $v0,4             #   print string service
         la     $a0,lf            #   address of line feed
         syscall

```

Finally,  `main()` ends with a subroutine epilog.

```mips
                       
                                  # epilog
                                  #   1. No return value         
         add     $sp,$fp,8        #   2. $sp = $fp + space_for_variables       
                                  #   3. No S registers to pop      
         lw      $fp,($sp)        #   4. Pop $fp
         add     $sp,$sp,4        #           
         lw      $ra,($sp)        #   5. Pop $ra
         add     $sp,$sp,4        #                                    
         jr      $ra              # return to OS 

```

The data for the prompts is not stored on the stack.

```mips
                       
         .data
prompt1: .asciiz "enter an int:"
prompt2: .asciiz "factorial is:"
lf:      .asciiz "\n"

```

## Question

How do the variables `a` and `b` differ
from the data `prompt1` and `prompt2`?
