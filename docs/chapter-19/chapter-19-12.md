---
sidebar_position: 12
title: "Sequence"
---

Sequence

## Answer

`
delimit  a block.

## Content

![sequence of program blocks](/Chapter-19/blockSequence.gif)

Pascal,
C, and Java are structured languages.
A block of statements in those languages has one
entry point and one exit point.

What about two blocks in a row?
Say that the exit conditions of block 1
are the correct entry conditions for block 2.
Then the two blocks can follow in sequence.

**The set of two blocks can be regarded as
one big block.**
If the entry conditions for block 1 are correct,
then the exit conditions for block 1 are correct,
then the entry conditions for block 2 are correct,
then (finally) the exit conditions for block 2 are correct.

**In terms of the big block,
if the entry conditions for the big block are correct,
then the exit conditions for the big block are also correct.**

## Question

Look at the big block (in dotted lines).
If the big block entry conditions are correct,
what do you know about the big block exit conditions?
