---
sidebar_position: 10
title: "Counting Loop"
---

Counting Loop

## Answer

Load instructions are followed by a load delay slot.
The data loaded from memory into a register does not arrive until after the following instruction has executed.

## Content

![Flowchart](/Chapter-18/countingLoop.gif)

**A
**counting loop**
is controlled by an integer that
counts up from a initial value to
an upper limit.**
The integer is called a
*loop control variable*.
Loops are implemented
with the conditional branch,
jump, and conditional set
instructions.

**A loop has three parts
that must be correct:**

- The counter must be initialized.
- The test must end the loop on the correct count.
- The counter must be increased.

It is easy to get these wrong
in a high-level programming
language.
It is remarkably easy to get
them wrong in assembly language.

**Usually you want a **top-driven** loop**
such as the one at right,
where the test is performed 
at the top
before
control enters the loop body.
Be clear about the loop you want
before you program it,
because assembly language allows
any sort of weird loop.

## Question

Is the following loop (in C)
correct in all three parts?
It is intended to execute 10
times starting at zero.

```
int j;
   
j = 0;
while ( j < 10 )
{
    . . .
    j++ ;
}

```
