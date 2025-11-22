---
sidebar_position: 2
title: "Twice the Number of Places"
---

Twice the Number of Places

## Answer

Multiply 9910 times 9910 : 
`9801`

How many decimal places does each operand (99) have: 
`2`.

How many decimal places does the result have: 
`4`.

## Content

```
Binary Multiplication  Hex Multiplication  Decimal Multiplication

        10110111            B7              183 
        10100010            A2              162 
        ————————            ——              ———
        00000000           16E              366
       10110111.          726             1098
      00000000..                          183
     00000000...
    00000000....
   10110111.....
  00000000......
 10110111.......
————————————————          ————            —————
 111001111001110          73CE            29646 

```


**The 
product of two N-place decimal integers may need 2N places.**
This is true for numbers expressed in any base.
In particular, 
the product of two integers expressed with N-bit binary
may need 2N bits.

For example,
in the picture, two 8-bit unsigned integers are multiplied
using the usual paper-and-pencil multiplication
algorithm (but using binary arithmetic).

The two 8-bit operands result in a 15-bit product.
Also shown is the same product done with base 16 and base 10 notation.

## Question

Is a 32-bit general register always able to hold the result of
multiplying two 32-bit integers?
