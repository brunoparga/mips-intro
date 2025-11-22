---
sidebar_position: 2
title: "Loading a Single Byte"
---

Loading a Single Byte

## Answer

A byte

## Content

**There
are two instructions that
load a byte from memory.**
The address of the byte is calculated at run
time by adding an offset to a base
register (just as with the load word 
and store word instructions).
The instructions differ in how the
8-bit byte is put into the 32-bit
register.

```mips
lb t,off(b)  

# $t ←  Sign-extended byte 
# from memory address b+off
# b is a base register. 
# off is 16-bit two's complement.

```

**The `lb` instruction
loads the byte from memory into the low order eight bits
of the register.**
These are bits 0-7 of the register.
Then it
**copies bit 7 to bits 8-31 of the register** 
(all bits to the left of bit 7).

Another way to say this is that the  `lb` instruction
loads the register with a 32-bit **sign extended** version of
the byte at the designated address.

The address in memory does not have any
alignment restrictions.

Use
the `lb`  instruction when the byte is regarded as an
8-bit signed integer in the range -128 ... +127 and you want
a 32-bit version of the same integer.

**The `lbu` instruction
fills bits 8-31 of the register with zeros.**
Use this instruction when the byte is regarded as a
ascii character or 8-bit unsigned integer.

Another way to say this is that the  `lbu` instruction
loads the register with a 32-bit **zero extended** version of
the byte at the designated address.

```mips
lbu t,off(b)

# $t ←  Zero-extended byte 
# from memory address b+off
# b is a base register. 
# off is 16-bit two's complement.

```

The address in memory does not have any
alignment restrictions.

## Question

- Memory at 0x10000007 contains the byte 0xA4
- Register `$8` contains 0x10000000



What is put in register `$10` when the following
instruction is executed:



```mips
lb    $10,7($8)

```



```
  

```



What is put in register `$12` when the following
instruction is executed:



```mips
lbu  $12,7($8)

```



```
  

```
