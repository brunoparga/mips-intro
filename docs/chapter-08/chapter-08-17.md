---
sidebar_position: 17
title: "Two's Complement"
---

Two's Complement

## Answer

```
  0000 0110  =  610
  1111 1010  = -610
  —————————    ————
  0000 0000     010

```

## Content

**This 
representation scheme is
called **two's complement**.**
It is one of many ways 
to represent both positive and negative integers
with bit patterns.
But it is now the nearly universal way of doing this.
**Integers are represented in a
fixed number of bits.
Both positive and negative integers can be
represented.**

"Two's complement" is the name for the entire scheme
for representing integers, both positive and negative (and zero.)

When the pattern that represents a positive integer
is added  to the pattern
that represents the negative of that integer 
(using the binary addition algorithm),
the result is zero.
The carry out of the left column is discarded.

Here
is how to figure out
which bit-pattern gives zero
when added (using the binary addition algorithm)
to another pattern.


| How to Construct the Negative of an Integer in Two's Complement: |
| --- |
| `Start with an N-bit representation of
      an integer (either negative or positive).



      To calculate the N-bit representation of
      the negative integer:



      - **Reflect  each bit of
      the bit pattern (change 0 to 1, and 1 to 0).**
- **Add one.**` |

**This process is called
**forming the two's complement** of N.**
It  reverses the sign of either a negative or positive integer.
Examples:

```
A positive integer:   0000 0001   ( one )
Reflect each bit:     1111 1110   
Add one:              1111 1111   ( minus one )

```



```
A negative integer:   1110 1001   ( negative twenty three )
Reflect each bit:     0001 0110   
Add one:              0001 0111   ( twenty three )

```



```
A positive integer:   0001 0111   ( twenty three )
Reflect each bit:     1110 1000   
Add one:              1110 1001   ( negative twenty three )          

```

## Question

Fill in the blanks:



```
The positive integer: 0000 0110     ( 610 )

Reflect each bit:     

Add one:                   ( -610 )

```
