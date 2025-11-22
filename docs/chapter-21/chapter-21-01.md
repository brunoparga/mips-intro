---
sidebar_position: 1
title: "CHAPTER 21 — The Extended Assembler"
---

# CHAPTER 21 — The Extended Assembler

## Content

### Chapter Topics:

- Register mnemonic names
- Pseudoinstructions and the pseudocomputer
- `move`   pseudoinstruction
- `li`   pseudoinstruction
- `la`   pseudoinstruction
- `lw`   pseudoinstruction
- `sw`   pseudoinstruction
- `nop`   pseudoinstruction

# CHAPTER 21 — The Extended Assembler

**The basic assembler creates a view of the processor
one level above raw machine code.**
Machine code uses bit patterns to specify
machine operations,
registers, and addresses.
In basic assembly, you can specify these with symbols.
Each instruction for the basic assembler
corresponds directly to one machine instruction.

**The **extended assembler** creates a view
that is at an even higher level.**
It implements an abstract machine 
that has a much richer instruction
set than the actual MIPS hardware.
Many of the statements accepted by the extended assembler
correspond to several machine instructions.

**SPIM can act as either a basic assembler or an extended assembler.**
Previous chapters explained the basic assembler
so that you could see how actual hardware works.
This chapter makes greater use of the extended
assembler features.

## Question

(Review:) What is a *general purpose register*?
