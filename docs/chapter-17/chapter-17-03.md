---
sidebar_position: 3
title: "Altering the PC"
---

Altering the PC

## Answer

A no-op instruction is an instruction that has no effect.
A common no-op instruction is `sll $0,$0,0`.

## Content

| PC at top of cycle | Instruction Fetched
(details omitted) | PC after increment | PC at the bottom of the cycle |
| --- | --- | --- | --- |
| 00400000 | load | 00400004 | 00400004 |
| 00400004 | add | 00400008 | 00400008 |
| 00400008 | jump 0x00400000 | 0040000C | 0040000C |
| 0040000C | no-op | 00400010 | 00400000
effect of the jump instruction |
| 00400000 | load | 00400004 | 00400004 |
| 00400004 | add | 00400008 | 00400008 |
| 00400008 | jump 0x00400000 | 0040000C | 0040000C |
| 0040000C | no-op | 00400010 | 00400000
effect of the jump instruction |
| 00400000 | load | 00400004 | 00400004 |
| 00400004 | add | 00400008 | 00400008 |
| 00400008 | jump 0x00400000 | 0040000C | 0040000C |
| 0040000C | no-op | 00400010 | 00400000
effect of the jump instruction |
| .... and so on .... |



![Machine Cycle](/Chapter-17/MachineCycle.gif)

Here
is a sequence of instructions.
The "load" and "add" represent typical instructions.
The "jump" instruction shows the address we wish to put into the PC.
(The actual MIPS instruction for this involves details that we are
skipping for the moment.)

```
main: load ...           
      add  ...
      jump 0x00400000
      no-op

```

**Say the the program has been assembled and loaded
at address 0x00400000.**
The program starts running with the PC holding that address.

**Once started, the four instructions execute in
an unending loop.**
The last instruction, a no-op, fills the
branch delay slot.

A loop structure is created with the
jump instruction. 
The intent of the jump instruction is to put
the address 0x00400000 into the PC.
However, it takes one more machine cycle for this to happen.

**But once the PC has changed,
the next instruction fetched is at the top of the loop.**
The instructions execute again, and at the end the PC is again set to the starting address.

## Question

(Thought question:) Is there anything 
in this program that will stop the loop from executing?
