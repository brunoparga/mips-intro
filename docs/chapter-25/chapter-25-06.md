---
sidebar_position: 6
title: "Example"
---

Example

## Answer

Yes. The data is copied to a new location, but
the old location is not changed.
However, since the stack pointer is moved,
"logically" the data is no longer on the stack.

## Content

**The
stack is often used to hold temporary values
when most registers are already in use.
An example of this is how
a compiler translates an arithmetic expression
into machine codes that uses a stack.**

Say that
the arithmetic expression is:
 
 
`ab - 12a + 18b - 7`.

Say that only
`$t0`
and
`$t1` are available.
Perhaps only two registers are available because the 
compiler has already output code that uses all the others.

Before SPIM starts running a program it
initializes the stack pointer
`$sp`
appropriately.
On a computer with a full operating system,
the stack pointer is initialized by
the operating system before control is
passed to a user program.

Here is the start of the program:


```mips
# Evaluate the expression ab - 12a + 18b - 7

main:   
        lw      $t0,a          # get a
        lw      $t1,bb         # get b
        mul     $t0,$t0,$t1    # a*b
        
        subu    $sp,$sp,  # push a*b onto stack
        
        sw      $t0,

        . . . . .

        .data
a:      2
bb:     3

```

## Question

Fill in the blanks.
