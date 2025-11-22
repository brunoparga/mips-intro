---
sidebar_position: 19
title: "Prolog of   main()"
---

Prolog of  main()

## Answer

A downward arc corresponds to a push of one stack frame.
An upward arc corresponds to a pop of one stack frame.

## Content

Here
is the main routine's pseudocode and prolog.
Notice that there are two variables.

```mips
#  main()
#  {
#    int a, b;                      // a: 0($fp),  b: 4($fp)
#    write("enter an int:")
#    read( a );
#    b = fact( a );
#    write("factorial is:")
#    print( b );
#  }
         .text
         .globl  main
main:
                                  # prolog        
         sub     $sp,$sp,4        #   1. Push return address
         
         sw      ,($sp)
         
         sub     $sp,$sp,4        #   2. Push caller's frame pointer
         
         sw      ,($sp)
         
                                  #   3. No S registers to push
                                  
         sub     $fp,$sp,    #   4. $fp = $sp - space_for_variables
         
         move    $sp,$fp          #   5. $sp = $fp

```

## Question

Fill in the blanks.
