---
sidebar_position: 7
title: "Example Program"
---

Example Program

## Answer

Yes.

## Content

Let
us write a program that reads integers
from the user and adds up those integers x
that are in the range `-32 <= x <= +32`
and discards the rest.
The user signals the end by entering -999
(which is not added to the sum).

Here is the basic outline:

(For this chapter, load delays and branch delays
have been turned off in the simulator.)


```mips
main:   
        li    $v1,0            # zero the sum
loop:
        . . . .                # prompt the user for input
        li    $v0,5            # read the integer
        syscall                # into $v0

          $v0, ,done    # while ( $v0 != -999 )

         $v0, ,out          # less than -32
        
         $v0, ,out          # greater than 32
               
        addu  $v1,$v1,$v0          # if in range add           
                                   # else skip
out:    b     loop        
        
done:   . . . .                # write out result

```

## Question

Fill in the blanks. Look at the table three pages back.

Copy and paste from these possibilities:

```
bne     beq     bgt      blt

```
