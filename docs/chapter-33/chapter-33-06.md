---
sidebar_position: 6
title: "Picture"
---

Picture

## Answer

No. When you get the block's address from SPIM you can
use it.  But you don't need to know what it is.

## Content

![SPIM display](/Chapter-33/mallocOnePic.gif)

Except
 for debugging, usually you have no need to know the
actual address of dynamically allocated blocks.
But to start out let us look carefully at what happened.
The picture shows SPIM after the program has run.
**The address of the dynamically allocated block of memory is in `$s0`.
This address is `10040000`.**

Looking in the data section at address `10040000`
you find the block of four bytes.
**The program put the integer `77` (0x4d) into that
block and the picture shows this.**

## Question

If another block of memory is allocated where will it be?
