---
sidebar_position: 25
title: "Electronically Checking Overflow"
---

Electronically Checking Overflow

## Answer

The result is correct.

```
11111 1 1
 1011 1101
 1110 0101 
 1010 0010

```

## Content

Look 
at the answer: 
**since the carry into the high order column is the
same as the carry out of the high order column,
the result is correct.**
We don't need to figure out what decimal numbers
the patterns represent.

```
11111 1 1
 1011 1101  
 1110 0101  
 1010 0010  

```

The electronics of a computer determine if a calculation is
correct by using a simple circuit that tests the equality of
the carry-in bit and the carry-out bit of the high order column.
However, when you do a calculation with paper and pencil
you can check your work by translating the operands
and results into decimal:


| Work done in binary. | Decimal Equivalent should

be Consistent 

with the Binary. |
| --- | --- |
| ```

11111 1 1
 1011 1101 
 1110 0101 
 1010 0010  

``` | ```

 
-67 
-27   
-94 

``` |

Of course, the computer has no independent means of
"checking its result."  All it can do is look
at the carry bits into and out of the high order column.

## Question

Can the binary addition algorithm be used with
patterns that represent negative integers?
