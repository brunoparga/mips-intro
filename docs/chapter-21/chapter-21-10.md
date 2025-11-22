---
sidebar_position: 10
title: "Two Basic Instructions"
---

Two Basic Instructions

## Answer

No.  The machine instruction has a 16-bit field for the
immediate value.

## Content

Machine 
instructions have fixed-sized fields.
Immediate operands are always 16 bits.**However, two machine instructions can be
used to load a 32-bit register with the
top half and bottom half of a 32-bit integer:**


| `li $v1,0x12345678` | `==` | `lui $v1,0x1234
ori $v1,$v1,0x5678` |
| --- | --- | --- |

Here,
`li`
is translated into two basic instructions.
The first loads the top half of `$v1`. 
The second uses the `ori` operation to load the bottom half.
This is done for any integer
(positive or negative) that requires 
more bits than an immediate operand can hold.

So,  the extended assembly language programmer
has a very useful instruction:

```mips
li   d,value        #  load register $d with the 
                    #  positive or negative integer
                    #  "value".  Value may be a 
                    #  any integer up to 32 bits. 
                    #  (pseudoinstruction)

```

The extended assembler automatically translates this
pseudoinstruction into the most efficient sequence
of actual instructions.

## Question

Translate the following  pseudoinstruction 
into basic assembly instructions:

```mips
li $t7,0xFF001234
 
== 
 
lui $t7,
 
 $t7,$t7,0x1234 

```
