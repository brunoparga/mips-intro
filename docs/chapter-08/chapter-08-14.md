---
sidebar_position: 14
title: "Patterns that Add Up to Zero"
---

Patterns that Add Up to Zero

## Answer

Mechanically following the binary addition algorithm yields:

```
   1
 0001 0000     → 16
 1001 1000   →  -24 
 1010 1000    → -40 (wrong!)

```

## Content

**The binary addition algorithm does 
NOT work with sign-magnitude.**
There are algorithms  that do  work with sign-magnitude, 
and some early computers were built to use them.
(And other computers were built using
other not-ready-for-prime-time algorithms).
It took several years of experience 
for computer science to decide that
a better way had to be found.

There is a better way. Recall a question and its answer from several pages ago:

```
  11111 111
   0000 0001  =   110
   1111 1111  =   ? 
   0000 0000  =   010

```

## Question

A number added to one results in a zero.
What could that number be?
