---
sidebar_position: 1
title: "CHAPTER 17 — Jump and Branch Instructions"
---

# CHAPTER 17 — Jump and Branch Instructions

## Content

### Chapter Topics:

- *Jump Instruction:*
    - `j` instruction (jump)
- *Conditional Branch Instructions:*
    - `beq` instruction (branch equal)
- `bne` instruction (branch not equal)

# CHAPTER 17 — Jump and Branch Instructions

**The
power of computers
is their ability to repeat actions
and to alter their operation
depending on data.**
Modern programming languages express
these abilities using control structures.
Repeated action (iteration) is done with a
`while` structure.
Alternative control paths (alternation) is done with an
`if-then-else` structure.

The machine instructions of the processor do not 
have these structures, nor does
assembly language.
**In assembly language you must build these structures
out of  basic assembly instructions.**
These basic instructions are the
*jump* instructions and the
*conditional branch instructions*.

## Question

When a program is executing,
does each machine instruction
have an address in main memory?
