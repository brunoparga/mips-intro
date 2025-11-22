---
sidebar_position: 1
title: "CHAPTER  31 — Floating Point Arithmetic on MIPS"
---

# CHAPTER  31 — Floating Point Arithmetic on MIPS

## Content

### Chapter Topics:

- Floating point registers
- Loading and storing floating point registers
- Single and (some) double precision arithmetic
- Data movement instructions
- Reading and writing floating point

# CHAPTER  31 — Floating Point Arithmetic on MIPS

**MIPS
chips use the IEEE 754 floating point standard,**
both the 32 bit and the 64 bit versions.
However these notes cover only the 32 bit instructions.
The 64 bit versions are similar.

SPIM Settings for this chapter: set SPIM to allow pseudoinstructions,
disable branch delays, and disable load delays.

## Question

The 64 bit (double precision) floating point numbers are better than
32 bit (single precision).
But how are they better?

- Increased Precision?
- Greater Range of values covered?
- Both?
