---
sidebar_position: 2
title: "Branch Equal to Zero"
---

Branch Equal to Zero

## Answer

A conditional branch
tests a condition then changes the PC if the condition is true, for example: 
 
 
`beq $t1,$t2,label`

## Content

**The
extended assembler implements several conditional 
branch instructions beyond the basic ones.**
For example:


```
beqz     s,label          # branch to label if register  s == 0
                          # (pseudoinstruction)

```

The hardware does not have a machine instruction for this
operation.
It does, however, have a zero register and the
`beq` instruction (branch equal).

## Question

Fill in the blanks so the branch is taken if `$s1` is zero.



```mips
   $s1,,label   # branch to label if register $s1 == 0

```
