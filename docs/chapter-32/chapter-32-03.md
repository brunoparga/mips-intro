---
sidebar_position: 3
title: "Comparison Instructions"
---

Comparison Instructions

## Answer

Maybe.

## Content

| Instruction | Operation |
| --- | --- |
| `c.eq.s fs, ft` | `if $fs == $ft 
                     condition bit = 1
                  else 
							       condition bit = 0` |
| `c.lt.s fs, ft` | `if $fs < $ft 
                     condition bit = 1
                  else 
							       condition bit = 0` |
| `c.le.s fs, ft` | `if $fs &lt;= $ft 
                     condition bit = 1
                  else 
							       condition bit = 0` |

**Testing if two floating point numbers are exactly equal is sometimes
NOT a good idea.** 
Floating point calculations are not exact.
Sometimes values are not equal even though mathematically they should be.
It is best to use "less than" or "less than or equal" instead of 
testing for exact equality.

The table shows some MIPS comparison instructions
for single precision floating point.

**These
instructions change the value in the **condition bit**,
a part of the processor.**
The condition bit is like a one bit register. 
The bit holds the result of a compare instruction.

**The condition bit is set (made equal to one) if the condition is true.**
It is cleared (made equal to zero) if the condition is false.

There are more comparison operations than these.
But these notes use just these three.
The others involve the various IEEE 754 codes for
exceptional results.

## Question

There is no "greater than" instruction! What can we do?
