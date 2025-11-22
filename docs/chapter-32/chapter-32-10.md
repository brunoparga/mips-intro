---
sidebar_position: 10
title: "Apply the Formula"
---

Apply the Formula

## Answer

Seven or eight.  To be safe, count on no better than
six digits of accuracy.
This program uses five place accuracy.

## Content

The value in `f10` is used to test if the
five digits of accuracy have been reached.
We will do this in a moment.
Here is the part of the program that uses the formula:

```mips
## x' = (1/2)(x + n/x)

## $f0  ---  n
## $f1  ---  1.0
## $f2  ---  2.0
## $f3  ---  x  : current approx.
## $f4  ---  x' : next approx.
## $f8  ---  temp
## $f10 ---  small value

loop:
        .s   $f4,$f0             #  x' = n
        
        .s   $f4,$f4,$f3         #  x' = n/x
        
        .s   $f4,$f3,$f4         #  x' = x + n/x
        
        .s   $f3,$f4,$f2         #  x = (1/2)(x + n/x)


```

## Question

But part of each mnemonic is missing!
Fill them in.
You may wish to look at the list of floating point
[instructions.](../chapter-31/chapter-31-13)
