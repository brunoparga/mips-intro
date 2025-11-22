---
sidebar_position: 17
title: "A Second Struct"
---

A Second Struct

## Answer

Of course!

## Content

The assembly language program continues by allocating memory for 
a second struct and copying values from the first struct to the second:

```mips
        # create the second struct 
        li      $v0,9             # allocate memory
        li      $a0,12            # 12 bytes
        syscall                   # $v0 <-- address
        move    $s2,$v0           # $s2 second struct
           
        # copy data from first struct to second     
        lw      $t0,0($s1)        # copy age from first
        sw      $t0,0($s2)        # to second struct
        lw      $t0,4($s1)        # copy pay from first
        sw      $t0,4($s2)        # to second struct
        lw      $t0,8($s1)        # copy class from first
        sw      $t0,8($s2)        # to second struct

```

And so does the C program:

```
  struct EMPLOYEE *empB;     /* declaration of a second pointer variable empB */

  empB = (struct EMPLOYEE *)malloc( sizeof( struct EMPLOYEE) );

  empB->age = empA->age;
  empB->pay = empA->pay;
  empB->class = empA->class;  

```

**The pointer variables `empA` and `empB`
act as base addresses.**
The a field  of a struct is located at a displacement  off of a base address.

## Question

What do you think would be the result of the following  C statement?

```
empB = empA;

```
