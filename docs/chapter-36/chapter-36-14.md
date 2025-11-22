---
sidebar_position: 14
title: "The   print()   Method"
---

The  print()  Method

## Answer

```
object2:
          .word    print                    # Jump Table
          .asciiz  "Silly Example\n"        # This object's data

```

## Content

**The
 `print()` method is put in the `.text`
section of memory:**


```mips
# Single copy of the print method
# Parameter: $a0 == address of the object
          .text         
print:
          li       $v0,4                   # print string service
          addu     $a0,$a0,4               # address of object's string
          syscall                          # 
          jr       $ra                     # return to caller

```


**There is only one copy of the method.
But it  acts as if were
a part of each object.**
This is done by
copying 
into `$a0`
the address of the object 
using `print`.

Here is how 
`main()`
does this:


```mips
                            # object1.print();
la       $a0,object1        #   Get address of first object.
lw       $t0,0($a0)         #   Get address of object's method.
jalr     $t0                #   Call the object's method.
                            #   The address of the object is
                            #   in $a0.

```


In `print()`,
the address of the string
*within the object that is using*
`print()`
is computed by:


```mips
addu     $a0,$a0,4           # address of object's string

```


This places the string's address in
`$a0`
where the print string service expects it.

## Question

(Thought Question: ) In a real-world program,
should a subroutine calling convention be
used when object methods are called?
