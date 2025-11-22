---
sidebar_position: 11
title: "A Fine Example"
---

A Fine Example

## Answer

Yes.

## Content

```mips
# overdue.asm

        .text
        .globl  main

main:   
        # get patron name
        li      $v0,4           # print prompt
        la      $a0,prompt      #
        syscall
        li      $v0,8           # code 8 == read string
        la      $a0,name        # $a0 == address of buffer
        li      $a1,24          # $a1 == buffer length
        syscall                 # Invoke the operating system.

        # print the letter
        li      $v0,4           # print greeting
        la      $a0,letter      #
        syscall
        li      $v0,4           # print body
        la      $a0,body        #
        syscall

        li      $v0,10      # exit
        syscall

        .data
prompt: .asciiz "enter name, followed by comma-enter: "
letter: .ascii  "\n\nDear "
name:   .space  24

body:   .ascii  "\nYour library books are way\n"
        .ascii  "overdue.  Please return them\n"
        .ascii  "before we give your name\n"
        .asciiz "to the enforcement squad.\n\n"

```


Sometimes 
you will have to remove the null at the end of the
input string, perhaps because it is intended to be part of a
larger string.
Other times, as in the following example, you can use two
*print string* operations.

**The example program asks the user to enter a person's name followed by
comma and "enter".
Then the program writes out a personalized letter using the name.**
The body of the letter is printed using only one 
`syscall`.
The personalized greeting is printed first in a separate
`syscall`
because it is null terminated.

It is somewhat crude to make the user enter a comma at
the end of the name.
It would be nicer to have the program detect the
end of the name and automatically put a comma after it.
The program would be much longer.

## Question

Can blank spaces be part of the name that the user enters?
