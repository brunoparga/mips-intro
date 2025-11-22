---
sidebar_position: 13
title: "Code for Ending Test"
---

Code for Ending Test

## Answer

Yes.

## Content

Here is the code for ending the loop
when `| n/(x*x) - 1 | < 0.00001`.

```mips
## $f0  ---  n
## $f1  ---  1.0
## $f2  ---  2.0
## $f3  ---  x  : current approx.
## $f4  ---  x' : next approx.
## $f8  ---  temp
## $f10 ---  small value

 
        # calculate next x
loop:        
        . . . .
              
        # test if loop should end
        
        mul.s   $f8,$f3,$f3         # x*x
        div.s   $f8,$f0,$f8         # n/(x*x)
        sub.s   $f8,$f8,$f1         # n/(x*x) - 1.0
        abs.s   $f8,$f8             # |n/(x*x) - 1.0|
        c.lt.s  $f8,$f10            # |n/(x*x) - 1.0| < small ?
        bc1t    done                # yes: done
  
        j       loop
        
done:

```

## Question

Is this program commercial quality code?
