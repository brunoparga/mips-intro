---
sidebar_position: 2
title: "Addresses in Memory"
---

Addresses in Memory

## Answer

Of course.

## Content

An
address is a 32-bit pattern, 
and any 32-bit word
of main storage can hold it.
For example,
here is a fragment of a program:


```mips
          .text
sub1:     li       $v0,4                # service code 4, print string
          la       $a0,messH            # address of string to print
          syscall                       # invoke the service
          jr       $ra                  # return to caller
          .data
messH:    .asciiz  "Hello "

          .text
sub2:     li       $v0,4                # service code 4, print string
          la       $a0,messW            # address of string to print
          syscall                       # invoke the service
          jr       $ra                  # return to caller
          .data
messW:    .asciiz  "World\n"

          .data
sub1add:  .word sub1                    # address of the first subroutine
sub2add:  .word sub2                    # address of the second subroutine

```

The symbolic address `sub1`
stands for whatever 32-bit address
the first byte of the first subroutine
gets loaded into at run time.

In the `.data` section
at the end 
of the program,
**the address represented by `sub1`
is stored in memory,
at the symbolic address  `sub1add`.**

Part of the job of the assembler and the loader is to
determine where in memory various parts of a program go.
In source code, you use symbolic addresses for these locations.

The source code interleaves text and data, but 
**the assembler and loader will put all machine code 
into the text section of memory and all data into the
data section of memory.**

## Question

If the address of `sub1` is `0x00400000`,
what bit pattern do you expect to see in memory
at the location `sub1add`?
