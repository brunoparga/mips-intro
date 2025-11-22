---
sidebar_position: 16
title: "Decimal to base B"
---

Decimal to base B

## Answer

```
          binary    
 hex      groups of four 

0x1A4  =  0001 1010 0100 =


  binary          octal
  ungrouped       groups of three

000110100100  =  000 110 100 100   =  0644eight

```

Remember to group bits starting from the right.
If the left group is one or two bits short, add zero bits on the left as needed.

## Content

| Algorithm: Convert from base 10 to base B Representation |
| --- |
| `
place  = 0;
number = number to be converted
         
while (number > 0 )
\{
  digit[place] = number mod B ; 
  number       = number div B ;
  place        = place + 1 ;
\}            

` |

You
already know how to convert from Base B to Decimal.

**The algorithm converts *number*
from decimal representation to base B representation.**

- `div` means integer division and `mod` means modulo.
- `number div B` is how many times B goes into number.
- `number mod B` is the left-over amount.

For example,
`15 div 6 = 2` and `15 mod 6 = 3`.

Here is an example: convert 5410 to hex representation.
The base `B` is 16.
The first execution of the loop body  calculates `digit[0]`
the right-most digit of the hex number.

## Question

What is `digit[ 0 ] = 54 mod 16` ?

What is `number = 54 div 16` ?
