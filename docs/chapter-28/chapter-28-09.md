---
sidebar_position: 9
title: "main()"
---

main()

## Answer

Four bytes, for the single variable `a`.

## Content

```mips
#  main()
#  {
#    int a;
#    a = mysub( 6 );
#    print( a );
#  }

         .text
         .globl  main
main:
                                  # prolog        
         sub     $sp,$sp,4        #   1. Push return address
         sw      $ra,($sp)
         sub     $sp,$sp,4        #   2. Push caller's frame pointer
         sw      $fp,($sp)
                                  #   3. No S registers to push in this case
                                  
         sub      , ,     #   4. $fp = $sp - space_for_variables
         

            $sp,$fp         #   5. $sp = $fp
         

                                  # subroutine call

         . . . .
         
                                  # return from subroutine   
         
         . . . .     
         
                                  # epilog
                                  # return to OS 


```Here
is the code for `main()`, with some blanks.
The rules for the subroutine prolog are copied from above.

Recall that

```mips
  sw      $ra,($sp)

```

is shorthand for

```mips
  sw      $ra,0($sp)

```

The instruction stores the contents of `$ra`
at the address in the stack pointer.
(The contents are stored on the top of the stack.)

## Question

Fill in the blanks as the comments suggest.
