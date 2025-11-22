---
sidebar_position: 12
title: "Complete Loop"
---

Complete Loop

## Answer

See Below.

## Content

![Flowchart](/Chapter-18/countiToTen.gif)

Here
 is the loop with the branch delay slots
filled.
One could be clever and eliminate the last no-op, but
let's not.

**The no-op at `endLp`
is not filling a branch delay slot.
It is there as a  convenient target for the branch instruction.**

With a few assembly language directives, the
code is ready to run.
Step through the code and watch `$8` (count)
increase from 0 to 0xA.


```mips
#
#  branch delay slots  filled
#
init:   
        ori    $8,$0,0        # count = 0

test:   sltiu  $9,$8,10       # count < 10
        beq    $9,$0,endLp    # end loop if count >= 10
        sll    $0,$0,0        # delay

                              # do stuff

        addiu  $8,$8,1        # count++ ;
        j      test
        sll    $0,$0,0        # delay

endLp:  sll    $0,$0,0        # branch target

```

## Question

Examine the program.  How could you modify it
to compute the sum of the integers 0 through 9?
