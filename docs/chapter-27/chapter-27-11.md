---
sidebar_position: 11
title: "Example Program"
---

Example Program

## Answer

Yes.

## Content

Say that you have been given this task:

> **Write a subroutine that computes the maximum of its two integer arguments.
> The integers use two's complement representation.
> Use stack-based linking.**

In C, the subroutine prototype would look like this:

```
int maxInt(int x, int y);

```

With our stack-based linkage convention this is:

```mips
Subroutine maxInt
  Input:   $a0 -- a two's complement integer
           $a1 -- a two's complement integer
  Returns: $v0 -- the maximum of the two integers

```

The subroutine must be written with no knowledge of what is
in any register other than 
`$ra`, 
`$a0`, and 
`$a1`.
Indeed, since the subroutine might be used in many different programs,
the contents of the other registers cannot be known.

## Question

Can you write this subroutine without knowing about the caller's registers?
