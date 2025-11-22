---
sidebar_position: 6
title: "Machine Code"
---

Machine Code

## Answer

```mips
subu    $25,$16,$17 

```

- The operation: subtraction of two 32-bit integers
- The location of one operand: register $16
- The location of the other operand: register $17
- The destination of the result: register $25

At run time: Register $25  is set to (Register $16) - (Register $17)

## Content

On some processors (such as the VAX) the ALU
can operate directly on data contained in main memory.
However, this requires extra data paths and control
logic and slows down execution.**On the MIPS, operands for the ALU and the destination
for the result are usually registers.**

Here is the assembly language for the add instruction:

```mips
addu    $10,$8,$9 

```

Here is the machine code it translates into:

```
0x01095021

```

Here is that as a bit pattern:

```
0000 0001 0000 1001 0101 0000 0010 0001

```

Here is the bit pattern arranged into different groups.
Under each group is what the pattern means as a machine
instruction.
(A group of bits that is part 
of a larger bit pattern
is often called a **field**).
Each field of a machine instruction has a
specific function.


```mips
  0    1    0    9    5    0    2    1     -- machine instruction in hex

0000 0001 0000 1001 0101 0000 0010 0001    -- machine instruction in bits
                                                                                                                                                                                                       
000000 01000 01001 01010 00000 100001      -- fields of the instruction

opcode oprnd oprnd dest  ----- 2ndary      -- meaning of the fields

ALUop   $8    $9   $10           addu

```


Inspect the groups until you see how the instruction specifies
the four things:

- the **operation**
- the register that contains **operand 1**
- the register that contains **operand 2**
- the register that is the destination of the **result.**

A machine instruction consists of fields
that specify a machine operation
and other fields that designate the data.

**The 12 bits that specify the 
`addu` 
operation are split into two groups.
The first group is called the **opcode** and
the second group is called the **secondary opcode**.**

The register numbers are coded as binary integers.
Some bits of the instruction are left as zero.
You have to look at MIPS documentation to figure 
all this out.

**Notice that the order of the registers in the machine
instruction is not the same order as in the assembly language statement.**

## Question

Here
 is another machine instruction, but the pattern
that specifies the destination is blank.
Fill it in so the destination is register $11.

```mips
000000 01000  01001 _ _ _ _ _ 00000 100001

ALUop   $8    $9    $11             addu
       op1   op2    dest

```
