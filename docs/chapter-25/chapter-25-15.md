---
sidebar_position: 15
title: "Final Phase"
---

Final Phase

## Answer

See below.

## Content

**The
last phase of the program prints out the result string.**
There is nothing new here.
If you want to see the complete program,
copy and paste the several above sections into a text file.


```mips
        . . . . .
        
        # pop chars from stack back into the buffer
stend:  li      $t1,0          # index of first byte of str buffer 
popl:
        lw      $t0,($sp)      # pop a char off the stack
        addu    $sp,$sp,4
        beqz    $t0,done       # null means empty stack
        
        sb      $t0,str($t1)   # store at string[$t1]
        addu    $t1,1          # inc the index
        j       popl           # loop

        # print the reversed string
done:   li      $v0,4          # service code          
        la      $a1,str        # address of string
        syscall
        li      $v0,10         # exit
        syscall   
              
        .data
str:    .space  128            # character buffer 

```

## Question

Would it be easier to do this program with arrays?
