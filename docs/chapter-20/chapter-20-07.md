---
sidebar_position: 7
title: "Integer Array"
---

Integer Array

## Answer

Yes.

## Content

![Integer Array](/Chapter-20/integerArray.gif)


```
        .data
size:   .word  17
array:  .word  12, -1, 8, 0, 6, 85, -74, 23, 99, -30, 30, 95, 4, 7, 10, 28, 14

```


**An 
array of integers is a sequence of
integers in successive words of memory.**
The number of integers
in the array is also a value kept in memory.

In assembly language, an array of integers is
declared using the directive `.word`
followed by a list of comma separated integers.

The `.word` directive 
puts the data in word-aligned locations.

## Question

Why can't an array end with a null word, like with strings?
