---
sidebar_position: 12
title: "Calling the Subroutine"
---

Calling the Subroutine

## Answer

By convention, register `$a0` is used to pass the argument.
But in the body of the subroutine
register `$a0` is used to pass arguments to
the SPIM service.
So a safe copy must be made in an "S" register.

## Content

The main program (above)
is modified to  use the subroutine to print out both structs.
Assume the following code has been copied into main:

```mips
        . . . .
        
        # $s1 contains the address of the first struct
        # $s2 contains the address of the second struct
        #      
        # write out the first struct    
        
        move     , 
        
        jal     PStruct
           
        # write out the second struct    
        
        move     , 
        
        jal     PStruct
        

```

## Question

Fill in the blanks.  Look back at the subroutine if needed.
