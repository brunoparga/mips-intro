---
sidebar_position: 8
title: "ORI Machine Code"
---

ORI Machine Code

## Answer

```mips
[0x00400000]    0x34080fa5      ori  $8, $0, 4005     ori  $8,$0,0x0FA5

```

Yes. How could you miss? The last 16 bits are the immediate operand.

## Content

Below
is the machine code for the instruction.
In the third line the bits have been grouped
into fields that have various functions.

Look this over to get an idea of how it works:

- The left six bits of the instruction are the ****opcode****
      - the bit pattern that specifies the machine operation.
- The next group of five bits specifies the **operand register.**
- The group of five after that specifies the **destination register.**
- The remaining 16 bits are the **immediate operand.**

Documentation for the MIPS shows the fields for each
instruction.
The designers of the MIPS processor decided what information
was needed in a machine instruction and how to arrange it.

**Other machine instructions follow other formats.
See the documentation or a MIPS green card.**


```mips
   3    4    0    8    0    f    a    5    -- machine instruction in hex

0011 0100 0000 1000 0000 1111 1010 0101    -- machine instruction in bits

001101  00000 01000 0000 1111 1010 0101    -- fields of the instruction

ori     $0     $8     0    f    a    5
opcode  oper-  dest  immediate operand     -- meaning of the fields
        and    reg.
        reg. 
                      
ori     $8,  $0,  0x0fa5                   -- assembly language instruction
                                              (Notice that the register numbers
                                               are not in the same order as they
                                               are in the machine instruction).

```

## Question

Here is another `ori` instruction. 
The patterns
that specify the operand register,  the destination register,
and the immediate operand are blank.
Fill in the blanks 
with bit patterns
so the operand register is `$10` , the destination register is 
`$9` ,
and the immediate operand is `0xAFF0`

```mips
001101       
        _ _ _ _ _   _ _ _ _ _  _ _ _ _  _ _ _ _  _ _ _ _  _ _ _ _

ori     $10          $9         a         f        f        0 

     operand        dest           immediate operand
     reg.           reg.

```
