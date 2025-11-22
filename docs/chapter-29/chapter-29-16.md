---
sidebar_position: 16
title: "Dangerous Code"
---

Dangerous Code

## Answer

Can "one third" be represented accurately in decimal?

No.
  Its representation continues indefinitely:
  0.3333333....

**The problem with "one tenth" is not a special flaw of
binary.**
With all bases there are fractions that cannot be represented
exactly.

## Content

Here
is a program fragment in Java.
(It could also be in C or C++).
Is there something in this program that you should worry about?


```
float x;

for ( x = 0.0; x != 10.0; x += 0.1 )
{
  System.out.println("Crimson and Clover");
}

```

## Question

How many times will "Crimson and Clover" be printed?
