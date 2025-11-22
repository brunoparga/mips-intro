---
sidebar_position: 4
title: "Practice"
---

Practice

## Answer

No. Additional logic is needed to create a useful loop.

On QtSPIM, if a program gets caught in a loop, click the "stop" icon under the "Simulator" menu.

## Content

Here
is another schematic program.
The instructions are just sketched in
as place holders.
Don't pay much attention to them,
but look at the jump instruction and its target.

The target of the jump instruction is the address
`0x00450000`.

![Machine Cycle](/Chapter-17/MachineCycle.gif)



| PC at top of cycle | Instruction
(details omitted) | PC just after this 
instruction has executed
(at the bottom of the cycle) |
| --- | --- | --- |
| ............... | ........... | 00450000 |
| 00450000 | load | 00450004 |
| 00450004 | load | 00450008 |
| 00450008 | add | 0045000C |
| 0045000C | store | 00450010 |
| 00450010 | jump 0x00450000 | 004500 |
| 00450014 | no-op | 004500 |

## Question

Fill in the blanks.
