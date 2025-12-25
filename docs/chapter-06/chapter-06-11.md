---
sidebar_position: 11
title: "Secret Numbers"
---

Secret Numbers

## Answer

No.  It is a meaningless representation because the digit 8 can not be
used with base seven.

## Content

The
**symbols chosen for digits need not be the usual symbols.**
Here is a system for base four:

```mips
zero  == @     one == !     two == #      three == $

```

Here is a number represented in that system:        `!$@#`

Here is what that means in positional notation:

```mips
   !$@# == !×(!@)$ + $×(!@)# + @×(!@)! + #×(!@)@

```

The base in this system is written `!@` which uses the digits of
the system to mean one times the first power of the base plus zero
times the zero<sup>th</sup> power of the base.

This example illustrates that positional notation can be used without
the usual digits 0, 1, 2, ..., 9.
If the base is B, then  B digit-like symbols are needed.

## Question

What is the base ten representation of   `!$@#` ?
