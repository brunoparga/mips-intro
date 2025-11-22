---
sidebar_position: 2
title: "not  Pseudoinstruction"
---

not Pseudoinstruction

## Answer

`NOT( 0011 1001 ) == 1100 0110`

## Content

| NOR Operation on Bits |
| --- |
| first operand | 0 | 0 | 1 | 1 |
| second operand | 0 | 1 | 0 | 1 |
|   |   |
| OR | 0 | 1 | 1 | 1 |
| not OR | 1 | 0 | 0 | 0 |


**The `not` pseudoinstruction
changes each bit in a register.**

Each 1 is changed to a 0 and each 0 is changed to a 1.
(This is sometimes called "flipping" each bit
or "reflecting" each bit.)


```
not   d,s  
# Load register d with the 
# bitwise not of register s.
# All 32 bits are changed. 
# (pseudoinstruction)

```


This is a pseudoinstruction.
The assembler translates it
into a single
basic assembly instruction,
a `nor`
instruction.
The nor operation is given in the table.
The **nor** of two bits is equivalent to
applying **not** to the 
**or** of the bits.
**The `nor`
instruction uses two registers as operands
and writes the result to a third register.**


```mips
nor  d,s,t  
# $d <— bitwise 
#  NOR $s with $t.
# (basic instruction)

```


Look at the first two columns of the table
where the first operand is zero.
The **nor** of the two operands is the
**not** of the second operand.

## Question

Translate the following:



```mips
not $s1,$t5

```



into a `nor` instruction:



```
nor  , , 

```
