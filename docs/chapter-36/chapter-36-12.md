---
sidebar_position: 12
title: "Static Objects"
---

Static Objects

## Answer

```
Hello World
Silly Example

```

## Content

```mips
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

# code for print method
          . . .
          
          .data
object1:  .word    print                    # Jump Table
          .asciiz  "Hello World\n"          # object data
          
object2:  .word    print                    # Jump Table
          .asciiz  "Silly Example\n"        # object's data

```


In Java,
objects are constructed from dynamic memory as the program runs.
However, to simplify the discussion (and the code) 
**this example uses
static memory for objects.**
This means that the objects already exist
in the `.data` section 
in memory when the program starts running.

The  program uses two objects 
in static memory
declared in the source file.

Each object is implemented like this:

```
byte 0-3: address of a method      # single-entry jump table
byte 4- : null terminated string   # as many bytes as needed

```

**The jump table contains just one address,**
the entry point of `print()`,
at the start of the object.
The following code  copies this address from `object1`
to `$t0`:

```mips
la       $a0,object1        # get address of first object
lw       $t0,0($a0)         # get address of object's method

```

Now  the entry point is in `$t0`.
Then object1's method is called.

Both objects contain the same address for the method.
**The program has only one copy of the code for the method.**

## Question

What instruction is used to call object1's method?
