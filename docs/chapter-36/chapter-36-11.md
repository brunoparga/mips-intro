---
sidebar_position: 11
title: "Example Program"
---

Example Program

## Answer

No. The machine code for all objects of
the same type are shared, and not part
of any one object.

However, 
when thinking about objects,
coded in an object oriented language,
it is convenient to think of an object as one
"thing" consisting of all of its parts.

## Content

![Two Objects](/Chapter-36/twoObjects.gif)

**Here is a program 
in an imaginary object-oriented language
that
contains two objects.**
Conceptually,
each object consists of a text
message and a `print()` method
that prints the message.

In implementation,
the code for the method will is outside of the object.
The picture shows
the program conceptually.

```
 
main()
{
  MyClass object1("Hello World");
  MyClass object2("Silly Example");
  
  object1.print();
  object2.print();
}

```

**The `main()` routine
holds the address of each object.**
This is symbolized by the arrows that
point to each object.
The program will first call
the `print()` method of
the first object,
and then call 
the `print()` method of
the second object.

## Question

What output do you expect from
this program?
