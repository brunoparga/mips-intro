---
sidebar_position: 5
title: "Example"
---

Example

## Answer

The CPU.  Although the instruction tests a bit in the FPU,
it affects the program counter of the CPU and takes place in the CPU.

## Content

**The example program looks at two floating point
values, A and B, and writes a message saying which
one is smallest.**

First the program loads the two values
`A` and `B` into registers:

```mips
main:   # get the values into registers
        l.s     $f0,A
        l.s     $f2,B
        . . . . 
    
A:      .float  4.830
B:      .float  1.012
        . . . . 

```

Then 
the program tests if
`A<B`, or if `B<A`.
If neither of these is true, then it must be that `B==A`.

```mips
        . . . .
        c.lt.s  $f0,$f2          # is A < B?
        bc1t    printA           # yes:  print A

        c.lt.s  $f2,$f0          # is B < A?
        bc1t    printB           # yes:  print B

        la      $a0,EQmsg        # otherwise
        li      $v0,4            # they are equal
        . . . . 

```

(Remember that for this chapter, branch delays have been turned off in SPIM.)

## Question

The three outcomes can be detected by other comparison instructions.
Here is another arrangement of the code:

```mips
        c..s  $f0,$f2       # is A == B?
        bc1t    printEQ             # yes: print equal

        c..s  $f2,$f0       # is B < A?
        bc1t    printB              # yes: print B

                                    # otherwise A < B

```Fill in the blanks.
You may wish to consult the list of floating point
floating point  comparison instructions.
