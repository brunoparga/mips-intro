---
sidebar_position: 24
title: "Complete Main"
---

Complete Main

## Answer

See below.

## Content

Here
 is the complete `main()`.

```mips
          .globl   main
          .text
main:                                 # object1 = new object(); 
          li       $v0,9              #   allocate 32 bytes
          li       $a0,32             #  
          syscall                     #   $v0 = address
          sw       $v0,object1        #
          
          la       $t0,print          #   initialize jump table
          sw       $t0,0($v0)         #   
          la       $t0,read           #
          sw       $t0,4($v0)         #
          
                                      # object1.read();
          lw       $a0,object1        #   get address of object1
          lw       $t0,4($a0)         #   get address of read method
          jalr     $t0                #   call the method
          
                                      # object1.print();
          lw       $a0,object1        #   get address of first object
          lw       $t0,0($a0)         #   get address of print method
          jalr     $t0                #   call the method
          
          li      $v0,10              # return to OS
          syscall

          .data
object1:  .word    0
object2:  .word    0

```

The program needs the code for
the `print()` and the `read()` method.

## Question

Where would a compiler of an OO language find
the code for the methods?
