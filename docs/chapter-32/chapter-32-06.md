---
sidebar_position: 6
title: "The Complete Program"
---

The Complete Program

## Answer

```mips
        c.eq.s  $f0,$f2          # is A = B?
        bc1t    printEQ          # yes: print equal

        c.lt.s  $f2,$f0          # is B < A?
        bc1t    printB           # yes: print B

                                 # otherwise A < B

```

## Content

Here is the complete program.

```mips
## min.asm --- determine the min of two floats
##
        .text
        .globl main

main:   # get the values into registers
        l.s     $f0,A
        l.s     $f2,B
        
        c.lt.s  $f0,$f2          # is A < B?
        bc1t    printA           # yes -- print A
        c.lt.s  $f2,$f0          # is B < A?
        bc1t    printB           # yes -- print B

        la      $a0,EQmsg        # otherwise
        li      $v0,4            # they are equal
        syscall
        mov.s   $f12,$f0         # print one of them
        b       prtnum
        
printA: la      $a0,Amsg         # message for A
        li      $v0,4
        syscall
        mov.s   $f12,$f0         # print A
        b       prtnum
        
printB: la      $a0,Bmsg         # message for B
        li      $v0,4
        syscall
        mov.s   $f12,$f2         # print B
        
prtnum: li      $v0,2            # print single precision
                                 # value in $f12
        syscall
        la      $a0,newl
        li      $v0,4            # print new line
        syscall
       
        li      $v0,10           # end program
        syscall

        .data
A:      .float  4.830
B:      .float  1.012
Amsg:   .asciiz "A is smallest: "
Bmsg:   .asciiz "B is smallest: "
EQmsg:  .asciiz "They are equal: "
newl:   .asciiz "\n"

```

## Question

Would you expect the condition bit (of the FPU) to
keep its value until it is altered by another comparison
instruction?
