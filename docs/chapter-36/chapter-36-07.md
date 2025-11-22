---
sidebar_position: 7
title: "Dynamic Jump Table    (simulated)"
---

Dynamic Jump Table  (simulated)

## Answer

4

## Content

With
SPIM,
you write a program as one big source file.
All entry points are labeled, 
and subroutines can be called with `jal`.
However,
large programming projects
are usually written with dozens of source files
which are later on assembled (or compiled) and linked
together
(see
[Chapter One](../chapter-01/chapter-01-14).)

**Operating systems often support **dynamic loading**,
where
the machine code
for a subroutine is loaded (by the operating system) only when a
running program requires it.**
After the subroutine is loaded,
its entry point is put into a jump table. 
A collection of machine code that
can be dynamically loaded is kept in a
**dynamically loaded library**.

Here is our example program modified to give the feel of this:


```mips
          .globl   main
          .text
main: 
          . . . .
          
          # Assume that when the program is first loaded into
          # memory that the subroutines are NOT loaded with it.
          # After running for a while, the program needs to
          # call sub1. Only at that time is sub1 loaded and
          # the first entry in the jump table is filled in.
          
          lw       $t0,jtable         # call sub1
          jalr     $t0                # pass control

          . . . .
          # After running for a while longer, the program
          # needs to call sub2. At that time, sub2 is loaded
          # and the second entry in the jump table is filled in.
                    
          lw       $t0,jtable+4       # call sub2
          jalr     $t0                # pass control
          
          li      $v0,10              # return to OS
          syscall

          .data
jtable:
          .word sub1                  # Jump Table (pretend that the
          .word sub2                  # addresses are filled in at run-time).
          
          .globl   sub1               # Pretend that this subroutine is loaded
          .text                       # into memory only after the main routine
sub1:     li       $v0,4              # has started running, and that its entry
          la       $a0,messH          # point is then filled into the jump table.
          syscall
          jr       $ra
          .data
messH:    .asciiz  "Hello "

          .globl   sub2               # The second subroutine works the same
          .text                       # as the first.
sub2:     li       $v0,4
          la       $a0,messW
          syscall
          jr       $ra
          .data
messW:    .asciiz  "World\n"


```


Pretend that at first only `main` and its
jump table are loaded into memory,
and that the jump table is full of zeros.
Then,
later on,
the program calls the first subroutine.
At that time,
the operating system pauses the program,
loads the subroutine into memory,
and puts its address into the jump table.
The program then resumes running.

**Now the subroutine is called
using the jump table.**
The instruction

```mips
lw  $t0,jtable  # call sub1

```

loads the first address of the jump table
into `$t0` .
Then the `jalr` instruction calls it.

Later on the process is repeated
with the second subroutine.
The instruction

```mips
lw  $t0,jtable+4  # call sub2

```

loads the second address of the jump table
into `$t0` .
The `jtable+4` means to use the
address that is four bytes away from
the symbolic address `jtable`.

## Question

Could several running programs
share the same dynamic library?
