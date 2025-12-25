---
sidebar_position: 20
title: "Range of Integers with 2's Complement"
---

Range of Integers with 2's Complement

## Answer

```
       128  =  1000 0000

   reflect  =  0111 1111

   add one  =  1000 0000   ??????

```

## Content

It looks like +128 and - 128 are represented by the same pattern.
This is not good.
A  non-zero integer and its negative can't both be represented by the
same pattern.
So +128 can not be represented in eight bits.
**The maximum positive integer that can be represented in
eight bits is 127<sub>10</sub>.**

What number is represented by 1000 0000?
Add the representation of 127<sub>10</sub> to it:

```

   1000 0000    = ?
   0111 1111    = 12710
   1111 1111    =  -110

```

A good choice for ? is -128<sub>10</sub>. 
**Therefore 1000 0000 represents -128<sub>10</sub>.**
Eight bits can be used to represent the numbers 
 -128<sub>10</sub> ... 0 ... +127<sub>10</sub>.


| Range of  N Bit 2's Complement |
| --- |
| -( 2(N-1) )  ... 0 ... 2(N-1) - 1 |

For example, the range of integers that can be represented in eight bits using
two's complement is:

```
-( 2(8-1) ) = -128  ... 0 ... 2(8-1) - 1 = 127

```

**Notice that one more negative integer can be represented than positive integers.**

## Question

How many integers are there in the range 
  -128 ... 0 ... +127  ?

How bit patterns can be formed with 8 bits?
