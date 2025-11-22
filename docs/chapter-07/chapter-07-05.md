---
sidebar_position: 5
title: "Left Shift"
---

Left Shift

## Answer

0011 0010  =  5010    ;  
so 0110 0100  =  10010

## Content

**Useful Fact:
If the number `N` is represented by a bit pattern 
`X`,
then `X0` represents `2N`.**

If  `00110010`
represents 5010 , 
then  `001100100`
represents 10010.
Often you need the "shifted" pattern to have the same
number of bits as the original pattern.
Doing this with eight bits,
`01100100` represents 10010.

This is called "shifting left" by one bit.
It is often used in hardware to multiply by two.
If you must keep the same number of bits 
(as is usually true for computer hardware) 
then make sure that no
"1" bits are lost on the left.

## Question

With 8 bits, there are
28 patterns.
What is the largest positive integer that can be
represented in 8 bits using base two?
