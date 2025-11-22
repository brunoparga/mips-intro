---
sidebar_position: 10
title: "Octal"
---

Octal

## Answer

- 0000 1010 0001 0001     0x0A11
- 0001 0010 1001 1010     0x129A
- 1111 1010 1101 1110     0xFADE
- 0011 0110 1100 0000     0x36C0
- 0000 0000 0000 0000     0x0000  (be sure to show all zeros)

## Content

| Octal Names |
| --- |
| nibble | pattern
 name | nibble | pattern
 name |
| 000 | 0 | 100 | 4 |
| 001 | 1 | 101 | 5 |
| 010 | 2 | 110 | 6 |
| 011 | 3 | 111 | 7 |

Sometimes 
documentation describes bit
patterns using groups of three. 
**Three-bit groups are named using the first eight
pattern names of hexadecimal.
This method is called **octal notation**.**
A bit pattern can be named using hexadecimal names,
octal names, or several other notations.

```
01101010 = 01 101 010 =  152 (octal)
01101010 = 0110 1010  = 0x6A (hex)

```

Octal is awkward to use with 8-bit bytes.
Bytes don't evenly split into octal pattern names.
But you should know about it.
Historically, 
some computer documentation 
used octal pattern names.
**Also, in several programming languages
(C and Java among them) an octal literal
is indicated by a leading zero:**

```
0152    (octal)    = 001 101 010 
0x152   (hex)      = 0001 0101 0010 
152     (decimal)  = 1001 1000 

```

**When the number of bits
is not a multiple of three it is
conventional to add zero bits to the left,**
and then to name the pattern as usual.
This happens frequently because computer memory is organized into 8-bit bytes,
which do not divide evenly into groups of three.

I have lost an unfortunate number of hours
with buggy programs,  only to discover
a constant buried deep in the code that
started with a "0" when it should not have.

## Question

What is the OCTAL pattern name of the following
bit patterns:

- 111 010 001     0721
- 100 011 010     0432
- 011011110      0336
- 11000000        0300
