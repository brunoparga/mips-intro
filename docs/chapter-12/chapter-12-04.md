---
sidebar_position: 4
title: "Shifting in Place"
---

Shifting in Place

## Answer

```mips
        ori      $8, $0, 0x6F       # put bit pattern register into $8
        sll      $8, $8, 2          # shift left logical by two

```

Yes, this is OK.

## Content

When  an ALU operation is performed:

- **data is copied from the register(s) into the ALU,**
- **the ALU does the operation**
- **the result is written to the designated result register.**

There is no problem when an operand register is also the result register
because the operand data was transferred to the ALU in the first step,
leaving the register open to receive the result.

The assembly language statement in the example program is:

```mips
sll      $9, $8, 2          # shift left logical by two

```

Here is the machine instruction corresponding to  that statement:


```mips
   0    0    0    8    4    8    8    0    -- machine instruction in hex

0000 0000 0000 1000 0100 1000 1000 0000    -- machine instruction in bits

000000 00000 01000 01001  00010 000000    -- fields of the instruction

opcode ----- source dest   shft  2ndary    -- meaning of the fields

ALUop          $8    $9     2    sll       -- fields decoded

```

The `sll` operation is designated 
by the 6-bit zero at the beginning
of the instruction and the 6-bit zero at the end.
The remaining fields give the source register (`$8` in this case), 
the destination
register (`$9` in this case), 
and the number of positions to shift (2 in this case).
Notice that in the machine
language the register designators are reversed
from how they occur
in the assembly language.

The five zero bits after the opcode are not used.
All MIPS instructions are 32 bits.
These bits are arbitrarily given the value zero.

## Question

Study the above machine instruction.
Write the machine instruction for 
*shift-left-logical the pattern in $0 
by zero positions and leave the result in $0*.
Here is the instruction in assembly language:



```mips
sll      $0, $0, 0          # fun machine instruction

```

Write your machine instruction (as a bit pattern) here:



Hint: on the midterm, I expect you to write the
32-bit pattern for this instruction without hesitation!
Memorize it now!
