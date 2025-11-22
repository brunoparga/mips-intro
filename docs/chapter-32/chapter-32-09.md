---
sidebar_position: 9
title: "Start of the Program"
---

Start of the Program

## Answer

`x = 2.5`, a better approximation to the square root of 4.0.

Now using `x = 2.5` in the formula yields:

```
x' = (1/2)(2.5 + 4/2.5)  
   = (1/2)(2.5 + 1.6) 
   = (1/2)(4.1) 
   = 2.05

```

This is a better yet approximation, and could be fed back into the
formula to get an even better approximation.

## Content

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
## $f10 ---  accuracy limit, a small value

        .text
        .globl main

main:   

        l.s     $f0,n               # get n
        li.s    $f1,1.0             # constant 1.0
        li.s    $f2,2.0             # constant 2.0
        li.s    $f3,1.0             # x == first approx.
        li.s    $f10,1.0e-5         # accuracy limit
loop:

        . . . .                     # to be continued
        
##  Data Segment  
##
        .data
n:      .float  3.0

```


This example program implements this procedure.
It repeatedly uses the formula to calculate
increasingly accurate approximations to the square root.

**The program will stop looping
when no further improvement is possible.
We can't expect to get the answer exactly correct.**

The program uses a hard-coded value for `n`,
but could easily be improved by asking the user for it.
It should also check that the value is greater than zero.

## Question

(Memory test: ) How many decimal places of precision
can be expected with floating point?
