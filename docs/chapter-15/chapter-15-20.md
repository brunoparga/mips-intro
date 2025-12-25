---
sidebar_position: 20
title: "A Run of the Program"
---

A Run of the Program

## Answer

Suggest three values for `x`
for use in testing.

0, 1, -1.  
Of course you don't stop there, but running with these three
values often reveals problems.

## Content

![SPIM with the Program](/Chapter-15/polyRun.gif)

**Here
 is a run of the program after `x` was changed
to  `-1.`
The result, 0x72 = 114<sub>10</sub> is correct.**
As always, running is done by single-stepping (pushing F10).
The PC is initialized to 0x00400000.

Create a source file and play around with the program.
Put some bugs into the program and see what they do.
Experimentally determine the range allowed for `x`.

## Question

How can you solve for the allowed range of `x`?
