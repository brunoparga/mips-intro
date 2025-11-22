---
sidebar_position: 15
title: "Complete OO Program"
---

Complete OO Program

## Answer

Yes.

## Content

**Here is the complete program,
similar to what a compiler might output
for the example program** (four pages back)
in our imaginary OO language.

**The
methods (subroutines)
of objects in actual programs
would be called using a
stack-based linkage convention.**

Local variables of methods
would be locations in a stack frame
that is pushed onto the run-time stack
with each method activation.
Parameters would be passed to methods
and values returned to the caller
as described by the convention.
But let us avoid these complications.

Copy the program
to a file  
and run it with SPIM.
Your understanding
of object oriented programming
will greatly increase.

You would probably never  
code a program like this 
directly in assembly language.
**But OO concepts help,
even when designing assembly
laguage programs.**


```mips
#
#  CompleteOO.asm
#
          .globl   main
          .text
main:                                 # object1.print();
          la       $a0,object1        #   get address of first object
          lw       $t0,0($a0)         #   get address of object's method
          jalr     $t0                #   call the object's method
                                      
                                      # object2.print();
          la       $a0,object2        #   get address of second object
          lw       $t0,0($a0)         #   get address of object's method
          jalr     $t0                #   call the object's method
          
          li      $v0,10              # return to OS
          syscall

# Objects constructed in static memory.  An object consists of the data 
# for each object and a jump table of entry points common to all objects
# of its type.
          .data
object1:
          .word    print                    # Jump Table
          .asciiz  "Hello World\n"          # This object's data

object2:
          .word    print                    # Jump Table
          .asciiz  "Silly Example\n"        # This object's data

# Single copy of the print method
# Parameter: $a0 == address of the object
          .text         
print:
          li       $v0,4                   # print string service
          addu     $a0,$a0,4               # address of object's string
          syscall                          # 
          jr       $ra

```

## Question

(Thought Question: )
What two things would have to be done to add a second
method to the objects of this program?
