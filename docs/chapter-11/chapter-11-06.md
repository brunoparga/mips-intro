---
sidebar_position: 6
title: "Example"
---

Example

## Answer

| Instruction A | Instruction B | Same? | Different? | Comment |
| --- | --- | --- | --- | --- |
| ori  $4,$0,0x8 | ori  $4,$0,8 |   |   | 0x8 and 8
 specify same 16-bit pattern:
0000 0000 0000 1000 |
| ori  $4,$0,0x32 | ori  $4,$0,50 |   |   | 0x32 and 26
 specify same 16-bit pattern:
0000 0000 0011 0010 |
| ori  $3,$10,26 | ori  $3,$0,26 |   |   | the operand registers differ |
| ori  $9,$10,0x000 | ori  $9,$10,0 |   |   | 0x000 and 0
 specify same 16-bit pattern:
0000 0000 0000 0000 |
| ori  $10,$9,45 | ori  $10,$9,45 |   |   | same instruction |
| ori  $5,$5,0x21 | ori  $5,$5,21 |   |   | different 16-bit
 immediate operands |

## Content

**The destination register can be any general purpose register.**
But it makes no sense to use register `$0`, 
because that register always contains all zero bits.

```mips
# mistaken attempt to change $0
ori  $0,$9,0x32    

```

The
assembler part of the SPIM simulator does not
write an error message for the above mistaken instruction.
But the instruction does not change register zero when executed.

**Here is a tiny program that bitwise ORs two patterns.**
First one pattern is loaded into register `$8` , then
the register is ORed with an immediate operand.
The result goes into register `$10` .

Soon we will assemble and run the program.
You can do this now, if you want
(remember you can use copy-and-paste from this page to your
text editor).
First, predict the result.


```mips
## Program to bitwise OR two patterns 
        .text
        .globl  main

main:
        ori      $8,$0,0x0FA5       # put first pattern into register $8
        ori     $10,$8,0x368F       # or ($8) with second pattern.  Result to $10.

## End of file

```

## Question

Here are the two patterns, written both in  bit patterns and in hex.
Perform the bitwise OR operation.
(Do it column-wise with the bits, then translate the answer to hex).

```
0000 1111 1010 0101           0FA5 
0011 0110 1000 1111           368F 
-------------------           ----
 

```
