---
sidebar_position: 21
title: "The \"Sign Bit\""
---

The "Sign Bit"

## Answer

256

256

Every pattern of the 256 patterns has been assigned an integer to represent.

## Content

The 
algorithm that creates the representation of the negative of an integer
works with both positive and negative integers. 
Start with `N` and form its two's complement: 
you get `-N`.
Now complement   `-N` and you get the original `N`.

```
0110 1101     reflect →  1001 0010     add one →  1001 0011

1001 0011     reflect →  0110 1100     add one →  0110 1101

```

**With N-bit two's comp  representation,
the high order bit is "0" for positive
integers and "1" for negative integers.**
This is a fortunate result.
The high order bit is sometimes called the **sign bit**.
**But it is not really a sign**
(it does not play a separate role from the other bits).
It takes part in the binary addition algorithm just as any
bit.

## Question

Does the following **four-bit** two's complement represent
a negative or a positive integer?

```
 1001
```
