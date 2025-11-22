---
sidebar_position: 24
title: "Carry In == Carry Out"
---

Carry In == Carry Out

## Answer

- (correct result:) The carry into the left column is the SAME as the carry out.

## Content

**With 
two's complement representation
the result of addition is correct if the carry into the
high order column is the same as  the carry out of  the
high order column.**
The carry can be one or zero.
Overflow is detected by comparing two bits, an
easy thing to do with electronics.
Here are some more examples:


| Overflow Detection with Two's Complement Operands |
| --- |
| No Overflow | No Overflow | Overflow | Overflow |
| ```

11111 111
 0011 1111  ( 6310)
 1101 0101  (-4310)
 0001 0100  ( 2010)


``` | ```

00000 011
 1100 0001  ( -6310)
 0010 1011  (  4310)
 1110 1100  ( -2010)


``` | ```

01111 100
 0011 1111  (  6310)
 0110 0100  ( 10010)
 1010 0011  ( -9310)


``` | ```

10000 000
 1100 0001  ( -6310)
 1001 1100  (-10010)
 0101 1101  (  9310)


``` |

## Question

Perform the binary addition algorithm on the following
8-bit two's complement numbers.
Is the result correct or not?

```
 1011 1101
 1110 0101 
 

```
