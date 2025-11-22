---
sidebar_position: 10
title: "Pictorial Summary"
---

Pictorial Summary

## Answer

Because there is no place to put the return address.
The register `$ra` is already in use.

## Content

![summary of simple linkage](/Chapter-26/callSummary.jpg)


The
picture shows  `main` calling
`mySub`.
Two arguments are passed
in `$a0` and  `$a1`.
The subroutine uses the arguments in those
registers.

In the picture,
the arguments are set up with `move`
and `li` instructions,
but any means of loading the argument registers
can be used.

**The *Simple Linkage Convention*
is limited in some obvious ways.**
A more advanced
calling convention is discussed in
the next chapter.

**The caller 
passes arguments to the subroutine by placing them in registers.**
This is the only way that data is passed to the subroutine.
The subroutine returns values to the caller in registers.
This is the only way the subroutine returns data to the caller.
The subroutine should not look at any
memory used by the caller,
and the caller should not look at any memory used by the subroutine.

## Question

Should a code module know about the inner workings of
another module?
