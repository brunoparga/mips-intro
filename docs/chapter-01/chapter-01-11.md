---
sidebar_position: 11
title: "Architecture vs. Implementation"
---

Architecture vs. Implementation

## Answer

No.  Both processors have the same range of logical addresses,
but there need not be actual RAM behind each address.

## Content

The 
*architecture* of a computer is a logical description of
its components and its basic operations.

**The MIPS family of computers all have the same
assembly-level architecture.**
This means that all MIPS machines can be programmed
using the same assembly language.
**The actual electronics that implement the
architecture may differ greatly between versions of the chip.**

This is analogous to "car architecture".
Two Jaguars may appear the same to a driver
(same styling, same user controls, same operation)
but have different components under the hood.
The architecture is the same, but the implementation
(and performance) is different.
Keep this in mind as you visit the used car lots in
Silicon Valley.

The architecture of a MIPS is different from the architecture
of a Pentium.
Both are Von Neumann machines, so they look the same in general,
but the details of operation are completely different.
They have different machine languages, and hence different
assembly languages.

## Question

(Hard Thought Question:)
Must a machine language program
be run on an actual processor chip (i.e., on hardware)?
Hint: Think about Java.
