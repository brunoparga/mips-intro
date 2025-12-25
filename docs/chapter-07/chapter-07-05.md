---
sidebar_position: 5
title: "Left Shift"
---

Left Shift

## Answer

0011 0010  =  50<sub>10</sub>    ;  
so 0110 0100  =  100<sub>10</sub>

## Content

**Useful Fact:
If the number `N` is represented by a bit pattern 
`X`,
then `X0` represents `2N`.**

If  `00110010`
represents 50<sub>10</sub> , 
then  `001100100`
represents 100<sub>10</sub>.
Often you need the "shifted" pattern to have the same
number of bits as the original pattern.
Doing this with eight bits,
`01100100` represents 100<sub>10</sub>.

This is called "shifting left" by one bit.
It is often used in hardware to multiply by two.
If you must keep the same number of bits 
(as is usually true for computer hardware) 
then make sure that no
"1" bits are lost on the left.

## Question

With 8 bits, there are
2<sup>8</sup> patterns.
What is the largest positive integer that can be
represented in 8 bits using base two?
