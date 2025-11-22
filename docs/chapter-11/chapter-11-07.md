---
sidebar_position: 7
title: "Running the Program"
---

Running the Program

## Answer

```
0000 1111 1010 0101           0FA5 
0011 0110 1000 1111           368F 
-------------------           ----
0011 1111 1010 1111           3FAF

```

## Content

![register display in SPIM](/Chapter-11/orWork.gif)

Doing
the problem by hand yields the result,
`0x3faf`.
Of course,
when the program runs the result
will be 32 bits long:
`0x00003faf`.

The picture shows the result of running the program.
**The result in `$10`  is what was expected.**

To run the program:


- Create a source file (copy and paste from the previous page).
- Start QtSpim.
- Simulator → Settings → MIPS:
    - **ON** — Bare Machine (click on the button)
- **OFF** — Load Exception Handler (clear the check box)
- Display registers in Hex (Registers → Hex)
- Load the source file (File → Reinitialize and Load File).
    - This assembles the source and loads the resulting machine code at address 0x400000
- Push F10 once per instruction.
    - Twice for this program
- With the third push, the simulator will show an error message

## Question

Here is the the first instruction from the source window:

```mips
[0x00400000]    0x34080fa5    ori  $8, $0, 4005       ori  $8,$0,0x0FA5

```

Look at the 32-bit machine instruction at address `0x00400000`. 
Do you see the immediate operand in it?

(Recall that the SPIM window shows the dis-assembly of the machine code, which
in the above is `ori  $8, $0, 4005`. 
The dis-assembly uses base 10 to show the bit
pattern as if it were representing an integer.)
