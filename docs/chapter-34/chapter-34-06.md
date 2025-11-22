---
sidebar_position: 6
title: "Ordered List as Array"
---

Ordered List as Array

## Answer

Yes.  An array of integers.

## Content

**A list of integers could be placed into an array.**
In assembly language an array of integers is
declared using the directive `.word`
followed by a list of comma separated integers.
Often the array is preceded by a word that holds the
size of the array.

```
        .data
size:   .word  5
list:   .word  1,2,3,5,7

```

In practical programming a list of integers would
probably be implemented as an array.
Arrays have many advantages.
But they also have disadvantages.
**Sometimes the nodes of a data structure come
in several sizes, or the length of the list
is highly variable.
Then a **linked list** may be the best implementation.**

## Question

In the array implementation of the list, is it
possible for the list to grow in size?
