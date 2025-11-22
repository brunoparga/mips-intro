---
sidebar_position: 5
title: "Registers and the ALU"
---

Registers and the ALU

## Answer

$0

## Content

![Registers and the ALU](/Chapter-10/aluRegisters.gif)

**The bit pattern 0x00000000 occurs so frequently in machine language
that register `$0` is wired to permanently hold it.**
That bit pattern represents the integer zero, a very common integer.
It also represents a **null**, which is used to mark the end of
character strings and often used in building data structures.

**The 
**arithmetic/logic unit (ALU)**
of a processor performs integer arithmetic 
and logical operations.**
For example, one of its operations is to
add two 32-bit integers.
An integer used as input to an operation
is called an **operand**.
One operand for the ALU is always contained
in a register.
The other operand may be in a register or may be
part of the machine instruction itself.
The result of the operation is put into a
general purpose register.

**Machine instructions that use the ALU 
specify four things:**

- The operation to perform.
- The the first operand (contained in a register).
- The second operand (often contained in a register).
- The register that receives the result.

The picture shows a 32-bit addition operation.
The operands come from register `$8` and from register `$9`.
The result is put in register `$10`.
Here is how that instruction is
written as assembly language:

```mips
addu    $10,$8,$9 

```

## Question

Here is another instruction that involves the ALU:

```mips
subu    $25,$16,$17 

```

Identify the following:

- The operation:
- The location of one operand:
- The location of the other operand:
- The destination of the result:
