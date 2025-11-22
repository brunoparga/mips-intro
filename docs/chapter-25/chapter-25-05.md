---
sidebar_position: 5
title: "Pop"
---

Pop

## Answer

103

## Content

![stack of integers](/Chapter-25/stackInts02.gif)

**Removing 
an item from a stack is called a
**pop** operation.**
In the real-world analogy an item is actually
removed: a dish is physically moved from the stack.
In a software stack, "removal" of an item means
it is copied to another location and the stack
pointer is adjusted.

The picture shows a pop operation.  The
data is first copied from the top of stack
to the new location and then the
stack pointer is increased by four.

> **To **pop** the top item from a stack,
> copy the item pointed at by the stack pointer,
> then **add** 4 to the stack pointer.**

Here is what that looks like in code.  
Say that 
we want the value to be popped into 
`$t0`:

```mips
                    # POP the item into $t0:
lw   $t0,($sp)      #   Copy top item to $t0.
addu $sp,$sp,4      #   Point to the item beneath the old top.

```

As above, `($sp)` means the same as `0($sp)`.

## Question

When a software stack is popped, does the popped item
remain in memory?
