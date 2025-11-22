---
sidebar_position: 18
title: "Negative Six Again"
---

Negative Six Again

## Answer

```
The positive integer: 0000 0110     ( 610 )

Reflect each bit:     1111 1001

Add one:              1111 1010     ( -610 )

```

The result is the same representation for minus six as
we figured out before.

## Content

Here is what is going on:
**When each bit of a pattern is reflected
then the two patterns added
together make all 1's.**
This works for all patterns:

```
      0110 1010   pattern
      1001 0101   pattern reflected
      1111 1111   all columns filled

```

**dding one to this pattern  
creates a pattern of all zero's:**

```
     11111 111    row of carry bits
      1111 1111   all columns filled
      0000 0001   one
      0000 0000

```

he
negation algorithm makes use of the above trick.
Three patterns added together result in a zero.
If one pattern represents an integer,
then the sum of the other two patterns represents
the negative of the integer.

```
pattern +  pattern reflected               = all ones

pattern +  pattern reflected + one         = all zeros

pattern + (pattern reflected + one )       = all zeros

pattern + (two's complement of pattern)    = all zeros

```

Don't be too upset if the above is confusing.
Mostly all you need is to get used to this stuff.
Of course, this takes practice.

## Question

What is the two's complement of 0100 0111?

Reflect:

Add one:
