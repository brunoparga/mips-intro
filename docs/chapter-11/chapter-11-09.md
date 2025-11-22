---
sidebar_position: 9
title: "Machine Instructions Compared"
---

Machine Instructions Compared

## Answer

```mips
       0 1 0 1 0  0 1 0 0 1  1 0 1 0  1 1 1 1  1 1 1 1  0 0 0 0
001101 _ _ _ _ _  _ _ _ _ _  _ _ _ _  _ _ _ _  _ _ _ _  _ _ _ _

ori     $10          $9         a         f        f        0 

       operand      dest           immediate operand
       reg.         reg.

```

## Content

Here again is the `ori` machine instruction:

```mips
   3    4    0    8    0    f    a    5    -- machine instruction in hex

001101  00000 01000 0000 1111 1010 0101    -- fields of the instruction

opcode  oper  dest  immediate operand      -- meaning of the fields
        -and  reg.
        reg.   

ori     $0      $8     0    f    a    5


```

**The layout of this machine instruction is different from the
`addu` instruction we looked at in chapter 10:**

```mips
   0    1    0    9    5    0    2    1    -- machine instruction in hex

000000 01000 01001 01010 00000 100001      -- fields of the instruction

opcode oprnd oprnd dest  ----- 2ndary      -- meaning of the fields

ALUop   $8    $9   $10           addu

```

Both instructions are 32 bits wide (as are all MIPS32 instructions).
**The first six bits are the opcode**, which specifies an ALU operation.
The `addu` instruction further specifies the operation
in the **last six bits, the **secondary opcode.****

When the instruction is executed the two operands come from registers
(`$8`) and (`$9`). 
The result is put in a register (`$10`, here.) 
The `addu` instruction does not have an immediate operand.

## Question

Here is an `addu` instruction in assembly language:

```mips
addu   $10, $4, $5

```

Assemble the instruction into a machine instruction.
Fill in the blanks 
with bit patterns
so one operand register is `$4` , 
the other operand register is `$5` , 
and the destination register is 
`$10`.

```mips
000000        00000 100001  
         _ _ _ _ _  _ _ _ _ _  _ _ _ _ _    

addu     $4          $5        $10         unused 2nd ary
        operand      operand    dest.             op code
        reg.         reg.       reg.        

```

Make sure that the machine instruction is 32 bits wide.
Note that the registers are in a different order than in the
assembly language instruction.
