---
sidebar_position: 7
title: "Register Use Conventions"
---

Register Use Conventions

## Answer

```mips
000000 01000  01001 0 1 0 1 1 00000 100001

ALUop   $8    $9    $11             addu
       op1   op2    dest

```

Congratulations! 
(if you correctly answered the question).
You have just done some machine language programming.
Who needs that old assembler, anyway?

## Content

| Register
 Number | Mnemonic
 Name | Conventional Use |
| --- | --- | --- |
| $0 | zero | Permanently 0 |
| $1 | $at | Assembler Temporary (reserved) |
| $2, $3 | $v0, $v1 | Value returned by a subroutine |
| $4-$7 | $a0-$a3 | Arguments to a subroutine |
| $8-$15 | $t0-$t7 | Temporary
 (not preserved across a function call) |
| $16-$23 | $s0-$s7 | Saved registers
 (preserved across a function call) |
| $24, $25 | $t8, $t9 | Temporary |
| $26, $27 | $k0, $k1 | Kernel (reserved for OS) |
| $28 | $gp | Global Pointer |
| $29 | $sp | Stack Pointer |
| $30 | $fp | Frame Pointer |
| $31 | $ra | Return Address
(Automatically used in some instructions) |

****General purpose registers** are those that assembly language
programs work with (other than floating point registers).**
The general purpose registers are numbered `$0` through `$31`.
However, by convention (and sometimes by hardware) 
different registers are used for different purposes.

In addition to a number `$0` through `$31`,
**registers have a mnemonic name 
(a name that reminds you of its use).**
For example register `$0` has the mnemonic name *zero*.
The table shows the 32 registers and their conventional use.

Registers `$0`  and `$31` are the only two that
behave differently from the others.

**Register `$0` is permanently wired to contain zero bits.**

**Register `$31` 
is automatically used by subroutine linkage
instructions to hold the return address.**

If this looks totally cryptic, don't worry.
Don't try to memorize this.
You will get used to what you need to know
after writing a few programs.

## Question

A program has just calculated an important value which is
contained in register `$8`.
It copies this value to register `$0`. Is this wise?
