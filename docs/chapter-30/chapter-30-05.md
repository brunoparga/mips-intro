---
sidebar_position: 5
title: "Floating Point Compatibility"
---

Floating Point Compatibility

## Answer

No.

## Content

**Up
until 1985 each hardware manufacturer had its own type
of floating point.**
Worse, different machines from the same manufacturer might
have different types of floating point!
And when floating point was not supported in the hardware,
the different compilers emulated different floating point types.

The situation was awful.
Consider a magnetic tape full of data written by an IBM mainframe.
Now the tape must be read by a DEC minicomputer.
Assume that the bits on the tape can be read correctly.
But DEC uses a different type of floating point than IBM.
Interpreting those bits is hard!

This is a common problem with "legacy data."
NASA (the USA National Aeronautical and Space Administration)
has warehouses full of tapes from various space missions written in
many different formats.
Much of this data is turning to dust for lack of programs that can read it.

## Question

Should the same numerical calculation,
  performed on two different computers,
    give the same result on each?
