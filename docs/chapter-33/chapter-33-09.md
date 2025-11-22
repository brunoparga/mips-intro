---
sidebar_position: 9
title: "Example Program with Struct"
---

Example Program with Struct

## Answer

```mips
lw $t0,4($s1)    # load the pay

```

## Content

Here
is a program that allocates memory for a
struct, then puts data in each field.
It then makes a copy of the struct by
allocating another block of memory and
copying corresponding fields from the first struct
to the second struct.

```mips
# StructCopy.asm
#
        .text
        .globl  main

main:    
        # create the first struct 
        li      $v0,9             # allocate memory
        li      $a0,12            # 12 bytes
        syscall                   # $v0 <-- address
        move    $s1,$v0           # $s1 first struct
 
        # initialize the first struct       
        li      $t0,34            # store 34
        sw      $t0,0($s1)        # in age
        lw      $t0,pay           # store 24000
        sw      $t0,4($s1)        # in pay
        li      $t0,12            # store 12
        sw      $t0,8($s1)        # in class

        # create the second struct 
        li      $v0,9             # allocate memory
        li      $a0,12            # 12 bytes
        syscall                   # $v0 <-- address
        move    $s2,$v0           # $s2 second struct
           
        # copy data from first struct to second     
        lw      $t0,0($s1)        # copy age from first
        sw      $t0,0($s2)        # to second struct
        
        lw      $t0,($s1)     # copy pay from first
        
        sw      $t0,($s2)     # to second struct
        
        lw      $t0,($s1)     # copy class from first
        
        sw      $t0,($s2)     # to second struct

        li      $v0,10            # return to OS
        syscall       

        .data
pay:    .word   24000             # rate of pay, in static memory

```

## Question

Fill in the blanks to compete the program.
