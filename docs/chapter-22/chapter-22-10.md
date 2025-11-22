---
sidebar_position: 10
title: "Read String"
---

Read String

## Answer

Remove the "\n" from " Pounds\n".

## Content

```mips
li      $v0,8       # code 8 == read string
la      $a0,buffer  # $a0 == address of buffer
li      $a1,16      # $a1 == buffer length
syscall             # Invoke the operating system.

 . . . .

        .data
buffer: .space 16   # reserve 16 bytes

```


**The **read string** service reads a string of 
characters into a memory starting at the address in
`$a0`.**
A block of bytes used this way is called a **buffer**.

**Register `$a1` contains the length (in bytes) of the input buffer.**
Up to `($a1)-1` characters are read from the keyboard and placed in
*buffer* as a **null terminated** string.

**The user types in characters and then ends the string by hitting "enter".**
The characters are copied into the input buffer.

The "enter" character appears in the buffer
as the newline character '\n', `0x0a`.
This byte is followed by the null byte `0x00`.
If the user enters a string that is exactly 
`($a1)-1` characters long the newline
character is omitted from the buffer.
No matter what, there is a null at the end of data in the buffer.

## Question

Is the string that is read in immediately suitable
for output using the *print string* service?
