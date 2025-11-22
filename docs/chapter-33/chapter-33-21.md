---
sidebar_position: 21
title: "Complete C Program"
---

Complete C Program

## Answer

No. The compiler supplies the machine code for this automatically.

## Content

Here is a complete C program, roughly the equivalent of the assembly
language program:

```
#include <stdlib.h>    /* include a header file of standard definitions */

struct EMPLOYEE              /* Declaration of a type of struct */
{                            /* This does not allocate any memory */
  int age;
  int pay;
  int class;
};

main()
{
  struct EMPLOYEE *empA;     /* declaration of the pointer variable empA */

  empA = (struct EMPLOYEE *)malloc( sizeof( struct EMPLOYEE) );

  empA->age = 34;
  empA->pay = 24000;
  empA->class = 12;
  
  struct EMPLOYEE *empB;     /* declaration of a second pointer variable empB */

  empB = (struct EMPLOYEE *)malloc( sizeof( struct EMPLOYEE) );

  empB->age = empA->age;
  empB->pay = empA->pay;
  empB->class = empA->class;
  
  PStruct( empA );  /* Write out the first struct */
  PStruct( empB );  /* Write out the second struct */
  
  system("pause");
}

void PStruct( struct EMPLOYEE *emp )
{
  printf("age: %d  ", emp->age );
  printf("pay: %d  ", emp->pay );
  printf("class: %d\n", emp->class );
}


```

The print subroutine has been expanded to print out all the fields of the struct.

## Question

Think of some interesting things to do with these   programs.
