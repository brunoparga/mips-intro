---
sidebar_position: 2
title: "Load and Store"
---

Load and Store

## Answer

A register is **loaded** from memory.

## Content

**The 
 operands for all arithmetic and 
 logic operations are contained in registers.**
To operate on data in main memory, 
the data is first copied
into registers.

- A **load** operation copies data from main
memory into a register.
- A **store** operation 
copies data from a register into  main memory .

**When a word (4 bytes) is loaded or stored the memory address must be
a multiple of four.**
This is called an **alignment restriction**.
Addresses that are a multiple of four are called **word aligned**.
This restriction makes the hardware simpler and faster.

**The `lw` instruction  loads a word into a register from memory.**

**The `sw` instruction  stores a word from a register into memory.**

Each instruction specifies a register and a memory address
(details in a few pages).

## Question

Which of the following addresses are word aligned?

- `0x000AE430`
- `0x00014432`
- `0x000B0737`
- `0x0E0D8844`

Hint: how can you multiply by four in binary?
