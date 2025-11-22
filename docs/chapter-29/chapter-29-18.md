---
sidebar_position: 18
title: "Count with Integers"
---

Count with Integers

## Answer

See below.

## Content

**To loop 100 times,
use a counting loop with an integer variable.**
Here is the best fix:

```
int x;

for ( x = 0; x < 100; x++ )
{
  System.out.println("Crimson and Clover");
}

```

(It is conventional to write a counting loop this way,
  even though testing for an "exact hit" with `x != 100`
  is logically equivalent.)

Here is a poor solution:

```
float x;

for ( x = 0.0; x < 10.0; x += 0.1 )
{
  System.out.println("Crimson and Clover");
}

```

This will probably work as intended, but there
is a risk it will loop 101 times.

## Question

Say that you need 100 values, 0.0, 0.1, up to 9.9?
Can an integer-controlled counting loop be used?
