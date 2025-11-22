---
sidebar_position: 4
title: "Subroutines and Registers for Temporary Values"
---

Subroutines and Registers for Temporary Values

## Answer

$8 through $15     `==`      $t0 through $t7

## Content

```mips
        ori  $t0,$0,32    # load 32 into a temp register
        ori  $s0,$0,13    # load 13 into a saved register

        jal  subrout      # subroutine call (don't worry about 
                          # the details of this, now).
        sll  $0,$0,0      # branch delay slot

back:   addu $s0,$s0,$t0  # return from subroutine;
                          # temp  register $t0 may have changed.
                          # saved register $s0 has not changed.

```

**Most
assembly programs,
like most higher-level language programs,
are collections of subroutines.**
The main program calls upon a sequence of subroutines to
accomplish its task.
And, of course, subroutines themselves may call other subroutines.
(In Java, software is collected into *objects*,
and the equivalent of a subroutine is a *method*.)

**Subroutines
use
*local variables*,**
variables
that are not used anywhere but in the subroutine.
The **temporary** registers `$t0-$t7,$t8,` and `$t9`
and the **saved** registers `$s0-$s7`
are used for local variables
(or for the same idea in assembly language).

When
you write a program
the temporary registers and saved registers are yours to use however
you want.
But, 
by software convention,
**the temporary registers may be changed
by any subroutine you call.**

**The saved registers are not changed by a subroutine call.**

Examine the program.
The
statement at `back`
is in error.
The temporary register `$t0`
may have been changed by
the subroutine `subrout`.
It might not contain the value `32` that the first statement put in it.

If the programmer of `subrout` did not use `$t0`,
it will not change.
However, in the future, `subrout` might be changed to 
involve `$t0`,
and that would break the above code.

## Question

Is the following code fragment correct?

```mips
        ori  $s0,$0,13    # load 13 into a saved register
        ori  $s1,$0,45    # load 45 into a saved register

        jal  subrout      # subroutine call (don't worry about 
                          # the details of this, now).
        sll  $0,$0,0      # branch delay slot

back:   addu $s0,$s0,$s1  # return from subroutine

```
