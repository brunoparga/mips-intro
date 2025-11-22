---
sidebar_position: 8
title: "Storing Halfwords"
---

Storing Halfwords

## Answer

It is a multiple of two. 
Such addresses have a zero in the low-order bit.

## Content

**Only 
one store halfword instruction is needed.**
The low-order two bytes of the designated register
are copied to memory, no matter what the upper
two bytes are.
Of course, the register is not changed when its data is copied to memory.

```mips
sh  t,off(b)    

# Halfword at off+b ←  low-order 
# two bytes from $t.
# b is a base register. 
# off is 16-bit two's complement.

```

**MIPS arithmetic instructions that use registers
always use full registers,**
regardless of
how data was
loaded into the register.
For example, an `addu`
instruction does a full 32-bit addition
even if one of the operand registers was loaded with
`lh`
(or `lb`).

## Question

Perform these two addition problems:

```
 0110 1110           0000 0000 0000 0000 0000 0000 0110 1110
 1100 0110           0000 0000 0000 0000 0000 0000 1100 0110
 
    
 

```
