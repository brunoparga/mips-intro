---
sidebar_position: 24
title: "Complete Program Design"
---

Complete Program Design

## Answer

`'a' - ('a' - 'A') == 'A'`, or, `'a' - 32 == 'A'`.
Subtracting 32 from a lower case character results in the corresponding
upper case character (in ASCII).

## Content

![Complete program design](/Chapter-27/design.gif)

Here
is the complete design of the program.
Glance over it to get the general idea.
Its individual routines are explained in the following
pages.
This design uses more subroutines than usual
because its purpose is to show  subroutine linkage.

A subroutine starts with a pill-shaped box 
that shows the name of the subroutine.
A box with double vertical lines for its sides 
(like `doLines` in `main`)
designates a subroutine call.
The program starts execution with `main`.

## Question

At the maximum, how many levels deep is subroutine nesting in this program?
