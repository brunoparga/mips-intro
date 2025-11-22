---
sidebar_position: 9
title: "Example Program"
---

Example Program

## Answer

The code is in error.  The print string service 4 would send the bytes
starting at `result` to the monitor.
But these bytes encode 35 using 32-bit two's complement.
They are not the bytes for ASCII characters.

## Content

```mips
# ounces.asm
#
# Convert ounces to pounds and ounces.

        .text
        .globl  main

main:   li      $v0,4       # print prompt
        la      $a0,prompt  #
        syscall
        li      $v0,5       # read in ounces
        syscall

        li      $t1,16      # 16 oz. per pound
        divu    $v0,$t1     # lo = pound; hi = oz.

        mflo    $a0
        li      $v0,1       # print
        syscall             # pounds
        li      $v0,4       # print "pounds"
        la      $a0,pout
        syscall

        mfhi    $a0         # print
        li      $v0,1       # ounces
        syscall             # 
        li      $v0,4       # print
        la      $a0,ozout   # "ounces"
        syscall

        li      $v0,10      # exit
        syscall

        .data
prompt: .asciiz "Enter ounces: "
pout:   .asciiz " Pounds\n"
ozout:  .asciiz " Ounces\n"


```

**The example program reads in an integer,
presumed to be a number of ounces, then writes out
the equivalent number of pounds and ounces.**

As is often the case, input and output
dominate the program.
The actual calculation is hard to find.

## Question

The program prints "Pounds" and "Ounces" on separate lines.
Change the program so that they are printed on one line.
