---
sidebar_position: 17
title: "Behavior of Object's Methods"
---

Behavior of Object's Methods

## Answer

```
object1:
          .word    print             # entry point for print
          .word    cancel            # entry point for cancel
          .asciiz  "Hello World"     # string data

```

## Content

**The 
`cancel()` method must affect
only the data of the object it is called with.**

Here is a hypothetical program written in
an object oriented language:

```
 
main()
{
  MyClass object1("Hello World");
  MyClass object2("Silly Example");
  
  object1.print();
  object1.cancel();
  
  object1.print();
  object2.print();
}

```


The first activation of 
`print()`
works with the data of
`object1.`
Then,
the activation of 
`cancel()`
causes it to alter just the data of that object.

The second activation of 
`print()`
causes it to print the altered data of
`object1.`
The data of `object2`
has not been affected by all this:

```
Hello World
xxxxxxxxxxx
Silly Example

```

## Question

(Review: ) 
How does a method
access the data of an object?
