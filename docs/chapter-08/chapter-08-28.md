---
sidebar_position: 28
title: "More Practice Subtraction"
---

More Practice Subtraction

## Answer

Subtract 0101 1001 from 0010 0101

1100 1100

(correct)

## Content

**The
 number to be subtracted is negated by the
usual means (reflect the bits, add one):**

```
0101 1001 →  1010 0111

```

**Then the binary addition algorithm is used:**

```
00100 111         
 0010 0101   =  3710
 1010 0111   = -8910
 —————————     ————
 1100 1100     -5210

```

Since the carry into the most significant column is the same
as the carry out of that column the result is correct.
The answer came out negative, but that is fine.

Computer scientists and computer engineers are
expected to understand the binary addition algorithm.
Practice it.
Or you can change your major to Art History
(and leave the high-paying jobs to the rest of us). 
Here is another problem:

## Question

Subtract 0101 1001 from 1110 0101.

Is the result correct or not?
