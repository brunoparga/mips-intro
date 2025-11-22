---
sidebar_position: 12
title: "Branch on Not Equal"
---

Branch on Not Equal

## Answer

No.  `beq`
tests if the same 32-bit pattern is in each register.
The pattern can represent anything.

## Content

Here
 is the
`bne` 
(branch on not equal) instruction:

```mips
bne  u,v,addr   # if register $u != register $v
                #     PC  ←  addr 
                #     (after a delay of one machine cycle.)
                # else
                #     no effect.

```

## Question

Can a branch instruction  implement a
two-way decision (an *if-then-else*)?
