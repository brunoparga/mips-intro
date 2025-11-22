---
sidebar_position: 14
title: "Popping Characters"
---

Popping Characters

## Answer

See below.

## Content

**When
the null byte of the null-terminated input string
is encountered, the first loop exits and the next loop begins.**

This next loop pops characters (contained in full words) off
of the stack until the null at the bottom of the stack is encountered.
Each character popped off the stack is placed into the string buffer,
overwriting the character originally there.

The null at the end of the input string is not overwritten.
It will remain there as part of the null-terminated result string.


```mips
        . . . . .
        # push each character onto the stack
pushl:
        lbu     $t0,str($t1)   # get current char into
                               # a full word
        beqz    $t0,stend      # null byte: end of string
        
        subu    $sp,$sp,4      # push the full word
        sw      $t0,($sp)      # holding the char
        
        addu    $t1,1          # inc the index
        j       pushl          # loop
        
        # pop chars from stack back into the buffer
stend:  li      $t1,0          # index of first byte of str buffer 
popl:
             $t0,($sp)    # pop a char off the stack
        
             $sp,$sp,4
        beqz    $t0,done       # null means empty stack
        
             $t0,str($t1) # store at string[$t1]
        addu    $t1,1          # inc the index
        j       popl           # loop

        # print the reversed string
        . . . . . 
              
        .data
str:    .space  128            # character buffer 

```

## Question

You know the drill: fill in those blanks.
