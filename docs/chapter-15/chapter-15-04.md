---
sidebar_position: 4
title: "Byte Order of MIPS and SPIM"
---

Byte Order of MIPS and SPIM

## Answer

The big end is the byte
that contains 0x00,
corresponding to the largest powers of two.

Notice that "big end" refers to position
within the word, not the value of the byte.

## Content

Within
a byte, for all processors, bit 7  is 
the most significant bit.
So the big end byte looks the same for both
byte orderings.
Usually in printed material this bit is shown at the left,
as in `00010010`.

Except when discussing byte ordering,
the "big end" byte is called the
"high-order byte" or the "most significant byte".

**The MIPS processor chip can be set up in hardware
to use either byte ordering.**
A computer system designer makes whatever choice
best fits the rest of the components in the computer system.

The SPIM simulator uses the byte ordering of
the computer it is running on.

- Intel 80x86: little-endian.
- recent Macintosh: little-endian.
- older Macintosh: big-endian.

The examples in these notes
were done on a Windows/Intel computer.
If you are using a older Macintosh there
will be occasional differences.

## Question

Here is a bit pattern, with the most significant bits
written on the left (as is usual in print):
`0xFF00AA11`.
Copy the bytes to memory using big endian and little endian orders:


| \| Little Endian \|
\| --- \|
\| Address \| Contents \|
\| 4003 \|   \|
\| 4002 \|   \|
\| 4001 \|   \|
\| 4000 \|   \| | Little Endian | Address | Contents | 4003 |   | 4002 |   | 4001 |   | 4000 |   | \| Big Endian \|
\| --- \|
\| Address \| Contents \|
\| 4003 \|   \|
\| 4002 \|   \|
\| 4001 \|   \|
\| 4000 \|   \| | Big Endian | Address | Contents | 4003 |   | 4002 |   | 4001 |   | 4000 |   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Little Endian |
| Address | Contents |
| 4003 |   |
| 4002 |   |
| 4001 |   |
| 4000 |   |
| Big Endian |
| Address | Contents |
| 4003 |   |
| 4002 |   |
| 4001 |   |
| 4000 |   |
