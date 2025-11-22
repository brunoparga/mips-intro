---
sidebar_position: 11
title: "Alternate Sequence"
---

Alternate Sequence

## Answer

```mips
lui $13, 0x0060
ori $13, $13, 0x5000
lw  $12, 0xC($13)

```

## Content

The
 above `ori` instruction "fills in" the
lower 16 bits of register `$13` by doing the following:

```mips
$13 after lui           :  0000 0000 0110 0000 0000 0000 0000 0000
zero-extended imm. op.  :  0000 0000 0000 0000 0101 0000 0000 0000
result of bitwise OR    :  0000 0000 0110 0000 0101 0000 0000 0000

```

Other sequences of instructions also will work.
Choose whichever method works best in the context of
the rest of the program.

**Because the "upper half" of an address is 16 bits and
the offset of the `lw` can hold the 16 bit "lower half,"
the two in combination can
address any byte of memory.**

The problem was to load `$12` with the word at address
0x0060500C.
Here is another way to do it:
Split the address into halves: 0x0060 and 0x500C.
Load the top half into `$13` and use the bottom half
as the offset.

```mips
lui $13, 0x0060
lw  $12, 0x500C($13)

```

Since the `ori` instruction is used often with
the destination register as one of the operands,
there is a 
**shorthand instruction
in assembly language.**

```mips
ori $d,const  # assembles to 
              # the same machine
              # instruction as 
              # ori $d,$d,const

```

## Question

Do the following two assembly instructions assemble to the
same machine instruction?

```mips
ori  $10,$10,0x00C4

ori  $10,$0, 0x00C4

```
