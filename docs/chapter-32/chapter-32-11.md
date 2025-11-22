---
sidebar_position: 11
title: "Ending the Loop"
---

Ending the Loop

## Answer

See below.

## Content

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
        mov.s   $f4,$f0             #  x' = n
        div.s   $f4,$f4,$f3         #  x' = n/x
        add.s   $f4,$f3,$f4         #  x' = x + n/x
        div.s   $f3,$f4,$f2         #  x = (1/2)(x + n/x)

        # test if loop should end


```

After calculating a new approximation check  if
the loop should end.
This is more work than the actual calculation.

**We can't test if we have the *exact* answer,
because that may never happen.**
Instead   test if the current `x` is
close to the square root of  `n`

## Question

Say that  `x`  is very close to  `n0.5`.
What do you think will be the value of `n/(x*x)`?
