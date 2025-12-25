---
sidebar_position: 8
title: "Pattern Names"
---

Pattern Names

## Answer

Unless memory is at a premium, use 8 bits per pixel.
With 6 bits, the image could only have 2<sup>6</sup> = 64 colors;
with 8 bits, it can have 2<sup>8</sup> = 256 colors, a considerable
improvement.

## Content

| Hexadecimal Names |
| --- |
| nibble | pattern
  name | nibble | pattern
  name |
| 0000 | 0 | 1000 | 8 |
| 0001 | 1 | 1001 | 9 |
| 0010 | 2 | 1010 | A |
| 0011 | 3 | 1011 | B |
| 0100 | 4 | 1100 | C |
| 0101 | 5 | 1101 | D |
| 0110 | 6 | 1110 | E |
| 0111 | 7 | 1111 | F |

Consider the following pattern:

```
0010100010101100

```

It is not easy to work with.
**It is convenient to break
bit patterns into 4-bit groups
(called **nibbles**):**

```
0010 1000 1010 1100

```

There are 16 ( = 2<sup>4</sup> ) possible patterns in a nibble.
**Each pattern has a name**, as seen in the table.

You might be tempted to call those 4-bit patterns "binary numbers".
*Resist that temptation*.
The bit patterns in computer main memory are used for very many
purposes. 
Representing integers is just one of them.
**The fundamental concept is "bit patterns".**
Don't confuse this concept with one of its many uses: 
"representing  numbers".

The above bit pattern can be written using the pattern names:

```
0010 1000 1010 1100 = 28AC

```

Bits are grouped into nibbles starting at the
right. 
Then each nibble is named.
**This method of giving names to patterns is called **hexadecimal**.**

## Question

Name the following patterns:

- 0001 0001     11
- 0011 1001     39
- 1011 1111     BF
- 0100 0110     46
- 0000 0000     00  (be sure to show both zeros)
