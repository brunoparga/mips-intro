---
sidebar_position: 17
title: "Shifting the Opcode"
---

Shifting the Opcode

## Answer

See below

## Content

The
 `ori` instruction puts its immediate operand in the low
order bits (the right-most bits) of its destination register.
So now, with the following code, the registers have the
correct patterns but the patterns are not in the correct fields.

```mips
or    $25,$0,$0        # clear $25
ori   $11,$0,0xD       # opcode
ori   $12,$0,0x9       # operand $s
ori   $13,$0,0x8       # dest. $d
ori   $14,$0,0x004A    # immediate operand

```

Register `$11` contains the opcode in its right-most bits,
like this:


| 31....26 | 25...21 | 20...16 | 15...................0 |
| --- | --- | --- | --- |
| 000000 | 00000 | 00000 | 0000 0000 0000 1101 |

However, the opcode is required to be in the high-order six bits,
26 through 31.
A `sll` will shift the contents of `$11` into the correct
position.

## Question

Fill in the amount by which to shift. 
(Hint: determine which bit should be the new left-most bit.
Count the number of bits between its old and new position).


```mips
sll   $11,$11,    # left shift $11 by  places

```
