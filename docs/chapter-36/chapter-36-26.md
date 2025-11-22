---
sidebar_position: 26
title: "Read Method"
---

Read Method

## Answer

Yes. It makes no difference where
the memory for the object came from.

## Content

**The
`read()` method,
like the `print()` method,
is called with the address of the object
in `$a0`
as a parameter.**

Since  `$a0` is needed
by  `syscall`,
its value must be saved upon entry to the method.

Later in the code the base address
of the object is used to calculate the
location of the string in the object.
The jump table has two 4-byte addresses
in it,
so 8 is added to the base address.

Our objects are fixed-sized,
with a 24 byte buffer.
The read string service is given the
buffer size as one of its parameters.


```mips
# read() method
# Parameter: $a0 == address of the object
# 
          .text         
read:
          move     $s1,$a0            # save object's address
          li       $v0,4              # print string service
          la       $a0,prompt         # address of object's string
          syscall                     # 
          
          addiu    $a0,$s1,8          # $a0 = address of buffer
                                      #       in object
          li       $a1,24             # $a1 = size of buffer
          li       $v0,8              # read string service
          syscall 
 
          jr       $ra                # return to caller

          .data
prompt:   .asciiz  "enter data > "

```

## Question

Say that you wanted the objects to hold strings of any size.
How could this be done?
(Hint: think about the previous chapter.)
