---
sidebar_position: 4
title: "Listing Patterns Systematically"
---

Listing Patterns Systematically

## Answer

Is the number of patterns that can be formed with N bits greater than the
number of bits?

Yes ― much greater. 
This simple fact is of profound importance to computer science.

## Content

Here
is the standard method for listing all of the
patterns that can be formed with a given number of bits.

First, **list all of the patterns that can be formed with one bit:**

```
0
1

```

**Make two copies of the list:**

```
0
1

0
1

```

**Make each row unique.**
Put a "0" in front
of each line of the first copy, 
and a "1" in front of each
line of the second copy:

```
0 0
0 1

1 0
1 1

```

Now each line is unique and you have a complete list
of the possible patterns of two bits.
The number of unique patterns with 2 bits is double that
with 1 bit.

For additional bits, repeat the trick for each new bit.

**Each additional bit doubles the number of patterns.**

## Question

How many patterns can be formed from three bits?
