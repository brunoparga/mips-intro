---
sidebar_position: 19
title: "Two's Complement Integers"
---

Two's Complement Integers

## Answer

|   | reflect |   | add one |   |
| --- | --- | --- | --- | --- |
| 0100 0111 | → | 1011 1000 | → | 1011 1001 |

It is always a good idea to check your results:

```
  11111 111
   0100 0111
 + 1011 1001 
   0000 0000

```

## Content

What 
is the two's complement of zero?

```
      zero =  0000 0000
   reflect =  1111 1111
   add one =  0000 0000

```

**Using the algorithm with the representation for
zero  results in the representation for zero.**
This is good.
In mathematics, "minus zero" is the same thing as "zero".
It is good to have just one representation of zero.
Recall that with the sign-magnitude method of representing
integers there where both "plus" and "minus" zero.

What integers can be represented in 8-bit two's complement?
Two's complement   
represents both positive and negative integers.
So one way to answer this question is to start with
zero, check that it can be represented,
then check one, then check minus one, then check two,
then check minus two ...
Let's skip most of those steps and check 127<sub>10</sub>:

```
       127 =  0111 1111            check:   0111 1111
   reflect =  1000 0000                     1000 0001 
   add one =  1000 0001                     0000 0000 
                                            
      -127 =  1000 0001

```

## Question

Now try to compute the negative of 128<sub>ten</sub>.



```
       128  =  1000 0000

   reflect  =  

   add one  =  

```
