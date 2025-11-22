---
sidebar_position: 11
title: "Print Struct Subroutine"
---

Print Struct Subroutine

## Answer

```mips
         
        # write out the second struct    
        la       $a0,agest         # print "age:"
        li       $v0,4             # print string service
        syscall
        lw       $a0,0($s2)        # print age
        li       $v0,1             # print int service
        syscall

        li       $v0,10            # return to OS
        syscall       

        .data
pay:    .word   24000              # rate of pay, in static memory
agest:  .asciiz "age:   "

```

## Content

```mips
# Subroutine PStruct: print a struct
#
# Registers on entry: $a0 --- address of the struct
#                     $ra --- return address
#
# Registers:          $s0 --- address of the struct
#
        .text

PStruct:
        sub     $sp,$sp,4         # push $s0
        sw      $s0,($sp)         # onto the stack
        
        move    $s0,$a0           # make a safe copy 
                                  # of struct address
        la      $a0,agest         # print "age:"
        li      $v0,4
        syscall
        lw      $a0,0($s0)        # print age
        li      $v0,1
        syscall

        add     $sp,$sp,4         # restore $s0 of caller 
        lw      $s0,($sp)
        jr      $ra               # return to caller        

        .data
agest:  .asciiz "age:   "

```

Data in a struct is treated as a whole.
In Object Oriented terms, it is treated like an object.
**Here is a subroutine that takes a
struct as a parameter and prints it out.**
The subroutine  uses the
*Stack-based Calling Convention* of Chapter 27.
(It might not hurt you to review that chapter.)

For now, the subroutine prints only
the `age` field of the struct.
It uses register `$s0` so it must first push the
value in that register on the stack.
It does not call any other subroutine so it does not
push `$ra`.
(The SPIM service requests do not change `$ra`.)

**The argument is the **address** of the struct.**
A large struct can be passed as an argument to a
subroutine by calling the subroutine with the address of the struct.
The various fields of the struct are accessed using
displacements from the address.

For example, the age field of our struct is a displacement of
zero off of the struct's base address.
**The code gets the integer age using the statement
`lw $a0,0($s0)`.**

## Question

Why is register `$s0` used in this routine?
