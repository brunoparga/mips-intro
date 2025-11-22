---
sidebar_position: 14
title: "Load Modules"
---

Load Modules

## Answer

Enterprise-wide programs are hundreds of thousands of lines long and
take hundreds of programmers and support staff.
It just would not work if they were all working on one big monster source
program.

## Content

![object to load](/Chapter-01/objectTOload.gif)

**In assembly language the
pieces of a big application program can be
written as separate source files and assembled into
separate object modules.
The separate object modules are then combined by
a linker into a **load module**, an executable file.**

This is how all modern software of any appreciable size is
written.
The object modules do not need to be created from
assembly language source.
A compiler of a high level language
(such as C)
creates object modules that look the same as those
from the assembler.
In the picture, object module A might be from
an assembly program,
object module B might be from a FORTRAN program,
and object module C might be from a COBOL program.

For many years, the only common languages that supported 
separate translation
were Assembly, FORTRAN, and COBOL.
For many years, the only common languages used in production
were Assembly, FORTRAN, and COBOL.
BASIC did not support separate compilation;
BASIC was never used for writing big applications.
Pascal did not support separate compilation;
Pascal was never used for writing big applications.
C supported separate compilation;
C is now the dominant language for writing applications.

## Question

C compilers come with libraries of useful
functions.  The *standard math library*
contains functions like *sin*, *cos*, and
*rand*.
What do you suppose a software library is?
