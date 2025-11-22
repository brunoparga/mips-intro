---
sidebar_position: 7
title: "ASCII Chart"
---

ASCII Chart

## Answer

Can the bit patterns 
used to represent characters represent other
things in other contexts?

Yes.

You need to know the context to know what 
a particular pattern represents.

## Content

| Hex   Char | Hex   Char | Hex   Char | Hex   Char |
| --- | --- | --- | --- |
| 00   nul | 20   sp | 40   @ | 60   ` |
| 01   soh | 21   ! | 41   A | 61   a |
| 02   stx | 22   " | 42   B | 62   b |
| . . . | . . . | . . . | . . . |
| 0A   lf | 2A   * | 4A   J | 6A   j |
| . . . | . . . | . . . | . . . |
| 1E   rs | `3E   >` | 5E   ^ | 7E   ~ |
| 1F   us | 3F   ? | 5F   _ | 7F   del |

**The chart shows some patterns used in ASCII to represent characters.**
(See the appendix for a complete chart.)
The first printable character is SP (space) and corresponds to the bit pattern
`0010 0000` .

**Space is a character, just like any other.**
Although not visible in the  shortened chart, 
the upper case alphabetical characters
appear in order A,B,C, ..., X, Y, Z with no gaps.
There is a gap between upper case and lower case letters.
The lower-case characters also appear in order a,b,c,...x, y, z.

The last pattern is 0x7F which is 0111 1111.
This is the DEL (delete) character.
For a complete list of ASCII representations,
see the appendix.

## Question

How many of the total number of 8-bit patterns 
correspond to a character,
(including control characters)?
(Hint: look at the pattern for DEL).
