---
sidebar_position: 7
title: "Base 16 Representation"
---

Base 16 Representation

## Answer

4095

Hopefully you did something clever: you realized that
the  represented number is 2N - 1 which must be an odd number.
( 2N means 2 × 2 × 2 ... × 2 it must be even.
So 2N - 1 must be odd. )

So you picked the only odd number in the list.
Or else you ignored the question.

## Content

Recall
the
Rules for Positional Notation:

- The base  B is (usually) a positive integer.
- There are B "digits" representing zero up to (B minus one).
- Positions correspond to integer powers of B, starting with power zero,
     and increasing right to left.
- The digit placed at a position shows how many times that
     power of B is included in the number.

Rule 1 says any positive integer can be used as a base.
**Let's use sixteen as a base.**
Rule 2 says we need sixteen symbols to use as digits.
Here is the usual choice:


| zero | one | two | three | four | five | six | seven |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| eight | nine | ten | eleven | twelve | thirteen | fourteen | fifteen |
| 8 | 9 | A | B | C | D | E | F |

Since there are only ten of the usual digits,
letters are used for the remaining six hex "digits".

**Base sixteen representation
is  called the **Hexadecimal** system,
sometimes called **Hex**.**

## Question

Fill in the blanks with BASE SIXTEEN digits

```
31A (base sixteen) =   
 × sixteen2 +  × sixteen1 +   × sixteen0

```
