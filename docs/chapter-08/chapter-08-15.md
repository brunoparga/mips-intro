---
sidebar_position: 15
title: "Patterns that Add  to Zero"
---

Patterns that Add  to Zero

## Answer

Might be minus one.

## Content

Minus 
one added to plus one gives zero.
**If a particular bit pattern  when added to one results in the
pattern that represents zero,
then it can represent minus one.**

```
  11111 111
   0000 0001  =    110
   1111 1111  =   -1 
   0000 0000  =    010

```

**There is a carry out of one from the high order
column, but that is fine *in this situation*.**
The binary addition algorithm correctly applied
gives the correct result in the eight bits.
Look at another interesting case:

```
  11111 11
   0000 1110  =   1410
   1111 0010  =    ? 
   0000 0000  =    010

```

## Question

A number added to 1410  results in a zero.
What could that number be?
