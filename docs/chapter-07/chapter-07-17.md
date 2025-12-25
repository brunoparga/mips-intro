---
sidebar_position: 17
title: "Hex Digits from Right to Left"
---

Hex Digits from Right to Left

## Answer

54 = 16 × 3  with a remainder of 6.

digit[ 0 ] = 54 mod 16  = 6,

number = 54 div 16 = 3

## Content

| Algorithm: Convert from base 10 to base B Representation |
| --- |
| place  = 0;
number = number to be converted
         
while (number &gt; 0 )
&#123;
  digit[place] = number mod B ; 
  number       = number div B ;
  place        = place + 1 ;
&#125; |

**The
 first execution of the loop body calculates the digit for place 0, 
the rightmost digit.**
The first execution calculates that:

```
5410   =   3 × 161 + 6 × 160

```

The 6 becomes the rightmost digit and the 3 becomes *number* for
the next iteration.

**The next iteration is for the next digit left.**
The calculation is 3 mod 16 = 3 and number = 3 div 16 = 0.
The 3 becomes the digit, and the 0 becomes *number*.

Because *number* is now zero,
 the algorithm is done,
and the result is 54<sub>10</sub>   =   0x36

If you are enthused about this
you might wish to use mathematical induction to prove that the
algorithm is correct.

## Question

Convert 247<sub>10</sub> to hexadecimal.
