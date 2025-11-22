---
sidebar_position: 5
title: "Other Registers"
---

Other Registers

## Answer

Yes — the fragment makes no assumptions
about what is in temp registers after the subroutine call.

## Content

The registers are grouped into those used 
as variables and arguments in subroutines
(`$0`, `$v0-$v1`, 
`$a0-$a3`, `$t0-$t9`, 
`$s0-$s7`),
and those used for other purposes.
Subroutines are discussed in a future chapter.
The other uses are discussed as the topic arises.

The most fundamental part 
of an operating system is 
the **kernel**.
The rest of the OS is mostly implemented
using the functions provided by the kernel.**Two registers, `$k0` and `$k1`, 
are reserved for
the kernel.**
Applications programs (and most OS subroutines)
should not touch them.

SPIM does not come with an OS.
But it loads a trap handler, if requested,
which uses `$k0` and `$k1`
as well as several of the temporary registers.

**The registers `$gp`, `$sp`, 
and `$fp` are 
used as base registers to
access to various parts of memory.**

## Question

What does the following assembly language instruction do?

```mips
addu $t5,$zero,$t7

```

It 

the contents of register 
 
into register
.
