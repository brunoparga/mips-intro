---
sidebar_position: 13
title: "Subroutine Gets an Address"
---

Subroutine Gets an Address

## Answer

```mips
        . . . .
        
        # $s1 contains the address of the first struct
        # $s2 contains the address of the second struct
        #      
        # write out the first struct    
        move    $a0,$s1
        jal     PStruct
           
        # write out the second struct    
        move    $a0,$s2
        jal     PStruct

```

## Content

When
you call a subroutine in this manner, you 
think of the struct as being "sent" to the subroutine.
In reality,
**the struct stays where it is and the subroutine
just gets its address.**

The subroutine now has full access to the struct and can
copy values from fields and change values in field.
There is only one instance of this struct.
If the subroutine changes a field it is a permanent change.

Some high level language use other methods of passing arguments.
The style discussed here is similar to ANSI C.
**The argument to the subroutine would be a pointer to the struct.**
(See a few pages below.)

## Question

Would looking at and playing with a complete program help?
