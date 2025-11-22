---
sidebar_position: 7
title: "RISC"
---

RISC

## Answer

You must use assembly language to write some
functions of the game.
Or (more likely) use a graphics library that utilizes these instructions.

## Content

Reduced
Instruction Set Computers 
(RISC) have a small number of instructions.
The idea of RISC is 
**that it is better to have a 
small, sleek, fast instruction set
than to have a big collection**
of poorly coordinated, ungainly, complex instructions.

If  a small set of instructions is implemented on a chip,
the chip now has room for 
more general purpose registers,
a larger on-chip memory cache,
an instruction pipeline,
and other features that add speed.

**But modern CISC chips now include many of the features
of RISC chips (such as cache and pipelining).**
Modern CISC chips have greater throughput
than older RISC chips.
Consumer and office computers use CISC chips
to be compatible with existing Windows software.
High-end workstations and
recently designed systems (such as embedded systems)
typically use RISC.

## Question

Examine the following program excerpt.
(Trick question:) Is it correct?

```mips
start:   ori   $8,$0,4      # $8 = 4
         ori   $9,$0,12     # $9 = 12
         addu  $10,$8,$9    # $10 = 12+4 = 16
         sll   $10,$10,2    # $10 = 16*4 = 64
         

```
