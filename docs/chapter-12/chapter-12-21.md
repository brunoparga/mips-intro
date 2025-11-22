---
sidebar_position: 21
title: "Destination Register and Const"
---

Destination Register and Const

## Answer

Would this instruction have worked as well?

```mips
or    $25,$0,$12     # move s into target register

```

No — the 32-bit result ($0 OR $12) is moved into `$25`,
destroying the opcode already there.

```mips
$25 <—— ($0  OR $12)   # wrong
$25 <—— ($25 OR $12)   # right

```

## Content

| `ori     $8,$9,0x004A` |
| --- |
| 31....26 | 25...21 | 20...16 | 15...................0 |
| opcode | s | d | unsigned const |
| 0xD | 0x9 | 0x8 | 0x004A |

The
 same method 
 of shifting and oring is used with 
the bit pattern that designates the destination register.
The **const** part of the instruction
is in register `$13`, and it is in the correct field.
It can be copied into `$25` using an `or` instruction.
The complete program follows.
The comments on each line have been improved.

Comments should describe the
steps done in solving the problem.
They should **not** just repeat what the instruction does.
However, when these notes explain a new
instruction the comment may describe the details of the instruction.
But that is a poor style, in general.

The following can be copied into the clipboard and 
pasted into your program editor,
then saved to a file and run with SPIM.


```mips
## Program to assemble the instruction ori  $8,$9,0x004A
##
        .text
        .globl  main

main:
        or    $25,$0,$0        # clear $25
        ori   $11,$0,0xD       # opcode
        ori   $12,$0,0x9       # operand $s
        ori   $13,$0,0x8       # dest. $d
        ori   $14,$0,0x004A    # immediate operand
        
        sll   $11,$11,26       # shift opcode into position
        or    $25,$25,$11      # or it into the instruction
        
        sll   $12,$12,21       # shift operand $s into position
        or    $25,$25,$12      # or it into the instruction
        
        sll   $13,$13,16       # shift dest $d into position
        or    $25,$25,$13      # or it into the instruction
        
        or    $25,$25,$14      # or const into the instruction
        
        ori   $8,$9,0x004A     # The actual assembler
                               # should create the same machine
                               # instruction as we now have in $25

## end of file

```

## Question

Would it be possible to *dis-assemble* the
instruction in `$25`?
