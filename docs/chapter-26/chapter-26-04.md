---
sidebar_position: 4
title: "The   jal   Instruction"
---

The  jal  Instruction

## Answer

(ii) By placing it in a register designated for this purpose.

## Content

![machine cycle](/Chapter-10/machinecycle.gif)


**The register that is used for linkage is register `$31`,
which is called **$ra** by the extended assembler.**
It holds the **return address** for a subroutine.
The instruction that puts the return address into  `$ra`
is (usually) the `jal` instruction.

Register `$31` is one of the two "general purpose registers"
that behave differently from the others.
(The other one is register `$0`.)
The `jal` instruction and register `$31` provide
the hardware support necessary to elegantly implement subroutines.

To 
understand how `jal` works, review the machine cycle.
The MIPS endlessly cycles through
three basic steps.
Each cycle executes one machine instruction.

The `jal` instruction does the following
in the execute phase of the machine cycle:


```mips
jal sub    # $ra ← PC+4  add another 4 to the PC
           # This forms the address 8 bytes away from the jal. 
           # PC  ← sub   load the PC with the subroutine entry point.
           # A branch delay slot follows this instruction.
           # After the branch delay the instruction at sub is fetched.

```

**Very Tricky:**
the middle step (increment) of the machine cycle has already incremented
the PC by four. 
At this point the PC holds the address of the instruction 
just after the `jal` instruction.

Now the execute phase of the `jal` instruction 
adds another four to that address
and puts the result in `$ra`.
**Now `$ra` holds the address of the second instruction
after the  `jal` instruction.**

**The correct return address is "address of the `jal`  plus eight".**
This is because: (i) returning from the subroutine 
to the `jal` instruction would be a disaster
(since it would execute again, sending control back to the subroutine),
and
(ii) the instruction following the `jal` 
is a branch delay slot.

## Question

What instruction is usually placed in the branch delay slot?
