---
sidebar_position: 15
title: "Maximum of Three Expressions"
---

Maximum of Three Expressions

## Answer

Must the `nop` follow the `jr`?

Yes. (Assuming a real MIPS chip with branch delays.)
At run-time, there is no predicting what will be in memory after this `jr`.

This subroutine will be linked with other subroutines
so we better be careful.
It is likely that the linker will put
another subroutine immediately after this
one in memory, and that subroutine's prolog starts with:

```mips
sub     $sp,$sp,4      # push the return address
sw      $ra,($sp)

```

**It would be disastrous to unintentionally execute that first instruction
when our subroutine returns to its caller.**

## Content

For the next example, the `main` program 
asks the user for integers `x` and `y`
and writes out the maximum of `x*x`, `x*y`, 
and `5*y`.  
Look ahead to page 22 to see `main`.

`main` uses this sub-task:

> **Write a subroutine that returns the maximum of
> three expressions: `x*x`, `x*y`, 
> and `5*y`** 
> for integer arguments `x` and `y`.
> The integers use two's complement representation.
> Use stack-based linking.

With our stack-based linkage convention this is:

```mips
Subroutine maxExp

  Input:   $a0 -- x, a two's complement integer
           $a1 -- y, a two's complement integer
           
  Returns: $v0 -- the maximum of x*x, x*y, or 5*y

```

## Question

Can this  program use the subroutine maxInt?
