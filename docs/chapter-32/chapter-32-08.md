---
sidebar_position: 8
title: "Newton's Method"
---

Newton's Method

## Answer

No, not usually.  With the inherent inaccuracy of floating point
this risks creating a non-terminating loop.
This next example shows a while loop.

## Content

****Newton's method**
is a way to compute the square root of
a number.**
Say that `n` is the number and that `x`
is an approximation to the square root of `n`.
Then:

```
x' =(1/2)(x + n/x)

```

`x'` is an even better approximation to the square root.
The reasons for this are buried in your calculus book.

Here is what happens if
the approximation `x` happens to be exactly the
square root.
In other words, what if `x = n0.5`.
Then:

```
x' = (1/2)(x + n/x) 
   = (1/2)( n0.5 + n/n0.5 )
   = (1/2)(n0.5 + n0.5) 
   = n0.5

```

**If `x` reaches the exact value, it stays fixed at that
value.**

## Question

**Try it:** 
Say that  `n == 4` and that our first
approximation to the square root is `x == 1`.
Use the formula to get the next approximation:

```
x' =(1/2)(1 + 4/1)

```
