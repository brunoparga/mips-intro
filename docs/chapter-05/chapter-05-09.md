---
sidebar_position: 9
title: "Files"
---

Files

## Answer

```
41 20 42 00

```

## Content

**Files
consist 
of blocks of bytes 
holding bit patterns.**
Usually the patterns are
recorded on magnetic 
media such as hard disks or tape.
Although the actual physical arrangement varies,
you can think of a file as a contiguous
block of bytes.
The "DIR" command 
of   DOS lists the number of bytes
in each file (along with other information).

Ignoring implementation details 
(which vary from one operating system to the next),
**a file is a sequence of bytes on magnetic media.**
What can each byte contain?
A byte on a magnetic disk can hold
one of 2<sup>8</sup> (256) possible patterns, 
the same as a byte in main storage.
Reading a byte from disk into a byte of main
storage copies the pattern from one byte to another.

(Actually, for efficiency, disk reads and writes are always done in
blocks of 128 bytes or more at a time).

**So a file contains only bit patterns, as does main memory.**
What is represented by the bit patterns of a file
depends on how they are used.
For example, often a file  contains bytes
that represent characters according to
the ASCII convention.
Such a file is called a **text file**,
or sometimes an **ASCII file**.
What makes the file a text file is the
knowledge about how the file was created and
how it is to be used.

## Question

You (acting as an "English Language Application") find
a battered old book in a stall outside a bookshop.
You open the book to a random page and see:

> Non sum qualis eram bonae sub regno Cynarae.

Is this book suitable for you 
(in your role as an English application)?
