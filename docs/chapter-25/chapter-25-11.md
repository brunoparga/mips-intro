---
sidebar_position: 11
title: "Outline"
---

Outline

## Answer

`lbu $t0,string`

It loads one byte (located at symbolic address `string`) into
the low order byte of register `$t0`.
The other bytes of `$t0` are filled with zero.

## Content

Here is the outline of the program.
The comments show the major sections of the program.

**In designing a program,
you should always decide on
the major steps and on
the order they should be performed.**
It is helpful to document this
in the program.


```
        .text
        .globl  main
main:  
        # 

        # 

        # 

        # 

        .data
str:    .space  128     # character buffer            

```

Not much of an outline. 
Luckily, here are some phrases you can
use to fill in the blanks:

- print the reversed string
- push each character onto the stack
- input the string into a buffer
- pop chars from stack back into the buffer

## Question

Fill the blanks with the correct phrases. 
(You can do this by using your mouse with copy and paste from the Edit menu of the browser.)
