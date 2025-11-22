---
sidebar_position: 2
title: "FPA Chip"
---

FPA Chip

## Answer

Yes.

## Content

![Coprocessor 1 and Processor](/Chapter-32/fpa.gif)

**In the early days of MIPS,
floating point was done on
a separate chip.**
Special instructions were used to bridge the gap between
the two chips (such as the two move instructions `mtc1`
and `mfc1` we have already seen in chapter 31).
Although these days there is usually just one processor chip,
some of the instructions act as if the chips were separate.

## Question

(Thought Question: ) Do you think that testing if two floating point
values are exactly equal is a common thing to do?
