---
sidebar_position: 10
title: "Conditional Branches"
---

Conditional Branches

## Answer

No. You can build unending loops (infinite loops)
with it.
But additional instructions are needed for  
`while` loops
and for `if-then-else` structures.

## Content

```mips
beq  u,v,addr   # if register $u == register $v
                #     PC  ← addr 
                #     (after a delay of one machine cycle.)
                # else
                #     no effect.

```

**A
**conditional branch** instruction
branches to a new address only if a
certain condition is true.**
Usually the condition
is about the values in two registers.
The
 **beq** 
(branch on equal) instruction
branches if the bit patterns in two registers are identical.

The bit patterns in two registers are compared.
If the bit patterns are the same, 
the PC will be changed to the branch address after 
a one machine cycle delay.
Otherwise, nothing happens.
A branch delay slot follows this instruction,
just as for a jump instruction.

## Question

Do the bit patterns in the two registers represent integers?
