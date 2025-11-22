---
sidebar_position: 8
title: "Fields within a Struct"
---

Fields within a Struct

## Answer

12 bytes, four bytes for each of three integers.

## Content

**A block of memory for this struct consists of twelve bytes.**
The first field (`age`) is located at a displacement of
zero into the block.
The second field (`pay`) is located at a displacement of
four into the block.
The last field (`class`) is located at a displacement of
eight into the block.

```
struct
{
  int age;  
  int pay;
  int class;
} myData ;

```

## Question

Say that register `$s1` holds the address of a struct like the above.
Fill in the blank so that register `$t0` gets the value in the
 `pay` field:



```mips
lw $t0, (  )    # load the pay

```
