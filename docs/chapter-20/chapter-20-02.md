---
sidebar_position: 2
title: "Null-terminated String"
---

Null-terminated String

## Answer

A zero byte (also called a null byte).

## Content

**A
null-terminated string is a sequence of ASCII
characters, one to a byte,
followed by
a zero byte (a null byte).**
Null-terminated strings are common in C and C++.
Here is how a string is declared in assembly language:

```
        .data
str:    .asciiz "Time is the ghost of space."

```

The characters are placed in memory in order,
starting with the 'T'.
The picture shows this.
The blank bytes are
filled with ASCII space (0x20).
The last byte is filled with 0x00, 
represented with a slash.

![Time is the ghost of space](/Chapter-20/nullTermString.gif)

Here is what it looks like in the data display
of SPIM running on a Windows PC.**The characters are placed 
in memory in sequential order
beginning with 'T' (at address 0x10000000).**
This is hard to see in the display.

![SPIM display](/Chapter-20/spimString.gif)

The right section of the SPIM display shows the characters in a string in the order they are stored in memory, one character per byte.
However, in the hex display of memory, 
each group of four bytes is displayed  in backwards order.
The byte with the lowest address of a group is on the right; the byte with the highest address  of the group is the leftmost byte.
The red letters over each byte in the hex  memory display have been added (by me) to show what each byte actually contains.

**The hex memory display is aimed at
displaying 32-bit little-endian integers.**
For 4-byte integers, this puts the most significant
byte on the left, where it ordinarily goes when integers are printed.
Unfortunately, this makes the hex display hard to read
for data other than integers.

In the red text, space (0x20) is shown as '_'.
The null byte is at address 0x1000001B, followed by more nulls that are not part of the string.

- `'T'` ( 0x54 ) is at address 0x10000000.
- `'i'` ( 0x69 ) is at address 0x10000001.
- `'m'` ( 0x6d ) is at address 0x10000002.
- `'e'` ( 0x65 ) is at address 0x10000003.
- `' '` ( 0x20 ) is at address 0x10000004.
- `'i'` ( 0x69 ) is at address 0x10000005.
- `'s'` ( 0x73 ) is at address 0x10000006.
- `' '` ( 0x20 ) is at address 0x10000007.

## Question

What character is at 0x10000008   ?

What character is at 0x10000010   ?
