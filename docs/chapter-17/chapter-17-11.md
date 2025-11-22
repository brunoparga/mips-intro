---
sidebar_position: 11
title: "Ifs and Whiles"
---

Ifs and Whiles

## Answer

It does not matter.  The branch is taken if the patterns are identical,
regardless of what data they encode.

## Content

![Single-branch IF](/Chapter-17/beqChart.gif)

More
 trickery is used to create a 32-bit branch address out
of the smaller sized field of the   **beq**   instruction.
But let's skip that for now.

**Branch instructions
(including the `beq` instruction)
are used to implement both loops and branches.**
At right is a flowchart showing an optional branch.
Here is  the assembly language for it:

```mips
        ...                # load values into 
                           # $8 and $9 
                           #
        beq  $8,$9,cont    # branch if equal
        sll  $0,$0,0       # branch delay slot
        ...                # conditionally
        ...                # executed statements
        ...                # 
cont:   add   $10,$10,$11  # always executed

```

(Any instruction can be a target of a branch.
The `add` instruction is here just as an example.)

## Question

Must the contents of registers 
`$8` 
and 
`$9` in this example 
be regarded as numbers?
