---
sidebar_position: 1
title: "CHAPTER 23  —  Logic and Math Pseudoinstructions"
---

# CHAPTER 23  —  Logic and Math Pseudoinstructions

## Content

### Chapter Topics:

- Bitwise logic: 
    - `not` pseudoinstruction
- Integer Arithmetic: 
    - `abs`   pseudoinstruction
- `addu`   pseudoinstruction
- `subu`    pseudoinstruction
- `negu`    pseudoinstruction
- `mul`    pseudoinstruction
- `div`    pseudoinstruction
- `divu`    pseudoinstruction
- `remu`    pseudoinstruction
- Rotate Instructions:
    - `rol`   rotate left pseudoinstruction
- `ror`   rotate right pseudoinstruction

# CHAPTER 23  —  Logic and Math Pseudoinstructions

This chapter discusses
additional pseudoinstructions. 
When you write a program using *pseudoinstructions*
it looks to you as if the computer
has a rich set of convenient machine instructions.

In fact,
**these convenient instructions are each implemented
by using basic instructions.**

The extended assembler replaces each pseudoinstruction
with one or more basic instructions.
The basic instructions are then translated into
machine code.

## Question

What is the bitwise **not** of this pattern:

> 0011 1001
