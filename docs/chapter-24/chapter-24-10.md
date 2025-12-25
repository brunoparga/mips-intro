---
sidebar_position: 10
title: "Table of Set Instructions"
---

Table of Set Instructions

## Answer

Yes

## Content

Here
is a table of set instructions.
Most of them are pseudoinstructions.

**The `t` operand can be
an immediate operand.
The `Imm` operand must
be an immediate operand.**

The extended assembler outputs the
correct basic instructions depending on
the mnemonic and the operands.
Sometimes there are several ways in
which the same basic instructions can
be specified.

Some of the instructions are
intended for integers expressed in unsigned binary,
other instructions are for integers in two's complement,
and for others it makes no difference.




| Mnemonic | Operands | Description | signed or
unsigned? |
| --- | --- | --- | --- |
| seq | d,s,t | set d if s==t |   |
| sge | d,s,t | set d if s&gt;=t | signed |
| sgeu | d,s,t | set d if s&gt;=t | unsigned |
| sgt | d,s,t | set d if s&gt; t | signed |
| sgtu | d,s,t | set d if s&gt; t | unsigned |
| sle | d,s,t | set d if s&lt;=t | signed |
| sleu | d,s,t | set d if s&lt;=t | unsigned |
| slt | d,s,t | set d if s&lt; t | signed |
| slti | d,s,Imm | set d if s&lt; Imm | signed |
| sltu | d,s,t | set d if s&lt; t | unsigned |
| sltiu | d,s,Imm | set d if s&lt; Imm | unsigned |
| sne | d,s,t | set d if s != t |   |

## Question

Do you think that the following two pseudoinstructions
translate into the same basic instructions?

> `sltu   $t4,$v0,45`

and

> `sltui   $t4,$v0,45`
