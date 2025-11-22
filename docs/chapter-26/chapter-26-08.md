---
sidebar_position: 8
title: "Register Use"
---

Register Use

## Answer

No. Typically the caller has  important information in some registers,
and others (such as the stack pointer) are used for special purposes.

## Content

To 
determine which registers `sub` can use, you could look at the
code for `main` 
to see which registers
contain information and so
can not be altered.
Do this  
every place in `main` that `sub` is called,
because different registers are likely to be in use
at different places.
Now write `sub` using only those registers
that are not in use before any call.

This is tedious and error prone.
Worse, if you make a change to `main` ,
you now might have to
re-code
`sub` using different registers.

Also,
Many different programs may use 
your subroutine if it is useful.
Different
`main`s ,
will likely have different data in `S` and `T` registers.

**One of the goals in writing a subroutine is to create a module
that is independent of the rest of the code.**
It should work as a "black box" that is useful in many different programs.
We have not achieved that, yet.

Another issue is how data 
is passed into and out of the
subroutine.
Often data is in registers, and the results are in registers.
Which registers?

**By software convention (not by hardware)
registers have been assigned different roles:**

- `$t0 - $t9`  —  The subroutine is free to change these registers. 
                                                      The subroutine should not assume what main has put in these registers.
- `$s0 - $s7`  —  The subroutine must not change these registers.
                                                      The subroutine should not assume what main has put in these registers.
- `$a0 - $a3`  —  These registers contain arguments for the subroutine.
                                     The subroutine can change them.
- `$v0 - $v1`  —  These registers contain values returned from the subroutine.

## Question

Is the following code fragment correct?

```mips
  add    $t0,$s5,$s3   # calculate an important sum in $t0
  jal    somesub       # call a subroutine
  nop                  # branch delay
  mul    $s4,$t0,$v1   # multiply the sum

```
