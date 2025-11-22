---
sidebar_position: 12
title: "Ending Test"
---

Ending Test

## Answer

Say that  `x`  is very close to  `n0.5`.
What do you think will be the value of `n/(x*x)`?

It should be very close to `1.0`

## Content

But due to the lack of precision with floating point, the best we can
hope for is to calculate an  `x` such that:

```
0.999999  <  n/(x*x)  <  1.00001

```

The
left and the right bound in the above have 6 decimal digits of precision.
If 1.00000  is subtracted from this value the result is:

```
-0.000001  <  n/(x*x) - 1.0  <  0.00001

```

To be safe, terminate the loop when:

```

| n/(x*x) - 1.0 |  <  0.00001

```

where `|x|` means the absolute value of `x`.

## Question

Is there a floating point absolute value instruction?
