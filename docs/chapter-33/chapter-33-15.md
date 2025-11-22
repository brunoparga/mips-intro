---
sidebar_position: 15
title: "malloc()"
---

malloc()

## Answer

A program in ANSI C asks for memory to be allocated with `malloc()`.

## Content

If you don't know C, the remaining pages of this chapter can be skipped.
However, they should be readable by everyone.
The ideas are similar to other modern languages.

**The `malloc()` function from the C standard library
requests a block of memory.**

```
void *malloc(size_t size)

```

**The function allocates a block of memory of `size` number of
bytes, and returns the address of the first byte of that block.**
(The data type of `size` is an unsigned integer.
The return type of the function is `void *` which is the
way ANSI C describes a memory address.)

Here is the start of our example assembly program:


```mips
main:    
        # create the first struct 
        li      $v0,9             # allocate memory
        li      $a0,12            # 12 bytes
        syscall                   # $v0 <-- address
        move    $s1,$v0           # $s1 first struct
        . . . .


```

And here is how this would be done in C:

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

  . . . .

```


The source code starts by including a file of standard definitions
that the compiler may use in compiling this source program.
Then the  `EMPLOYEE` structure is declared. 
This describes a layout of a memory block
but does not itself request memory.

**The `main()` routine of C is equivalent to the `main`
entry point of an assembly language program.** 
It is where the operating
system first sends control when it starts the program running.

The declaration of `empA` describes it as a variable that
is expected to contain an address of a block of memory suitable for
an `EMPLOYEE` structure.
In C, **this type of variable is called a **pointer**.**

The final statement (in this fragment) requests a block of memory.
The number of bytes is the size needed the structure.
The compiler determines this using the `sizeof` operator.
(Or we could explicitly put "12", but this is poor coding technique.)

**The address of the dynamically allocated block of memory is returned
by `malloc()` and assigned to the variable `empA`.**

## Question

Where in memory will the allocated bytes of memory come from?
