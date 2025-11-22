---
sidebar_position: 10
title: "Running the Program"
---

Running the Program

## Answer

A user types "400000" into the value box,
clicks OK, and sees the PC change to
00061a80.  What Happened?

Without a leading "0x" the characters "400000"
are taken to be an integer expressed in decimal.
The PC is loaded with the binary representation
of that integer.

## Content

![Single Stepping the program](/Chapter-09/singleStep.gif)

**Push F10
to execute one instruction.**
The first instruction executes,
loading register eight with a 2
(see the register display).
The PC  advances to the next
instruction 0x00400004
and the message display window
shows the instruction
that just executed.

Push F10 two more times
to execute the remaining instructions.
Each instruction is 32 bits (four bytes) long,
so the PC changes by four each time.
After the third instruction,
register 8 will have the sum of two plus three.

## Question

What is the sum of 0x0000002 and 0x0000003    ?
