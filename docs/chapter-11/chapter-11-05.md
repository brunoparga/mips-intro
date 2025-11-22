---
sidebar_position: 5
title: "General OR Immediate Instruction"
---

General OR Immediate Instruction

## Answer

No. Because the 16-bit pattern is **zero**-extended to 32 bits,
the resulting pattern is never a two's-complement negative integer.

## Content

```mips
ori  d,s,const     # register d <-- bitwise OR of const
                   #                with the contents of register $s
                   #                const is 16-bits, so
                   #                0x0000 ... const ... 0xFFFF

```

**The `ori` instruction 
can be used with any register as an operand.**
Now the 32-bit pattern in the operand register are
ORed with the zero-extended 32 bit pattern of the immediate operand.

The parts of the instruction must appear in the correct order,
and `const` must be within the specified range.
If the immediate operand in
the assembly language shows less than 16 bits
(as does 0x2 in the previous example) 
then the assembler expands it to the required sixteen bits.

If the assembly language
specifies more than sixteen bits,
then the assembler writes an error message.

**The `const` part of the assembly language instruction
can be written as a positive decimal or a hexadecimal constant.**
The assembler translates the constant into a 16-bit pattern in
the machine instruction.
The following two assembly language instructions
translate into the same machine language instruction:

```mips
ori  $5,$4,0x10
ori  $5,$4,16

```

The immediate operand of the machine instruction is always 16 bits,
regardless of how the assembly language statement was written.
And at run time, the immediate operand is always zero-extended to 32 bits
to match the size of the operand register.

## Question

Do the  two assembly instructions in each row assemble into the same or different
machine language?  Put an X in the correct box in each row.


| Instruction A | Instruction B | Same? | Different? |
| --- | --- | --- | --- |
| `ori  $4,$0,0x8` | `ori  $4,$0,8` |   |   |
| `ori  $4,$0,0x32` | `ori  $4,$0,50` |   |   |
| `ori  $3,$10,26` | `ori  $3,$0,26` |   |   |
| `ori  $9,$10,0x000` | `ori  $9,$10,0` |   |   |
| `ori  $10,$9,45` | `ori  $10,$9,45` |   |   |
| `ori  $5,$5,0x21` | `ori  $5,$5,21` |   |   |
