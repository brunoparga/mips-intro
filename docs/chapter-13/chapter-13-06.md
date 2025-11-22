---
sidebar_position: 6
title: "Run of the Program"
---

Run of the Program

## Answer

No. Operand registers are not changed
unless one is also the destination register.

## Content

![Run of the Program](/Chapter-13/addSome.gif)


**Here 
is a run of the program.**
The results are as expected.
The source code is shown at the right of the text section.
In the middle column of the text section
the decimal equivalents of
the immediate operands is shown in the instructions.
The registers are shown at the left.

**To express an immediate operand using decimal
notation omit the leading "0x".**
The following puts the same bit pattern in the 
registers as the previous assembly language:

```mips
ori      $8, $0, 171  # put 171 into $8 
                      #(this is 0xAB)
ori      $9, $0,  85  # put  85 into $9 
                      #(this is 0x55)
addu     $10,$9,  $8  # $10 gets sum

```

Of course,
the immediate operand in the machine instruction
is a 16-bit pattern.
The assembler allows you to specify this pattern
using the hexadecimal pattern name,
or a decimal integer that is converted into
a 16 bit pattern.

**The job of the assembler is to construct machine instructions
based on the assembly language in the source file.
Bit patterns in the machine instructions may be specified in a
variety of ways.**

The SPIM display shows your source code after the `;` in the right of the display.
It shows main storage addresses inside brackets `[]`,
followed by the 32-bit machine instruction that starts at the address.
Then it translates from machine instructions back to an equivalent machine language statement
shown in the middle column.  
Immediate operands are shown in their equivalent decimal here, which may not be what you wrote.

Expressed in hex, the program computes the pattern 0xAB + 0x55 = 0x100.
The register display shows this in register `R10`.

Expressed in decimal, the program computed 171 + 85 = 256.
**Click on the "Registers" tab in the SPIM display to change the display to decimal.**
Of course, this just changes the display. 
The registers continue to hold the same bit patterns as before.

## Question

(Review:)  Can  a negative `const`
be used with the instruction:

```mips
ori  $d,$0,const
```
