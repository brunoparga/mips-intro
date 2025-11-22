---
sidebar_position: 17
title: "Hidden Infinite Loop"
---

Hidden Infinite Loop

## Answer

Over and over.

## Content

```
float x;

for ( x = 0.0; x != 10.0; x += 0.1 )
{
  System.out.println("Crimson and Clover");
}

```

If
we were using base 10 arithmetic, 0.1 would be added to `x` 
100 times until `x` reached exactly 10.0.
But the program uses base-two floating point
which does not represent 0.1 exactly.
The variable   `x`  might not hit  10.0 exactly and the
program would then loop indefinitely.

**It is not just binary fixed point representation that cannot
represent one tenth precisely.  
The usual floating point of programming languages has the same problem.**

Smart compilers look out for this problem,
  and may fix it,
  so this loop might actually work as intended.
  But is not wise to use it.

## Question

Fix the code.

```
float x;

for ( x = 0.0; x != 10.0; x += 0.1 )
{
  System.out.println("Crimson and Clover");
}

```
