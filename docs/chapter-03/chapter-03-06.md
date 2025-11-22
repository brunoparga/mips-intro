---
sidebar_position: 6
title: "How Many Patterns from N Bits?"
---

How Many Patterns from N Bits?

## Answer

Twice the number of patterns that can be formed from (N-1) bits.

## Content

The
 list of patterns for three bits has 8 lines (patterns).
To form the list of patterns for 4 bits, 
make two copies of the list for 8 bits.
This gives you 16 lines.
Each line is made unique by prefixing the first
half with "0" and the second half with "1".

Of course, the trick can be repeated as many times as you like.
**Adding one more bit doubles the number of patterns.**
The table shows the number of patterns for 1, 2, 3 and 4 bits.

How many patterns with 5 bits?
Make two copies of the 4-bit patterns 
(16 patterns per copy).
Make the patterns unique by prefixing "0" to
the first 16 patterns and "1" to the second 16.
You now have 16×2 = 25 unique patterns.
This demonstrates the following:


| **Number of possible patterns of N bits  =  2N** |
| --- |

Memorize this fact.
Better yet, make lists of patterns
(as above)
and play around until you
understand.
Do this now.
This is an essential fact.
If you allow yourself to get muddled on it,
you will waste much time in this and future courses.

How many patterns can be formed with 10 bits?
Use the formula:

```
210 = 1024

```

This number occurs often in computer science.
1024 bytes is called a **kilobyte**, abbreviated **KB**.

However, with the International System of Units (SI) the prefix kilo means 1000. 
In this system, one kilobyte is 1000 bytes,  abbreviated **kB**.
The SI kB has fewer bytes than the binary KB, so the "k" is small.


| Number of Bits | Number of Patterns | Number of Patterns
as power of two |
| --- | --- | --- |
| 1 | 2 | 21 |
| 2 | 4 | 22 |
| 3 | 8 | 23 |
| 4 | 16 | 24 |

## Question

In the past, some computers used 16 bits 
to form memory addresses.
Assuming no special tricks 
(which such limited machines often used),
how many bytes maximum could be held in main storage?
