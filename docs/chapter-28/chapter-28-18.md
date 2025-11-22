---
sidebar_position: 18
title: "Activation Chain"
---

Activation Chain

## Answer

```
fact(5) == 5*fact(4)
        == 5*( 4*fact(3) ) 
        == 5*( 4*( 3*fact(2)) )
        == 5*( 4*( 3*(2*fact(1))) ) 
        == 5*( 4*( 3*(2*1)) ) 
        == 5*4*3*2*1 
        == 120

```

## Content

![activation chain](/Chapter-28/factChain.gif)

If
the subroutine `fact()` 
is called with an argument
greater than one, it calls itself, 
`fact()`, with a new argument.
This is a new activation of the same code.
This is not  a problem because 
**the data for the first activation of `fact()`
is on
the stack.
The new activation has a fresh stack frame for its data.**

**Each activation of `fact()` gets its own
stack frame which it uses for its own data.**
In the diagram,
each activation corresponds to a green circle
which contains the data for that activation.
Each activation works with its own data in
its own stack frame.
The activations do not interfere with each other.

When the first activation gets control again,
its data is available at the top of the stack.
It also has the value returned from the
call it made.

In the code, `n` is the value in
the stack frame and `fact(n-1)`
is the value returned by the call it made.

```

#  int fact( int n )
#  {
#    if ( n <= 1 )
#      return 1;
#    else
#      return n*fact(n-1);
#  }

```

**ach 
bead on the activation chain represents an activation of
a subroutine.**
The label on a downward arc is the argument to an activation.
The label on an upward arc is the returned value.

**Each bead on the activation chain corresponds to one stack frame.**
The picture of the stack shows what it looks like when
the activation `fact(1)` is running.
The upward arrows have not happened yet.

When the value 120 is returned to `main`, 
only `main` is active, the stack
contains only its stack frame, and the activation chain consists only of
`main`.

## Question

A downward arc corresponds to a  of one stack frame.
An upward arc corresponds to a  of one stack frame.
