---
sidebar_position: 16
title: "Structure Rule Four: Iteration"
---

Structure Rule Four: Iteration

## Answer

Yes.  It is regarded as if-then-else with an empty else-branch.

## Content

![structure rule four](/Chapter-19/structureRule4.gif)

Iteration
(*while-loop*) is arranged as at right. **Iteration done correctly has one entry point and one exit point.**
The entry point has conditions that
must be satisfied and the exit point has conditions that
will be fulfilled.
There are no jumps into the structure from external points
of the code.

> ****Rule 4 of Structured Programming:**
> The iteration of a code block  is structured.**

The body of the loop (the box following the *true* arrow)
is a code block with one entry point and one exit point.

As with the other structures,
iteration is built out
of assembly language pieces.
There are various ways 
to do it.
The following is typical

```mips
while:  bltz   $8,endWh

        . . . loop body . . .

        j      while
        sll    $0,$0,0

endWh:  sll    $0,$0,0

```

The particular instructions that make
up the test depend on circumstances.

## Question

In a structured language (such as Pascal, C, or Java) can
an alternation structure be put inside an iteration structure?
(can the body of a *while-loop* contain an *if-then-else*?)
