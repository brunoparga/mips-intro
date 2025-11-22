---
sidebar_position: 1
title: "CHAPTER  36 — Objects"
---

# CHAPTER  36 — Objects

## Content

### Chapter Topics:

- Jump Table
- `jalr` instruction
- Dynamically loaded libraries
- Objects, conceptual
- Objects, implementation
- Objects in static memory
- Objects in dynamic memory

For this chapter,
in the SPIM settings menu turn
load and branch delays off, 
turn trap file and pseudoinstructions on.

To start, let us once again look at addresses:

# CHAPTER  36 — Objects

**In
an *object oriented language*,
a collection of related data and subroutines 
are grouped together
into an **object**.**

Programming is done by creating objects
and invoking the objects' subroutines.
(In some languages, subroutines are called **methods**.)
This chapter is an overview of what
objects look like at the implementation level.

## Question

Can a 32-bit word in main storage contain an address?
