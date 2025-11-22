---
sidebar_position: 6
title: "The   jr   Instruction"
---

The  jr  Instruction

## Answer

No.  An ordinary jump instruction has its 
target encoded as an unchanging part of the instruction.
(like  `j someSpot`).

## Content

![section of memory](/Chapter-26/jalEg.gif)

**The
**jr** 
instruction returns control to
the caller.
It copies the contents of  `$ra` into the PC.**

Usually you think of this as "jumping 
to the address in `$ra`."

To make the instruction more general, it can be
used with any register, not just  `$ra`.
Like all jump and branch instructions,
the  `jr` instruction is
followed by a branch delay.

The diagram shows the subroutine returning
to the return address that was loaded into  `$ra` 
by the `jal` instruction in the caller.


```mips
jr  $ra      # PC <― $ra 
             # A branch delay 
             # slot follows this instruction.

```

## Question

Do we now have a mechanism that enables us to call the same subroutine
from many points in a program?
