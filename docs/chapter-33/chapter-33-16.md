---
sidebar_position: 16
title: "Assigning Values to the struct"
---

Assigning Values to the struct

## Answer

From the heap.

## Content

The assembly language program continues by assigning values into the
dynamically allocated block of memory:

```mips
  # initialize the first struct       
  li      $t0,34            # store 34
  sw      $t0,0($s1)        # in age
  lw      $t0,pay           # store 24000
  sw      $t0,4($s1)        # in pay
  li      $t0,12            # store 12
  sw      $t0,8($s1)        # in class

```

Here is how the C program does this:

```
  empA->age = 34;
  empA->pay = 24000;
  empA->class = 12;

```

**The pointer variable `empA` holds the address of a block
of memory, just as does the register `$s1`.**

The expression **`empA->pay`** means to go to the block of memory
at the address in `empA`, then use the bytes where `pay`
is located.

## Question

Could C allocate a second block of memory for a second struct?
