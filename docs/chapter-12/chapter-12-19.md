---
sidebar_position: 19
title: "Source Register"
---

Source Register

## Answer

```mips
or   $25,$25,$11    # move opcode into target register

```

Alternative:

```mips
or   $25,$11,$0     # move opcode into target register

```

## Content

Recall the instruction we are trying to assemble: `ori $8,$9,0x004A`

Now
 move the bit pattern for the source register `$9` into the correct field.
Register `$12` contains the pattern in its right-most bits,
as in the first table below.  
The pattern should be in bits 25...21 of register `$25`.


| 31....26 | 25...21 | 20...16 | 15............................0 |
| --- | --- | --- | --- |
| 000000 | 00000 | 00000 | 0000 0000 0000 1001 |

Here, again, is how the assembled instruction will look
when it is finished:


| `ori     $8,$9,0x004A` |
| --- |
| 31....26 | 25...21 | 20...16 | 15...................0 |
| 0xD | s | d | unsigned const |
| 0xD | 0x9 | 0x8 | 0x004A |

A `sll` can be used to move this field into position
 as we did for the opcode.
There is a slight problem: the opcode already in `$25`
must not be erased.

## Question

Fill in the next part of the program


```mips
sll   $12,$12,      # left shift s by  places

or    $25,,    # move s into target register

```
