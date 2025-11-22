---
sidebar_position: 8
title: "Converting a Hex Representation to Decimal"
---

Converting a Hex Representation to Decimal

## Answer

```
31A (base sixteen)   = 

   3 × sixteen2 + 1 × sixteen1 + A × sixteen0

```

## Content

**To
convert a hexadecimal representation of an integer to base 10,
write the integer as a sum of hex digits times 
the corresponding power of 16** for each digit's position.
Then, write the digits and the powers of 16 in base ten,
and do the arithmetic.

```
31A (base sixteen) = 3 × sixteen2 + 1 × sixteen1 + A × sixteen0

                   = 3 × 162 + 1 × 161 +  10 × 160

                   = 3 × 256 + 1 × 16 +  10 × 1  =  79410

```

You don't have to remember powers of 16 to do this conversion.
All you need is powers of 2.
For example,

```
162  =  24 × 24  =  
28  =   256.

```

Another example:

```
163  =  24 × 24 × 24  =  
212  =  22 × 210  =  4K

```

## Question

More practice:  
Whatis the integer (represented in base 10) that is represented by  1B2 (base sixteen)  ?

```
1B2 =   × sixteen2 +  × sixteen1 +   × sixteen0

1B2 = 10 × 162 + 10 × 161 +  10 × 160

1B2 = 10 × 10 + 10 × 10 +  10 × 10

1B2 = 10

```
