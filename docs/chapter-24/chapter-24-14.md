---
sidebar_position: 14
title: "Integer Array"
---

Integer Array

## Answer

By four.

## Content

Here 
is nearly the same program as before,
except that now the program adds up the
integers in an array of full words (32 bits).

Because each cell of the array is 4 bytes,
**the array index register is increased by 4 in each iteration** of the loop.
The logic is the same as before.


```mips
        .globl  main

main:   
        li    $v1,0               # zero the sum
        li    $t1,          # init index to ???
        
        li    $t2,0               # init loop counter
for:    beq   $t2,5,endfor        # for ( i=0; i < 5 ;i++ )

           $v0,array($t1)
        
        addu  $v1,$v1,$v0         #     sum = sum+array[i]
        
        addi  $t1,$t1,       #     increment index
        
        addi  $t2,$t2,       #     increment counter
        b     for
 
endfor:
        li    $v0,10              # exit
        syscall   

        .data
array:  .word  1,2,3,-5,1

```

## Question

Just fill in the blanks and you have a working program!
