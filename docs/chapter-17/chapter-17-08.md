---
sidebar_position: 8
title: "Symbolic Address"
---

Symbolic Address

## Answer

| Address | Machine Instruction | Assembly Instruction |
| --- | --- | --- |
| 00400000 | 0000 0000 0000 0000 0000 0000 0000 0000 | `sll $0,$0,0` |
| 00400004 | 0000 0000 0000 0000 0000 0000 0000 0000 | `sll $0,$0,0` |
| 00400008 | 0000 0000 0000 0000 0000 0000 0000 0000 | `sll $0,$0,0` |
| 0040000C | 0000 0000 0000 0000 0000 0000 0000 0000 | `sll $0,$0,0` |
| 00400010 | 000010 00 0001 0000 0000 0000 0000 0000 | `j  firstInstruction` |
| 00400014 | 0000 0000 0000 0000 0000 0000 0000 0000 | `sll $0,$0,0` |




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

## Content

How do you know what the high-order four bits of the PC are?
Well, since you have the address of the 
instruction following the jump instruction, you know that its
address is in the PC.
So the high order four bits come from that address.

**Usually the high order four bits of the address of the 
jump instruction and of the one following it are the same.**
But in very rare instances they might be different
(when adding four to the jump instruction's address causes
a carry into the high order bits).

With
some trickery,
a 26-bit field can specify a 32-bit address.
But it is a nuisance to figure out!
If you were doing machine language programming,
that is what you would have to do.
But the assembler does the work for you.
Here is a tiny program:

```mips
## jump.asm
##
      .text
      .globl  main

main: 
      sll    $0,$0,0
      sll    $0,$0,0
      sll    $0,$0,0
      sll    $0,$0,0
      j      main
      addiu $8,$8,1 
      
## End of file

```

**The symbolic address `main`
stands for the address of the first instruction.
The instruction   
`j      main`  
tells the assembler to assemble a machine
instruction with the proper 26-bit field
so that control is transferred to `main`.**

The branch delay slot is filled with an instruction
that increments register `$8`.

## Question

After the loop has executed five times, what value
will be in  register `$8`?
SPIM initializes all registers to zero when a program starts.
