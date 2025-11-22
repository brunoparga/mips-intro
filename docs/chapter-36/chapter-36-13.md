---
sidebar_position: 13
title: "Implementation of an Object"
---

Implementation of an Object

## Answer

```mips
jalr     $t0                # call the object's method

```

This instruction transfers control to the address in register `$t0`.

## Content

**After
the print method runs
control returns to the instruction 
after the `jalr`**
(if delays are set to **off** in SPIM).

Now look at the implementation of `object1`.
It follows this plan:

```
byte 0-3: address of print()                # single-entry jump table
byte 4- : null terminated string            # as many bytes as needed

```

Here is the actual code:

```
          .data
object1:
          .word    print                    # Jump Table
          .asciiz  "Hello World\n"          # This object's data

```

**A larger object, with more methods,  would have more entries in its 
jump table.**

## Question

Complete the declaration for `object2`:

```
object2:
          .word              # Jump Table  
          .asciiz            # This object's data

```
