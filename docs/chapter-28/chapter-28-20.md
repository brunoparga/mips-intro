---
sidebar_position: 20
title: "Guts of   main()"
---

Guts of  main()

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
         sub     $fp,$sp,8        #   4. $fp = $sp - space_for_variables
         move    $sp,$fp          #   5. $sp = $fp

```

## Content

The next part of  `main()` is straightforward.
The SPIM services four and five for writing a string and
reading an integer are used.
The integer is returned in `$v0`.
It is saved in the variable `a` (on the stack).

```mips
                                  # write("enter an int:")
         li     $v0,4             #   print string service
         la     $a0,prompt1       #   address of prompt
         syscall
                                  # read( a )
         li     $v0,5             #   read integer service
         syscall                  #   $v0 gets the integer
         sw     $v0,0($fp)        #   save in variable a

```

ext
the code implements `b = fact( a )`.
This is done by following the protocol for a subroutine call,
then storing the returned value into the variable `b`:

```mips
                       
                                  # subroutine call: b = fact( a )
                                  #   1. No T registers to push
                                  
         lw      $a0,($fp)   #   2. Put argument into $a0
         
         
         jal                 #   3. Jump and link to subroutine
         
         
                                  # return from subroutine 
                                  #   1. No T registers to restore
                                  
         sw     $v0, ($fp)    # b = fact( a )

```

## Question

Fill in the blanks.
