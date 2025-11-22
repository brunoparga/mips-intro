---
sidebar_position: 7
title: "Records and Structs"
---

Records and Structs

## Answer

You can guess that it will follow the first block.
**However**, this is not necessarily so, and you should not rely on this expectation.
In a real operating system with many tasks and threads, it is almost certain that
the next block **will not** immediately follow the first.

## Content

**A **record**
is a block of memory that contains several data items.**
The data may be of several types, say an `int` followed by
a `float` followed by a `short`.
The language **C calls this idea a **struct**** (short for "structure").
An big extension of this idea is called an "object".
Records are frequently stored in dynamically allocated memory.

Say that you had hundreds of data that look like this:

```
struct
{
  int age;  
  int pay;
  int class;
} myData;

```

This just says that each data item consists of three integers,
the age of a person, their pay rate, and their job classification.

## Question

In MIPS, how many bytes are needed for this `struct`?
