---
sidebar_position: 11
title: "Multitasking"
---

Multitasking

## Answer

What must the application do when it is finished
running?

Pass control back to the operating system.

## Content

With 
Microsoft's DOS, programs were passed control, ran until completion,
then passed control back to DOS.
So only one application ran at a time.
Worse, an application that messed up might never
return control to DOS and the whole system would freeze.

Modern computer systems 
include features that
can interrupt the control flow of an
executing program.
After the flow is interrupted,
the operating system can give control to
another application.
**If this is done many times a second the computer
system appears to be simultaneously executing
several applications.**

**This trick is called 
**multitasking**.**
It has been used from about 1960 for mainframes,
from 1978 for many microcomputers,
and from about 1995 for Windows PCs.

The MIPS chip has very good
support for multitasking.
But this is an advanced topic
not included
in our basic programming model.

MS-DOS was the operating system that came with the original
IBM PC in 1981. The final release was the year 2000.

## Question

Do human brains do multitasking?
