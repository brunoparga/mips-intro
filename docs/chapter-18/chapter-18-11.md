---
sidebar_position: 11
title: "Assembly Language Loop"
---

Assembly Language Loop

## Answer

```

The loop is correct.  
(Although j changes to 10 at the bottom of the last
iteration, this is the normal way for loops to work).

## Content

![Flowchart](/Chapter-18/countiToTen.gif)

Here
 is an assembly version of the counting loop,
without the branch delay slots filled:

```mips
#
#  branch delay slots not filled
#
init:   ori    $8,$0,0        # count = 0

test:   sltiu  $9,$8,10       # count < 10
        beq    $9,$0,endLp

        . . .                 # do stuff

        addiu  $8,$8,1        # count++ ;
        j      test

endLp:  sll    $0,$0,0        # branch target

```

## Question

Find and fill in the branch delay slots.
