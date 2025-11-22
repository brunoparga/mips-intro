---
sidebar_position: 14
title: "Complete Program"
---

Complete Program

## Answer

Not even close.

## Content

**Numerical analysis is tricky.**
You should use a square root method from a
package of mathematical subroutines if you
really need one.

But this code is good enough for a demonstration on the SPIM
simulator.
Here is the complete program.
Copy it to your editor,
save it to a file,
and play with it in SPIM.

```mips

## newton.asm -- compute sqrt(n) 

## given an approximation x to sqrt(n),
## an improved approximation is:

## x' = (1/2)(x + n/x)

## $f0  ---  n
## $f1  ---  1.0
## $f2  ---  2.0
## $f3  ---  x  : current approx.
## $f4  ---  x' : next approx.
## $f8  ---  temp

        .text
        .globl main

main:   

        l.s     $f0,n               # get n
        li.s    $f1,1.0             # constant 1.0
        li.s    $f2,2.0             # constant 2.0
        li.s    $f3,1.0             # x == first approx.
        li.s    $f10,1.0e-5         # five figure accuracy

loop:   
        mov.s   $f4,$f0             # x' = n
        div.s   $f4,$f4,$f3         # x' = n/x
        add.s   $f4,$f3,$f4         # x' = x + n/x
        div.s   $f3,$f4,$f2         # x    = (1/2)(x + n/x)

        mul.s   $f8,$f3,$f3         # x^2
        div.s   $f8,$f0,$f8         # n/x^2
        sub.s   $f8,$f8,$f1         # n/x^2 - 1.0
        abs.s   $f8,$f8             # |n/x^2 - 1.0|
        c.lt.s  $f8,$f10            # |x^2 - n| < small ?
        bc1t    done                # yes: done
  
        j       loop                # next approximation
        
done:
        mov.s   $f12,$f3            # print the result
        li      $v0,2
        syscall
                
        li      $v0,10              # return to OS
        syscall

##
##  Data Segment  
##
        .data
n:      .float  3.0

```

## Question

What result do you expect if this program calculated the
square root of 4.000000e+6 ?
