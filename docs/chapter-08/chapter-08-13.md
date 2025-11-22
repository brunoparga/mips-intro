---
sidebar_position: 13
title: "Problems with Sign-Magnitude"
---

Problems with Sign-Magnitude

## Answer

`-12710 ... 0 ... +12710`

Mathematically, zero is usually regarded as neither positive nor negative.

## Content

Sign-magnitude can be used with any number of bits, but
let's use 8-bit sign-magnitude for examples.

The leftmost bit is used for the sign, 
which leaves seven bits
for the magnitude.
The magnitude
uses  7-bit  unsigned binary,
which can represent 010  (as 000 0000) 
up to 12710  `(as 111 1111).`
The eighth bit makes these positive
or negative, resulting in  
`-12710, ... -0, 0, ... 12710`.

**One  pattern  corresponds to
"minus zero", 1000 0000.
Another corresponds to
"plus zero", 0000 0000.**

There are several problems with
sign-magnitude.
It works well for
representing positive and negative integers
(although the two zeros are bothersome).
**But it does not work well in
computation.**
A good representation method 
(for integers or for anything)
must not only be able to represent  the objects of interest,
but must also support operations on those objects.

This is what is wrong  with Roman Numerals: 
they can represent positive integers,
but they are very poor when used in computation.

## Question

Can the binary addition algorithm be used with sign-magnitude
representation?
Try adding +16 with -24:

```
 0001 0000  →    16
 1001 1000  →   -24 
  

```
