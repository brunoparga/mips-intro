---
sidebar_position: 2
title: "Branch on Less than Zero,  Branch on  Greater than Zero"
---

Branch on Less than Zero, Branch on  Greater than Zero

## Answer

The previous branch instructions
compare the bit patterns in two registers:

```mips
beq  u,v,addr   # Branch if register $u == register $v
                # A branch delay slot follows the instruction. 

```


```mips
bne  u,v,addr   # Branch if register $u != register $v
                # A branch delay slot follows the instruction. 

```

Nothing is assumed about what the bit patterns represent.
The processor can easily determine if two patterns are the same, or not,
no matter how the patterns are being used.

## Content

MIPS
has several ways to implement relational operators.
Here are two more conditional branch instructions.
**These instructions compare the contents of a register to zero.
The register's contents is assumed to be in **two's complement** representation.**


```
bltz   s,label        #  Branch if the two's comp. integer
                      #  in register s is < 0
                      #  A branch delay slot follows the instruction.

```


```
bgez   s,label        #  Branch if the two's comp. integer
                      #  in register s is >= 0
                      #  A branch delay slot follows the instruction.

```


The first instruction branches if the integer
is strictly less than zero.
The other branches if the integer is greater than 
or equal to zero.

Both of these instructions are followed by a branch delay slot.
This means that the instruction in that slot will always execute,
and the branch (if it happens) will not happen until after that
instruction finishes.

## Question

Here is a statement in C (or in Java):



```
if ( !( a < 0 ) ) { ... }

```

 

Rewrite it without using the not operator (the !).



```
if ( a  0  ) { ... }

```
