---
sidebar_position: 5
title: "The Traditional Example"
---

The Traditional Example

## Answer

```mips
li  $v0,4          # code 4 == print string
la  $a0,message    # $a0 == address of the string
syscall            # Ask the operating system to 
                   # perform the service.
    . . . .

         .data
message: .asciiz      "Intruder Alert!\n"

```

## Content

```mips
# hello.asm
#
        .text
        .globl  main
main:
        li      $v0,4       # code 4 == print string
        la      $a0,string  # $a0 == address of the string
        syscall             # Invoke the exception handler.

        li      $v0,10      # code 10 == exit
        syscall             # Halt the program.

        .data
string: .asciiz      "Hello SPIM!\n"


```

You
are now ready to see the program you probably expected to
see in Chapter One.**The above program prints a string,
then calls the **exit** service.**

The string is printed to the 
monitor window of the simulator.
The program is complete, and can be copied into
a source file and run as is.
But see the next page first.

## Question

On a real (hardware) computer,
what is the exception handler?
