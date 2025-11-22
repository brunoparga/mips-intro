---
sidebar_position: 4
title: "Push"
---

Push

## Answer

After the 81.  The 103 is now the top of the stack.

## Content

![stack of integers](/Chapter-25/stackInts01.gif)

**By software convention, 
`$sp` always points to the
top of the stack.
Also by convention, the stack grows downward
(in terms of memory addresses).**

So, for our stack of 4-byte (full word) data,
adding an item means subtracting four from `$sp` 
and storing the item in that address.
This operation is called a **push** operation.

> **To **push** an item onto the stack,
> first **subtract** 4 from the stack pointer,
> then store the item at the address in the stack pointer.**

Here is what that looks like in code.  Say that the
value to push on the stack is in register `$t0`:

```mips
                    # PUSH the item in $t0:
subu $sp,$sp,4      #   point to the place for the new item,
sw   $t0,($sp)      #   store the contents of $t0 as the new top.

```

The extended assembler allows you to write `($sp)`
for `0($sp)`.
The machine instruction will have the displacement of zero filled in.

## Question

In the new stack (shown above) if one item is removed, which will it be?
