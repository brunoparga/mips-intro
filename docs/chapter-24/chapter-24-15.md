---
sidebar_position: 15
title: "Complete Program"
---

Complete Program

## Answer

See below.

## Content

Here 
is a complete program.**This is similar to what a C for loop
might compile into.**
The job of a C compiler, of course,
is to translate from C into assembly.

If you copy this to a file and run it with SPIM
make sure that pseudoinstructions are allowed and
that delayed load and delayed branches are turned off.


```mips
        .globl  main

main:   
        li    $v1,0              # zero the sum
        li    $t1,0              # init index to 0
        li    $t2,0              # init loop counter
        
for:    beq   $t2,5,endfor       # for ( i=0; i < 5 ;i++ )
        lw    $v0,array($t1)
        addu  $v1,$v1,$v0        #     sum = sum+array[i]
        addi  $t1,$t1,4          #     increment index
        addi  $t2,$t2,1          #     increment counter
        b     for
 
endfor:
        li    $v0,10             # exit
        syscall   

        .data
array:  .word  1,2,3,-5,1

```

## Question

Some languages (like Pascal) allow the first index of
an array to be any integer.
Can such a language be compiled for MIPS?
