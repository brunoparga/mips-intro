---
sidebar_position: 22
title: "Initializing the Object"
---

Initializing the Object

## Answer

```mips
          .globl   main
          .text
main:                                 # object1 = new object(); 
          li       $v0,9              #   allocate 32 bytes
          li       $a0,32             #  
          syscall                     #   $v0 = address
          sw       $v0,object1        #

          . . . . . .

          .data
object1:  .word    0
object2:  .word    0

```

The code allocates memory for the object
and saves its address.

## Content

**Next, 
the newly allocated memory must be initialized
(in an object-oriented language this would be
done by the object *constructor*).**

Here,
again,
is the layout of the object:

```
byte 0- 3: address of print()         # jump table
byte 4- 7: address of read()
byte 8-31: null terminated string     # 24 bytes (fixed size)

```

Here is the code that initializes the object.
Register `$v0`
contains the address of the object.


```mips
          
          la       $t0,       #   initialize jump table
          
          sw       $t0,0($v0)        #   
          
          la       $t0,       #
          
          sw       $t0,4($v0)        #

          . . . 
read:                                # to be defined later

print:                               # to be defined later

```Assume that the entry point for the `read()`
is given by symbolic address `read`, and
that the entry point for the `print()`
is given by symbolic address `print`.

## Question

Fill in the blanks.
