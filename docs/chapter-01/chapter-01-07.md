---
sidebar_position: 7
title: "Program Translation"
---

Program Translation

## Answer

No.

## Content

The 
assembly language statement says the same thing as the machine language
instruction, but must be translated into a bit pattern before it can be executed.
**An assembly language *program* consists of assembly language statements,
statements that define data, and some additional information that helps in the
translation.**
Here is a fragment of an assembly language program and its translation into
bit patterns.


```mips
machine instructions                             assembly statements

0011 0100 0000 0001 0000 0000 0000 1001          ori  $1, $0, 9
0000 0000 0100 0001 0000 0000 0001 1000          mult $2, $1
0000 0000 0000 0000 0100 0000 0001 0010          mflo $8 
0011 0100 0000 0001 0000 0000 0000 1001          ori  $1, $0, 5
0000 0000 0100 0000 0000 0000 0100 1000          div  $8, $1

```

Years ago,
to run a program written in
FORTRAN you  used a
compiler to
translate the program
into assembly language.
Then you  used an assembler 
to translate
the assembly language into
machine language. 
Finally, you  loaded the machine
language into the computer's memory
and executed your program.

Modern compilers usually translate
a source program directly into machine language
which is contained in a file called an **object module**
(more on this later).
But for now let us think about translating
FORTRAN into assembly language.

FORTRAN is a high level language.
It is intended to run on all types of
computers regardless of architecture.
FORTRAN statements can be written without
knowing the architecture of the computer,
and can be run on any
computer (after translation).

## Question

Do you think that languages such as COBOL, C,
and Pascal are translated
like FORTRAN?
