---
sidebar_position: 3
title: "Binary Addition Algorithm"
---

Binary Addition Algorithm

## Answer

- Both

## Content

| Binary Addition Algorithm: detecting overflow |
| --- |
| Unsigned Binary | Two's Complement |
| The 
      result is correct if *the carry out* of the
      high order column is zero. | The 
      result is correct if *the carry into* the
      high order column is the same as *the carry out of* the
      high order column.
      The carry bits can both be zero or both be one. |

**The Binary Addition Algorithm works for both
methods of integer representation.**
The same MIPS instruction (`addu`) is
used for both methods.
However, the overflow condition is different for each method.

## Question

Use the Binary Addition Algorithm on these
8-bit patterns:

```
  
 1010 1011
 0101 0101
———————————

```

Does overflow happen for:

- Unsigned Binary?
- Two's Complement?
