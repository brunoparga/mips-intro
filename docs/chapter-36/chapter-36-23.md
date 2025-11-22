---
sidebar_position: 23
title: "Calling the Methods"
---

Calling the Methods

## Answer

```mips
         
la       $t0,print          #   initialize jump table
sw       $t0,0($v0)         #   
la       $t0,read           #
sw       $t0,4($v0)         #

```

The **la** is the correct one
to use because we need the address that
`print` stands for,
not the contents of that location.

## Content

After
constructing the object,
the program invokes
each method of the
object.

```mips
     
                                      # object1.read();
          lw       $a0,          #   get address of object1
          
          lw       $t0, ($a0)    #   get address of read method
          
          jalr                   #   call the method
          
                                      # object1.print();
          lw       $a0,          #   get address of first object
          
          lw       $t0, ($a0)    #   get address of print method
          
          jalr                   #   call the method
          
          li      $v0,10              # return to OS
          syscall

```

## Question

Fill in the blanks.
