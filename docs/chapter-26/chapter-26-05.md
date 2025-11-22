---
sidebar_position: 5
title: "Example   jal   Instruction"
---

Example  jal  Instruction

## Answer

Usually the branch delay slot is filled with a `nop` instruction.
This does nothing.

## Content

![jump and link working](/Chapter-26/jalEg.gif)

It
would not be a disaster to return control
to an instruction that does nothing.
**But sometimes   programmers or  compilers put something
clever in the branch delay slot, 
so it is best not to pass control to it.**

The diagram shows the execution of a `jal` instruction.
The `jal` is at address `0x00400014`.
The return address is   `0x0040001C` which is the
address of the `jal` plus eight.
(The  `addu` instruction there is just used as an example
of what might be at the return address).

**Return from the subroutine to the caller is done with
a  `jr` instruction. This will be discussed
in a few pages.**

Here
is how the `jal` instruction works in brief:


```mips
jal sub    # $ra ← PC+4  (the address 8 bytes away from the jal) 
           # PC  ← sub   load the PC with the subroutine entry point
           # a branch delay slot follows this instruction

```

Here is how it works in this example.
Say that the `jal` is at address `0x00400014`
The entry point of  `sub` is     `0x00400100`.

```mips
Fetch:      When the jal is fetched the PC has 0x00400014.

Increment:  The PC is incremented to 0x00400018.
            
Execute:    $ra ← 0x0040001C = 0x00400018+4 
            PC  ← 0x00400100

```

The `nop` instruction in the
branch delay slot is executed.
Then execution continues with the first instruction 
of the subroutine at `0x00400100`.
Control has been passed to the subroutine and
the return address is in `$ra`.

## Question

The subroutine has the return address in  `$ra`.
Can an ordinary jump instruction be used to return to the caller?
