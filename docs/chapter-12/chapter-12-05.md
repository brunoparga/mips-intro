---
sidebar_position: 5
title: "No-Op"
---

No-Op

## Answer

Not too hard to memorize zero, even if you have zero memory skills.

```mips
   0    0    0    0    0    0    0    0    -- machine instruction in hex

0000 0000 0000 0000 0000 0000 0000 0000    -- machine instruction in bits

000000 00000  00000 00000  00000 000000    -- fields of the instruction

opcode -----  $0    $0       0   2ndary    -- meaning of the fields

sll         source  dest  shft   sll

```

## Content

**Register 
`$0` always contains a 32-bit zero so
shifting it left by zero positions and attempting to put the result
back in `$0` does nothing.**
Any instruction that attempts to alter `$0` does nothing,
but this instruction is the preferred way of doing nothing.

A machine instruction that does nothing is called
(in official computer science jargon) a
****no-op****.
The *no operation* instruction is
surprisingly useful, especially for MIPS.

## Question

What do you call a human who does nothing?
