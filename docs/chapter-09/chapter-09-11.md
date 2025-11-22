---
sidebar_position: 11
title: "Program's Results"
---

Program's Results

## Answer

What is the sum of 0x0000002 and 0x0000003    ?

0x0000005

## Content

![Third Step through the Program](/Chapter-09/thirdStep.gif)

The
 bit patterns for these small integers are easy to
see in the register display.
You may have to use the slider on the register display
to see register ten.

If you  push  F10 again, the PC will 
point at a word in memory  
that contains bits not intended to be a machine instruction.
However the simulator will try to execute those bits.
A real processor would "crash" at this point.
**The simulator prints an error message
in the bottom panel
when execution reaches the end of a program.**
Later on,
we will end a program in a nicer way.

## Question

What happens in real computers when the end of a program is reached?
