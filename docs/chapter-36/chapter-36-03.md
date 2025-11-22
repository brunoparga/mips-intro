---
sidebar_position: 3
title: "Memory Dump"
---

Memory Dump

## Answer

`0x00400000`

## Content

![memory dump](/Chapter-36/dump01.gif)


This display of memory shows part of the first subroutine
and the start of the data section.
**The address of the entry point of the first subroutine is circled in red.
This corresponds to the symbolic address `sub1`**

The data section at address `0x1000010` contains `0x00400000` the address `sub1`
followed by the address of the second subroutine, `sub2`.

Note Carefully:  The top of the picture shows the contents of the text section of memory.
**The contents of address `0x00400000` is the bit pattern `0x34020004`.**

The bottom of the picture shows the contents of the data section of memory.
**The contents of address `0x1000010` is the bit pattern `0x00400000`.**

The assembler and loader put all strings in memory 
in the data section.
Note that the strings of the subroutines are not stored with
the code of the subroutines.
The subroutines are put in memory in the text section.

The symbolic address `sub1` 
stands for the value `0x00400000`, 
the entry point of the first subroutine.
This address is shown in the first red circle.

The symbolic address `sub1add` stands for an address
in the data section.
The value that is  stored at that address
is the value `0x00400000`, the entry point of the first subroutine.
This value is shown in the second red circle.

## Question

What is the address of the second subroutine?
(Hint: look at the program and at the above memory dump.)
