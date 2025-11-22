---
sidebar_position: 9
title: "Setting the PC"
---

Setting the PC

## Answer

- What machine instruction (bit pattern) did your
    first instruction assemble into?
    - 0x34080002
- At what address in memory was it loaded?
    - 0x00400000

## Content

![Set Value Menu](/Chapter-09/setValue.gif)


The
 **program counter** is the part of the processor that
contains the address of the current machine instruction.
**The PC should be initialized to 0x00400000, 
the address of the first instruction.**
Sometimes you need to explicitly set the value of the PC.
To do this, select (click on)
Simulator; click on Run Parameter; type the address in the top text box. 
Click on OK and the PC (in the register display)
should change.

To rerun a program you need to re-initialize the PC to 0x00400000.

## Question

A user types "400000" into the value box,
and clicks OK.
The PC changes to
00061a80.  
What happened?
