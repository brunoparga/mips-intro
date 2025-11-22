---
sidebar_position: 20
title: "Subroutine PStruct"
---

Subroutine PStruct

## Answer

Yes.

## Content

Here is the original (short) version of the subroutine in assembly:

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

And here is the equivalent in C:

```
void PStruct( struct EMPLOYEE *emp )
{
  printf("age: %d", emp->age );
}

```

The parameter list of the C subroutine says that its parameter
is a pointer to an `EMPLOYEE` structure.
This pointer (address) will be called `emp`.
The structure is accessed by following the address: `emp->`
and parts of the structure are accessed by displacements into the block of memory:
`emp->age`

## Question

Does the C subroutine explicitly contain code for the subroutine prolog and epilog?
