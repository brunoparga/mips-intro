---
sidebar_position: 4
title: "Table of Branch Instructions"
---

Table of Branch Instructions

## Answer

```mips
b  label     ==     beq  $0,$0,offset

```

## Content

Here
is a table of branch instructions.
There are additional branch instructions used for
subroutine linkage that have been omitted.
Some instructions assume 32-bit two's complement data;
others assume 32-bit unsigned data.
Some instructions don't assume any data format.

**The first operand **s** must be a register.
The second operand **t** may be a register or an
immediate operand**
(the extended assembler will generate the correct basic instructions
depending on which you choose).

**The **label** designates an address that can be reached by adding
a 18-bit, sign-extended integer to the PC.**
The 18 bits come from an immediate operand (shifted left two positions)
of the machine instruction.
This means the branch target must be **within plus or minus 128K from the current instruction.**

Some of the pseudoinstructions use the assembler temporary register
(`$at`, 
or register 
`$1`) 
in the one or two basic instructions they
are translated into.



| Mnemonic | Operands | Description | signed or
unsigned? | Mnemonic | Operands | Description | signed or
unsigned? |
| --- | --- | --- | --- | --- | --- | --- | --- |
| b | label | branch |   | beq | `s,t,label` | branch if s==t |   |
| beqz | `s,label` | branch if s==0 |   | bge | `s,t,label` | `branch if s>=t` | signed |
| bgeu | `s,t,label` | `branch if s>=t` | unsigned | bgez | `s,label` | `branch if s>=0` | signed |
| bgt | `s,t,label` | `branch if s>t` | signed | bgtu | `s,t,label` | `branch if s>t` | unsigned |
| bgtz | `s,label` | `branch if s>0` | signed | ble | `s,t,label` | `branch if s<=t` | signed |
| bleu | `s,t,label` | `branch if s<=t` | unsigned | blez | `s,label` | `branch if s<=0` | signed |
| blt | `s,t,label` | `branch if s<t` | signed | bltu | `s,t,label` | `branch if s<t` | unsigned |
| bltz | `s,label` | `branch if s<0` | signed | bnez | `s,label` | branch if s != 0 |   |
| bne | `s,t,label` | branch if
 s != t |   | != means not equal |

## Question

What format of data is assumed for the  `bne` (branch not equal)
instruction?
