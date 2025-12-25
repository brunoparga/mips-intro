---
sidebar_position: 6
title: "Immediate Operand in Branch"
---

Immediate Operand in Branch

## Answer

odd:                           # else
        addu  $t1,$t1,$t0      #     add to odd sum
endif:

```

## Content

**If
a branch instruction has a second operand, it can be
an immediate operand or a register.**
The extended assembler will implement this using several basic instructions.
For example, from the previous table:



| bge | s,t,label | branch if s&gt;=t | signed |
| --- | --- | --- | --- |

Here
are examples:

```mips
bge    $t1,$t2,spot     # if ( $t1 >= $t2 ) goto spot

bge    $t1,23,spot      # if ( $t1 >= 23  ) goto spot

bge    $t1,-98,spot     # if ( $t1 >= -98 ) goto spot

bge    12,$t1,oops      # WRONG: first op must be a register

bge    $t1,value,oops   # WRONG: second op can't be a symbolic address

```

## Question

Is the following instruction correct?

```mips
bge     $t1,-67,spot     # if ( $t1 >= -67 ) goto spot

```
