---
sidebar_position: 12
title: "First Section"
---

First Section

## Answer

```
        .text
        .globl  main
main:  
        # input the string

        # push each character onto the stack

        # pop chars from stack back into the buffer

        # print the reversed string

        .data
str:    .space  128     # character buffer            

```

## Content

**The stack pointer is initialized
by the operating system before it passes control to the program.
(In our case, the stack pointer is initialized by SPIM.)**

The 
first section of the program
reads a line from the terminal in the usual way.
To shorten the program, there is no user prompt.

Next,  
**null is pushed onto the stack.
Later on, the stack will be popped until this null is
encountered.**


```mips
# Reverse and output a user-supplied string
#
# Settings: Load delays OFF; Branch delays OFF,
#           Trap file    ON; Pseudoinstructions ON   
#
# $t0 --- character pushed or popped
# $t1 --- index into string buffer str

        .text
        .globl  main

main:   #input the string
        li      $v0,8          # service code
        la      $a0,str        # address of buffer
        li      $a1,128        # buffer length 
        syscall       
                               # initialize the stack:        
        li      $t0,      # push a null
         
             $sp,$sp,4    # onto the stack
        
        sw      $t0,( )   # to signal its bottom
        li      $t1,0          # index of first char in str buffer

        # push each character onto the stack

        # pop chars from stack back into the buffer

        # print the reversed string

        .data
str:    .space  128            # character buffer            

```

## Question

Fill in the blanks of the program.
