---
sidebar_position: 8
title: "Blanks Filled"
---

Blanks Filled

## Answer

See below.

## Content

The
outline is completed below.
I/O is left out.
Detecting the end of input
by testing for a sentinel value,
as we do here,
is usually regarded as poor style.
It is used here to simplify the example.

Notice how the while-loop is implemented.
**In assembly language you have to build control structures
like `if` and `while` out of branches.**
It is sometimes tricky to get the logic correct.


```mips
main:   
        li    $v1,0            # zero the sum
loop:
        . . . .                # prompt the user for input
        li    $v0,5            # read the integer
        syscall                # into $v0

        beq   $v0,-999,done    # while ( $v0 != -999 )
        blt   $v0,-32,out         # less than -32
        bgt   $v0,32,out          # greather than 32

        addu  $v1,$v1,$v0         # if in range add           
                                  # else skip
out:    b     loop        

done:   . . . .                # write out result

```

## Question

(Memory Test: ) What do **set** instructions do on MIPS?
