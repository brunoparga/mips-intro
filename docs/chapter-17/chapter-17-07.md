---
sidebar_position: 7
title: "Jump Practice"
---

Jump Practice

## Answer

No. Addresses are 32-bit patterns, machine instructions are 32-bit
patterns, and many data are 32-bit patterns. 
There is no way to tell them apart, except by context.
Here is an example. Say that this bit pattern got fetched
as an instruction: `0x00000000.`
Is this the address of the first byte of memory,
or the `sll $0,$0,0` instruction?

## Content

**The
following  illustrates how the jump instruction is constructed.**
For simplicity, all instructions other than the jump instruction are
no-ops.
The jump instruction jumps to the first instruction of the program.
The very last instruction fills the delay slot.

**The left-most six bits of the `j`
machine instruction are the opcode.
You need to decide if the next 26 bits are correct.**
Do this by filling in the blanks of the question.
(Copy-and-paste works well for this.)



| Address | Machine Instruction | Assembly Instruction |
| --- | --- | --- |
| 00400000 | 0000 0000 0000 0000 0000 0000 0000 0000 | `sll $0,$0,0` |
| 00400004 | 0000 0000 0000 0000 0000 0000 0000 0000 | `sll $0,$0,0` |
| 00400008 | 0000 0000 0000 0000 0000 0000 0000 0000 | `sll $0,$0,0` |
| 0040000C | 0000 0000 0000 0000 0000 0000 0000 0000 | `sll $0,$0,0` |
| 00400010 | 000010 00 0001 0000 0000 0000 0000 0000 | `j  firstInstruction` |
| 00400014 | 0000 0000 0000 0000 0000 0000 0000 0000 | `sll $0,$0,0` |

## Question

| 1. | Write the jump address 
0x00400000 as 32 bits |   |
| --- | --- | --- |
| 2. | Write the 26-bit field
 of the jump instruction: |   |
| 3. | Shift it left two positions: |   |
| 4. | What are the high-order 
four bits of the PC? |   |
| 5. | Copy (4) to the left of (3): |   |
| 6. | Is (5) the same as (1)? |   |
