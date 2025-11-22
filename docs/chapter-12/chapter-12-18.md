---
sidebar_position: 18
title: "Program So Far"
---

Program So Far

## Answer

```mips
sll   $11,$11,26    # left shift $11 by 26 places

```

## Content

Bit
position 5 contains the right-most bit of
the six-bit opcode.
It must be shifted into position 31, and
31-5 = 26.

Here is a run of the program so far.
The source code is seen at the right in the window.

![SPIM picture of the Registers](/Chapter-12/firstShift.gif)

Great! Now we have the correct bit pattern placed
in the correct 6-bit field.
Only one problem: it's in the wrong register.
The instruction is supposed to be in register `$25`.

## Question

Think of an assembly instruction that will put the opcode
into register `$25`.
Here is a start:


```mips
or   $25,,    # move opcode into target register

```
