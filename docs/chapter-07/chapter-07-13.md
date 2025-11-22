---
sidebar_position: 13
title: "Converting Hex Representation into Binary Representation"
---

Converting Hex Representation into Binary Representation

## Answer

1011 0000.  Appending four zeros multiplies the number being represented by 24.

## Content

**Convert a hexadecimal representation of an integer into
an unsigned binary representation directly by replacing each
hex digit with its 4-bit binary equivalent.**
For example:

```
   1    A    4    4    D      (Hex    Representation) 

0001 1010 0100 0100 1101      (Binary Representation)  

```

Recall that:

- (In base two) Shifting left by four bits is equivalent to multiplication by sixteen.
- (In base sixteen) Shifting left by one digit is equivalent to multiplication by sixteen.

To see how this works, look at this integer represented in base two
and in base sixteen:

```
base two           base sixteen

1010        =      A

```

Now multiply each by sixteen:

```
base two           base sixteen

1010 0000   =      A0

```

Groups
 of four bits (starting from the right) match powers of sixteen,
so each
group of four bits matches a digit of the hexadecimal representation.
Let us rewrite the integer C6D in binary:

```
C6D  =    C × sixteen2 +    6 × sixteen1   +    D × sixteen0  

     =    C × (24)2    +    6 × (24)1      +    D × (24)0  

     = 1100 × (24)2    + 0110 × (24)1      + 1101 × (24)0   

     = 1100 ×  28      + 0110 ×  24        + 1101 × 1  

```

Using the idea that each multiplication by two is equivalent to appending a zero to the right,
this is:

```
     = 1100 0000 0000  + 0110 0000         + 1101  

C6D  = 1100 0110 1101

```

Each
digit of hex can be converted into a 4-bit binary number,
each place of a hex number stands for a power of 24.
It stands for a number of 4-bit left shifts.

## Question

What is the name of the binary pattern   0001 1010 0100 0100 1101 ?
