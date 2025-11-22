---
sidebar_position: 4
title: "Jump Table"
---

Jump Table

## Answer

`0x00400014`

Look at the data section.
The
second subroutine's address 
is stored in memory right after the first subroutine's address.

## Content

```mips
          .text
sub1:     li       $v0,4
          la       $a0,messH
          syscall
          jr       $ra
          .data
messH:    .asciiz  "Hello "

          .text
sub2:     li       $v0,4
          la       $a0,messW
          syscall
          jr       $ra
          .data
messW:    .asciiz  "World\n"

          .data
sub1add:  .word sub1                    # Jump Table
sub2add:  .word sub2

```

Look
again at the example program.

**A table of addresses
is called a **jump table**.**
It is a list
of locations that that control can
jump to.

Usually there would be a `main` or other routine that
calls the subroutines.
Our example does not have this, yet.

## Question

What is the usual instruction for passing
control to a subroutine?
