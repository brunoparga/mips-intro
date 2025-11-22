---
sidebar_position: 9
title: "Simple Linkage Convention"
---

Simple Linkage Convention

## Answer

No. The value in `$t0`
might have been changed by `somesub`,
since  `$t0` (according to convention)
is a register that a subroutine is free to use.

```mips
      add    $t0,$s5,$s3   # calculate an important sum
      jal    somesub       # call a subroutine
      nop                  # branch delay
      mul    $s4,$t0,$v1   # multiply the sum by the result

```

## Content

**Here is an example of a calling convention.**
This convention is very simple and is not
suitable for a serious program.
But it illustrates some ideas that will be used
later on in more complex conventions.
Let us call it the *Simple Linkage Convention*.
You have already seen most of the rules of this convention:

- A subroutine is called using `jal` (which puts the return address in `$ra`.)
- A subroutine will NOT call another subroutine.
- The subroutine returns to its caller using `jr $ra`.
- Registers are used as follows:
  - `$t0 - $t9`  —  The subroutine is free to change these registers.
- `$s0 - $s7`  —  The subroutine must not change these registers.
- `$a0 - $a3`  —  These registers contain arguments for the subroutine.
                                       The subroutine can change them.
- `$v0 - $v1`  —  These registers contain values returned from the subroutine.
- The `main` routine returns control by using
    the exit service (service 10) of the SPIM exception handler.

Since a subroutine may not call another subroutine
(in this Simple Linkage Convention)
**programs consist of a  `main` routine
that calls any number of subroutines.**
But the subroutines do not call other subroutines and
always return directly to `main`.

## Question

(Thought Question: ) Consider rule number 2. Why must not a subroutine call another subroutine?
