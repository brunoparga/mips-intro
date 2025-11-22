---
sidebar_position: 20
title: "Converting Base 3 to base 7"
---

Converting Base 3 to base 7

## Answer

See Below.

## Content

Since
 the base is 3, the algorithm calls for repeatedly
dividing by 3 until the number is reduced to zero.

100ten =

```
100 div 3 = 33 r 1; 
 33 div 3 = 11 r 0;  
 11 div 3 =  3 r 2;
  3 div 3 =  1 r 0;  
  1 div 3 =  0 r 1

```

So 100ten = 102013.

Checking the answer:

```
102013 = 1 × 34 + 0 × 33 + 2 × 32  + 0 × 31 + 1 × 30

       = 1 × 81 + 0 × 27 + 2 × 9 + 0 × 3 + 1
       
       = 81 + 18 + 1 = 100

```

To convert from a representation in base three to a representation in base seven,
use base ten as an intermediate:
convert from base three into base ten, then from base ten to base seven.

## Question

What is the base 7 representation of 102013   ?
