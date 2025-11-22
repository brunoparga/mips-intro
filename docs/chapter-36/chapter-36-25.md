---
sidebar_position: 25
title: "Method Definitions"
---

Method Definitions

## Answer

In a file that defines the object.
In Java, this would be a class file.
(Or, a source file written in Java
that is compiled into a class file.)

## Content

We
 will not copy method definitions
from a separate file but will include them
in the program.
Here is the code for the `print()` method:

```mips
# print() method
# Parameter: $a0 == address of the object
          .text         
print:
          li       $v0,4              # print string service
          addiu    $a0,$a0,8          # address of object's string
          syscall                     # 
          jr       $ra

```

## Question

Is this `print()` method for
our dynamically-allocated object
the same as for the static objects?
