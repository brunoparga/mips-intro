---
sidebar_position: 5
title: "Portability Problems"
---

Portability Problems

## Answer

| \| Little Endian \|
\| --- \|
\| Address \| Contents \|
\| 4003 \| FF \|
\| 4002 \| 00 \|
\| 4001 \| AA \|
\| 4000 \| 11 \| | Little Endian | Address | Contents | 4003 | FF | 4002 | 00 | 4001 | AA | 4000 | 11 | \| Big Endian \|
\| --- \|
\| Address \| Contents \|
\| 4003 \| 11 \|
\| 4002 \| AA \|
\| 4001 \| 00 \|
\| 4000 \| FF \| | Big Endian | Address | Contents | 4003 | 11 | 4002 | AA | 4001 | 00 | 4000 | FF |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Little Endian |
| Address | Contents |
| 4003 | FF |
| 4002 | 00 |
| 4001 | AA |
| 4000 | 11 |
| Big Endian |
| Address | Contents |
| 4003 | 11 |
| 4002 | AA |
| 4001 | 00 |
| 4000 | FF |
`0xFF00AA11`.

To answer the question, remember:

- The address used for a group of bytes is the smallest address of the four.
- What goes in that byte is:
    - Big Endian: the big end of the bit pattern
- Little Endian: the little end of the bit pattern
- The remaining three bytes of the bit pattern are filled in sequence.

## Content

When
 a word is loaded from memory,
the electronics puts the bytes
into the register in the correct order.
Operations (such as addition) inside the processor
use the same order.
When the register is stored to memory
the bytes are
written in the same order.

**As long as the electronics is consistent, either byte order works.**
Usually you don't need to think about which order is used.

**However, when data from one computer is used on another you do need 
to be concerned.**
Say that you have a file of integer data 
that was written by an old mainframe computer.
To read it correctly, you need to know (among other things):

- The number of bits used to represent each integer.
- The representational scheme used to represent integers 
    (two's complement or other).
- Which byte ordering (little or big endian) was used.

## Question

Data is sent across the Internet as groups of bit patterns (of course!)
Does the byte ordering matter with Internet data?
