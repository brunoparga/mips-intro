---
sidebar_position: 7
title: "Machine Instruction for Load Word"
---

Machine Instruction for Load Word

## Answer

```mips
0x00400060 --- address of data
0x00400000 --- address in $10
$8         --- destination register

```

The instruction is:

```mips
lw $8,0x60($10)
```

## Content

Here
 is the machine code version of the instruction.
**It specifies the *base register*, 
the *destination register*,
and the *offset*.**
It does not directly contain the memory address.


```mips
100011  01010 01000 0000 0000 0110 0000 -- fields of the instruction

lw      $10   $8     0    0    6    0
opcode  base  dest        offset        -- meaning of the fields

lw      $8, 0x60($10)                   -- assembly language


```

Here is how this instruction 
is executed.
Say that register `$10` already contains address 0x00400000.

- The 32-bit address in $10 is:   0x00400000
- The offset is sign-extended to 32 bits:   0x00000060
- The memory address is the 32-bit sum of the above:   0x00400060
- Main memory is asked for data from that address.
- After a one machine cycle delay the data reaches $8.   `$8 = the 4 bytes starting at 0x00400060`

**There is a one machine cycle delay before the data from memory is available.**
Reaching outside of the processor chip into main memory takes time.
But the processor does not wait
and executes one more instruction while the load is going on.

**This is the **load delay slot**.**
The instruction immediately after a `lw` instruction
should not use the register that is being loaded.
Sometimes the instruction after the `lw`
is a no-operation instruction.

## Question

![Picture of the Problem](/Chapter-15/lwProblem.gif)

Look at registers `$12` and `$13` and memory (at right).
Write the instruction  that puts the value 0x00000004 into
register `$12`.

- Register `$12` contains `0xFFFFFFFF`
- Register `$13`  contains `0x00040000`

> ```mips
> lw $,  ($ )
> ```
