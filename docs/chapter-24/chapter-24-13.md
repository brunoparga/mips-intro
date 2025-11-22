---
sidebar_position: 13
title: "Indexes start at Zero"
---

Indexes start at Zero

## Answer

Index zero

## Content

Experience 
has shown that indexing
arrays starting at zero works best.
The first element of an array is
at a displacement of zero from the beginning
of the array.

**To move through an array
start the index at
zero and increment it by the element size
to move to the next element.**

Here is a program fragment that adds up all
the bytes in the array:

(Recall that branch delays and load delays have been turned off, for this chapter.
To run this program on real hardware, several no-op instructions are needed.)


```mips
        li    $v1,0              # zero the sum
        li    $t1,0              # init index to 0
        li    $t2,0              # init loop counter
        
for:    beq   $t2,5,endfor       # for ( i=0; i < 5 ;i++ )
        lb    $v0,data($t1)
        addu  $v1,$v1,$v0        #     sum = sum+data[i]
        addi  $t1,$t1,1          #     increment index
        addi  $t2,$t2,1          #     increment counter
        b     for

endfor: 
        . . . 
      
data: .byte  6,34,12,-32, 90   

```

## Question

When indexed addressing is used with an array of 32-bit integers,
by how much should the index be incremented to move to the
next array element?
