---
sidebar_position: 4
title: "Branch Instructions"
---

Branch Instructions

## Answer

Use "less than" with the operations reversed.

## Content

| Instruction | Operation |
| --- | --- |
| `bc1t label` | branch to   `label`  if the coprocessor 1 condition bit is true |
| `bc1f label` | branch to   `label`   if the coprocessor 1 condition bit is false |

**The floating point branch instructions inspect the condition bit in the coprocessor.**

- The **bc1t** instruction takes the branch if the bit is true (==1).
- The **bc1f** instruction takes the branch if the bit is false (==0).

These are the only two floating point branch instructions.

The 
branch instructions have a one instruction branch delay.
Hardware requires a `nop` instruction
after each branch instruction.
For this chapter, let us not bother with this.
When running the programs with SPIM, disable branch delays in the
settings menu.

## Question

Where does execution of the `bc1t` instruction take place?
In the FPU or the CPU?
