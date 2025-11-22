---
sidebar_position: 20
title: "Dynamic Objects"
---

Dynamic Objects

## Answer

Of course.
This is how Java
constructs objects.
In Java,
an object does not exist
until it is constructed at run time.

Other languages have static objects,
much as implemented above.

## Content

Let
us write an assembly language program
that is roughly equivalent to the following
program in a Java-like language:

```
begin
  object1 = new object();
  object1.read();
  object1.print();
end;

```

**The assembly program 
will be similar to what a compiler
might output if it compiled the Java-like
program into MIPS assembly.**

With a compiler,
the design of an object 
and its methods
is in a class definition.
With assembly programming,
there needs to be a design for the objects
but the design is not part of the program.

Here is a new design for the objects:

```
byte 0- 3: address of print()         # jump table
byte 4- 7: address of read()
byte 8-31: null terminated string     # 24 bytes (fixed size)

```

**To simplify things,
our objects have a fixed size.**
The string is contained 
in a fixed block of 24 bytes.

## Question

Do objects in real programs  have a fixed size?
