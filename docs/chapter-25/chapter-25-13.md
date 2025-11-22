---
sidebar_position: 13
title: "Pushing Characters"
---

Pushing Characters

## Answer

See below.

## Content

**In
the next stage, characters from the character
buffer are pushed one by one onto the stack.**
The first instruction (at `pushl:`)
uses indexed addressing to load the current character
from the buffer (`str:`) into the least
significant byte of `$t0`.

**Next, the current character is tested. 
If it is null (zero) then control branches out of the loop.**
Otherwise the character is pushed onto the stack.
Then the process is repeated.


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
        
        li      $t0,0          # push a null 
        subu    $sp,$sp,4      # onto the stack
        sw      $t0,($sp)      # to signal its bottom
        li      $t1,0          # index of first char in str buffer
        
        # push each character onto the stack
pushl:
        lbu     $t0,str($t1)   # get current char into
                               # a full word
             $t0,stend    # null byte: end of string
        
        subu    $sp,$sp,4      # push the full word
              $t0,($sp)   # holding the char
        
        addu    $t1,1          # inc the index
        j                 # loop

stend:           
        . . . . .

        # pop chars from stack back into the buffer

        # print the reversed string
        
        .data
str:    .space  128            # character buffer 

```

## Question

Fill in the blanks.
