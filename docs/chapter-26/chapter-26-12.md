---
sidebar_position: 12
title: "Prompt for and Read Integer"
---

Prompt for and Read Integer

## Answer

It would be useful to have a *read integer* subroutine.

## Content

**The subroutine prompts the user for an integer and reads it in.
The integer is returned in `$v0`.**
Here is a start on the subroutine:

```mips
# pread -- prompt for and read an integer
#
# on entry:
#    $ra -- return address
#
# on exit:
#    $v0 -- the integer

pread:   
         la    $a0,prompt        # print string
         li    $v0,4             # service 4
         syscall
        
         li    $v0,5             # read int into $v0
         syscall                 # service 5
        
               # return
 
         nop                     # branch delay slot
                
         .data
prompt:
         .asciiz "Enter an integer"

```

## Question

Fill in the blanks.
