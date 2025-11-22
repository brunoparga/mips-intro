---
sidebar_position: 6
title: "Floating Point Load Immediate"
---

Floating Point Load Immediate

## Answer

To free up a general purpose register for some other use.

(You might also push the register's contents on the run-time stack, and later
pop it back into the register.)

## Content

```mips
li.s   fd,val     # load register $fd with val
                  # (pseudoinstruction)

```

**There
is a floating point **load immediate** pseudoinstruction.**
This loads a floating point register with a
value that is specified in the instruction.

Here is a code snippet showing this:

```mips
li.s    $f1,1.0             # $f1 =  1.0
li.s    $f2,2.0             # $f2 =  2.0
li.s    $f10,1.0e-5         # $f10 = 0.00001
li.s    $f5,-0.1            # $f5 = -0.1

```

Recall that for SPIM assembly language, only lower-case "e" is allowed in floating point constants.
(Most programming language allow both upper and lower case.)

## Question

(Take a guess: ) Could the first instruction be written as    `li.s $f1,1`    ?
