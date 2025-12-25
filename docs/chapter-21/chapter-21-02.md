---
sidebar_position: 2
title: "Register Mnemonics"
---

Register Mnemonics

## Answer

A register is an electronic device that holds bit patterns.
A general purpose register is a register that is visible to
assembly language.
The *floating point registers*,
although visible to assembly language,
are not regarded as general purpose registers.

## Content

| Register
 Number | Mnemonic
 Name | Conventional Use |   | Register
 Number | Mnemonic
 Name | Conventional Use |
| --- | --- | --- | --- | --- | --- | --- |
| $0 | $zero | Permanently 0 |   | $24, $25 | $t8, $t9 | Temporary |
| $1 | $at | Assembler Temporary |   | $26, $27 | $k0, $k1 | Kernel |
| $2, $3 | $v0, $v1 | Value returned 
by a subroutine |   | $28 | $gp | Global Pointer |
| $4-$7 | $a0-$a3 | Subroutine Arguments |   | $29 | $sp | Stack Pointer |
| $8-$15 | $t0-$t7 | Temporary |   | $30 | $fp | Frame Pointer |
| $16-$23 | $s0-$s7 | Saved registers |   | $31 | $ra | Return Address |

Although 
the registers are called "general purpose",**it is conventional in software 
to use specific registers for specific purposes.**
This is not required by hardware.
It is just a way for programmers to avoid confusion
by establishing conventions.**The *extended assembler* allows you to use 
mnemonic  names for registers that show
how they are conventionally used.**

For example, registers `$8` 
through `$15` are conventionally used to
hold temporary values.
Mnemonic names for these registers are 
`$t0` through `$t7`.

As
far as *hardware* is concerned, 
only registers `$0` and `$31`
are different from the rest
(`$0` is always full of zeros and `$31` is automatically used 
by some subroutine linkage instructions to hold the return address).
The remaining registers are electronically identical.
It is a *software convention* to use different sets
of registers for different purposes.

## Question

Are programs written in extended assembly code executed on the same MIPS processor we have been looking at?
