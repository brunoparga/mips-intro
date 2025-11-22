---
sidebar_position: 9
title: "Delay Slot Bug"
---

Delay Slot Bug

## Answer

No.

## Content

![picture of a bug in the delay slot](/Chapter-18/delaySlotBug.gif)

The
 program can be made slightly shorter by
removing the no-op instruction filling the
first delay slot.
The instruction following it 
(the `sltiu`)
will always execute, sometimes uselessly,
but never will do damage.

The second no-op, however, is essential.
If it is missing, the next instruction, the 
`ori`
sets the flag to zero regardless of the branch instruction.
This is a common bug, and can be very frustrating because
*sometimes* the result is correct.


```mips
# Set range indicator to 1
        ori     $3,$0,1         #  set to 1

# Test  30 <= temp <= 55
        sltiu   $8,$2,56        #  $8=1 if temp <= 55
        beq     $8,$0,out       #  0? out of range
        sll     $0,$0,0         #  delay

        sltiu   $8,$2,30        #  $8=1 if  temp < 30
        beq     $8,$0,cont      #  0? in range
        sll     $0,$0,0         #  delay

# Out of Range: clear range indicator to 0
out:
        ori     $3,$0,0         #  clear to 0

cont:   sll     $0,$0,0         #  target for the jump
## End of file

```

## Question

(Review:) What other type of instruction is followed by a delay slot?
