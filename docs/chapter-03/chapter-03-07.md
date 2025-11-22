---
sidebar_position: 7
title: "More About Patterns"
---

More About Patterns

## Answer

64K bytes:
    216 = 2(6 + 10) = 26  ×  210 = 64K

## Content

| Number 
of Bits | Number 
of Patterns | Number of Patterns
as power of two |
| --- | --- | --- |
| 1 | 2 | 21 |
| 2 | 4 | 22 |
| 3 | 8 | 23 |
| 4 | 16 | 24 |
| 5 | 32 | 25 |
| 6 | 64 | 26 |
| 7 | 128 | 27 |
| 8 | 256 | 28 |
| 9 | 512 | 29 |
| 10 | 1024 | 210 |

Many
 calculations involving bit patterns use the following
familiar fact of arithmetic.
(Although the fact is familiar, confusion is even more
familiar.  Be sure you know this fact.)


| **`2(N+M)   =   2N × 2M`** |
| --- |

It is not too much work to extend the table,
as shown at right.
You can always make this table from scratch,
but memorizing a few key values does not hurt.

The numbers of patterns that can be formed with 10 or
more bits are usually expressed as multiples of 1024
`(= 210)` or in "Megs"
`(= 220).`
For example,
how many patterns can be formed from 24 bits?

> ****224   =   24 × 220   =   16 Meg****

The power of two (24)   splits into a small part (24) and
a part that has a name (220 = Meg).
This is a useful trick you can use
to amaze your friends and impress
employers.

In the SI system, meg means 106 so a megabyte is decimal one million bytes.

Some audio cards use 12 bits to represent the sound level
at an instant in time (12 bits per sample).
How many signal levels are represented?

> **212 = 22 ×  210 = 4K levels**

## Question

You wish to save a GIF image using either 6 bits per pixel or 8 bits per pixel.
Saving the image with 8 bits per pixel takes somewhat more memory.
Which should you choose?
