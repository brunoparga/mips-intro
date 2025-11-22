---
sidebar_position: 17
title: "Example Program: Factorial( N )"
---

Example Program: Factorial( N )

## Answer

```

## Content

```mips

#  main()
#  {
#    int a, b;  // a: 0($fp),  b: 4($fp)
#    write("enter an int:")
#    read( a );
#    b = fact( a );
#    write("factorial is:")
#    print( b );
#  }

#  int fact( int n )
#  {
#    if ( n <= 1 )
#      return 1;
#    else
#      return n*fact(n-1);
#  }

```


**The rest of the chapter describes how recursion is implemented 
using stack frames.**
High level languages like C use frames to store the values
for each step of a recursive computation.

It would be OK to skip to the next chapter at this point.

This  example program prompts the user
for an integer, reads in the integer,
and prints the factorial.
The SPIM console window shows the output
of several runs of the program.

The math definition of factorial is:

```
fact( n ) = 1, if n <= 1
          = n * fact( n-1 ), 
            otherwise

```

The program shows this in pseudo-code.

## Question

You have very likely seen the factorial function before
(and are very likely sick of it!)
But just in case:



What is the factorial of 5?
