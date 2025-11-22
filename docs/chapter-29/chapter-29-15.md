---
sidebar_position: 15
title: "Non-terminating Result"
---

Non-terminating Result

## Answer

|   | Decimal | Binary so far |
| --- | --- | --- |
| Start | 0.750 | 0. |
| ×2 | 1.50 | 0.1 |
| erase | .50 |   |
| ×2 | 1.00 | 0.11 |
| erase | .00 |   |
| Result |   | 0.11 |

So `0.7510 = 0.112`.

To check this, go in the other direction:
  `0.112 = 2-1 + 2-2 = 0.5 + 0.25 = 0.75`

## Content

|   | Decimal | Binary So Far |
| --- | --- | --- |
| Start | 0.1 | 0. |
| ×2 | 0.2 | 0.0 |
| ×2 | 0.4 | 0.00 |
| ×2 | 0.8 | 0.000 |
| ×2 | 1.6 | 0.0001 |
|   | .6 | 0.0001 |
| ×2 | 1.2 | 0.00011 |
|   | 0.2 | 0.00011 |
| ×2 | 0.4 | 0.000110 |
| ×2 | 0.8 | 0.0001100 |
| ×2 | 1.6 | 0.00011001 |
|   | .6 | 0.00011001 |
| ×2 | 1.2 | 0.000110011 |
|   | 0.2 | 0.000110011 |
| ×2 | 0.4 | 0.0001100110 |
| ×2 | 0.8 | 0.00011001100 |
| Result |   | 0.00011001100... |











At
right the algorithm is used to
convert `0.110`
to binary.
(The "erase" steps are not shown when a 0 is copied to the "binary so far" column.)

The algorithm does not end.
After it has started up,
  the same pattern `0.2, 0.4, 0.8, 1.6, 0.6, 1.2, 0.2`
  repeats endlessly.
  The pattern `0011` is appended to the
  growing binary fraction for each repetition.

> ****Unexpected Fact:** The value "one tenth" cannot be
> represented precisely using a binary fraction.**

This 
  is true in the base two positional notation used here,
  and also in floating point representation used in programming
  languages.
  This is sometimes an important consideration when
  high accuracy is needed.

## Question

Can "one third" be represented accurately in decimal?
