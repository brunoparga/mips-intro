---
sidebar_position: 8
title: "Example Program"
---

Example Program

## Answer

No.  As many variables as needed may be pushed onto the stack.

This results in the rule that a subroutine (in a language like C or Java)
can have as many local variables as needed.

## Content

```
main()
{
  int a;
  a = mysub( 6 );
  print( a );
}

int mysub( int arg )
{
  int b,c;
  
  b = arg*2;
  c = b + 7;
  
  return c;  
}


```

The number of registers that MIPS (or other processor) has does not
limit the number of variables that subroutines can have.
As many variables as you want can be allocated on the stack.
Here is an example program, written in a C-like language.

To the operating system, `main()` is a subroutine.
**When `main()` first gets control
the stack pointer `$sp`
will be initialized correctly to point to the top of stack.**
`main()` then  follows the rules under "subroutine prolog".

The prolog for `main()` must push the caller's registers
and set up its local variables.

For qtSPIM, return to the system is done using
trap handler service 10 and the
`syscall` instruction.

## Question

How many bytes on the stack are needed for the
variables in `main()`?
