---
sidebar_position: 8
title: "Addition with fixed point Expressions"
---

Addition with fixed point Expressions

## Answer

| Power of 2 | 3 | 2 | 1 | 0 | **.** | -1 | -2 | -3 | -4 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|   | 8 | 4 | 2 | 1 | **.** | 0.5 | 0.25 | 0.125 | 0.0625 |
| Include? | 0 | 1 | 1 | 0 | **.** | 1 | 0 | 0 | 1 |

> `sum = 4 + 2 + 0.5 +0.0625 = 6.5625`

## Content

Here
is another number: `00010100`.
This expression represents
decimal `1.25`.

**Here is the familiar *binary addition algorithm*
performed with the two bit patterns, and the usual decimal
addition performed with their decimal equivalent.**


| fixed point |   | as decimal |
| --- | --- | --- |
| 01101001 |   | 6.5625 |
| 00010100 |   | 1.2500 |
|   |   |   |
| 01111101 |   | 7.8125 |

## Question

Of course, the question is, does the sum of the fixed point expressions 
(01111101) represent
the sum of the decimal expressions (7.8125)?


| Power of 2 | 3 | 2 | 1 | 0 | **.** | -1 | -2 | -3 | -4 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|   | 8 | 4 | 2 | 1 | **.** | 0.5 | 0.25 | 0.125 | 0.0625 |
| Include? | 0 | 1 | 1 | 1 | **.** | 1 | 1 | 0 | 1 |

You can satisfy your burning curiosity by adding up the included decimals
in the table.
