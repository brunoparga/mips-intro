---
sidebar_position: 8
title: "Read Integer, Print Integer"
---

Read Integer, Print Integer

## Answer

The program prints "ello SPIM!"

The print service prints characters starting at the address it was given.

## Content

**The 
**read integer** service reads an entire line of input from
your keyboard—all the characters you type up to the `newline`
character.**
These characters are expected to be ASCII digits '0', '1', .., '9'
with an optional leading '-' or '+'.

**The characters are converted into a 32-bit two's complement representation
of the integer which is returned in `$v0`.**


```mips
li      $v0,5     # code 5 == read integer
syscall           # Invoke the operating system.
                  # Read in one line of ascii characters.
                  # Convert them into a 32-bit integer.
                  # $v0 ← two's comp. int.

```


**The **print integer** service prints the
integer represented by the 32 bits in 
`$a0` 
to the SPIM terminal.**
Of course, there are many ways that the integer can be placed in 
`$a0`,
not just  `lw`.


```mips
li      $v0,1     # code 1 == print integer
lw      $a0,int   # $a0 == the integer
syscall           # Invoke the operating system.
                  # Convert the 32-bit integer into characters.
                  # Print the character to the monitor.

```

## Question

What is wrong with the following fragment:

```mips
main:
        li      $v0,4       # code 4 == print string
        la      $a0,result  # $a0 == address 
        syscall             # Invoke the operating system.
        . . .
        .data
        
result: .word   35          # result of a calculation

```
