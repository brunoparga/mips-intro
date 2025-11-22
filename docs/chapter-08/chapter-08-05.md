---
sidebar_position: 5
title: "Details, Details"
---

Details, Details

## Answer

```
  
   00
    10  
  + 01  
    11

```

This is another case where the answer fits into the same number of bits
as the numbers to add.

## Content

Here are some details:

- **Usually the operands and the result have a fixed
    number of bits (usually 8, 16, 32, or 64).**
    These are the sizes that processors use to
    represent integers.
- **The result is the same size as the operands.**
    You may have to include zero bits in some of the leftmost columns.
- **Compute the carry-out of the leftmost column,
    but don't write it as part of the answer** (because
    there is no room if you have a fixed number of bits.)
- When the
    operands are represented using the **unsigned binary scheme**
    (the base two representation scheme discussed in the last two chapters)
    **a carry-out of   1   from the leftmost column**
    means the sum does not fit into the fixed number of
    bits.  **This is called **Overflow**.**
- When the 
    operands are represented using the ****two's complement****
    scheme
    (which will be described at the end of this chapter),
    then **a carry-out of    1    from
    the leftmost column is not necessarily overflow.**

Integers 
are commonly represented using a scheme called
*unsigned binary* or using a scheme called
*two's complement binary*.
The binary addition algorithm is used with both schemes,
but to interpret the result you need to know
what scheme is being used.
Overflow is detected in different ways with
each scheme (see details 4 and 5, above.)

## Question

The MIPS32 chip has 32-bit registers.
What do you think is the usual size of the operands when binary addition is performed?
