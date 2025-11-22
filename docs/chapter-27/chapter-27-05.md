---
sidebar_position: 5
title: "Pushing and Popping Registers"
---

Pushing and Popping Registers

## Answer

Yes. Just be sure to synchronize the pushes and pops 
so the the correct values go into
the correct registers.

## Content

**Here
is a rule:**

- If a subroutine is expected 
to alter an S register,
it must first push its value onto the stack.
- Just before returning to the caller, the subroutine must pop the value from
the stack back into the register.

Here is an example program fragment.
Subroutine `subB` calls  `subC`
which uses two S registers.


```mips
subB:
         sub    $sp,$sp,4    # push $ra
         sw     $ra,($sp)

         . . . .

         jal    subC         # call subC
         nop

         . . . .
         
         lw     $ra,($sp)    # pop return address
         add    $sp,$sp,4
         jr     $ra          # return to caller
         nop

# subC might use $s0 and $s1  
# subC does not call another subroutine
#       
subC:             
         sub    $sp,$sp,4    # push $s0
         sw     $s0,($sp)
         sub    $sp,$sp,4    # push $s1
         sw     $s1,($sp)

         . . . .             # statements using $s0 and $s1

         lw     ,($sp)   # pop 
         
         add    $sp,$sp,4
         
         lw     ,($sp)   # pop 
         
         add    $sp,$sp,4

         jr     $ra          # return to caller
         nop

```

## Question

Fill in the blanks so that  `subB` sees its
S registers when it regains control.
