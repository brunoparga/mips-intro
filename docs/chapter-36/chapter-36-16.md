---
sidebar_position: 16
title: "cancel()  Method"
---

cancel() Method

## Answer

- Add an entry to the jump table of each object.
- Add the code for the method to the program.

Since the layout of the object has changed,
some other small changes also need to be made.

## Content

**Let
 us add the
`cancel()` 
method to the objects.**
This (somewhat silly)
method replaces all the
characters of an object's
string with x's.

Here is the new design for
an object:

```
                                         # jump table:
byte 0-3: address of print()             # first entry point
byte 4-7: address of cancel()            # second entry point
                                         # data:
byte 4- : null terminated string         # as many bytes as needed

```

## Question

Complete the declaration for `object1:`:


```
object1:
          .word              # entry point for print
          .word              # entry point for cancel 
          .asciiz            # string data 

```
