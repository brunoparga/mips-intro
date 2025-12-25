---
sidebar_position: 3
title: "Favorite Binary Numbers"
---

Favorite Binary Numbers

## Answer

| Power of 2 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Decimal | 1024 | 512 | 256 | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| Include? |   |   |   | 1 | 0 | 1 | 0 | 1 | 0 | 1 | 0 |

Adding up the "turned on" powers of two gives:
 `128 + 32 + 8 + 2 =  17010`

## Content

**Here is a list of positive integers represented in both
8-bit binary and decimal.**
You will encounter these patterns frequently.
For now, only positive integers are represented.
Negative integers come later.

Look at the table and see if you can discover a useful pattern.



| Binary | Decimal | Notes |
| --- | --- | --- |
| 0000 0000 | 0 |   |
| 0000 0001 | 1 | 2<sup>0</sup> = 1 = 2<sup>1</sup> - 1 |
| 0000 0011 | 3 | 2<sup>1</sup> + 2<sup>0</sup> = 3 =  2<sup>2</sup> - 1 |
| 0000 0100 | 4 | 2<sup>2</sup> |
| 0000 0111 | 7 | 2<sup>2</sup> + 2<sup>1</sup> + 2<sup>0</sup>  = 2<sup>3</sup> - 1 |
| 0000 1000 | 8 | 2<sup>3</sup> |
| 0000 1111 | 15 | 2<sup>4</sup> - 1 |
| 0001 0000 | 16 | 2<sup>4</sup> |
| 0001 1111 | 31 | 2<sup>5</sup> - 1 |
| 0010 0000 | 32 | 2<sup>5</sup> |
| 0111 1111 | ? | ? |
| 1000 0000 | 128 | 2<sup>7</sup> |

## Question

An important number was left out of the
table.  What do you suppose is the decimal equivalent of
`0111 1111` ?
