---
sidebar_position: 6
title: "List Header"
---

List Header

## Answer

Of course.

## Content

![List Header](/Chapter-35/headerList.gif)

It
is common to have a field in main memory that points to
the first node of the linked list.
The picture shows this.

**The word of memory at location `first` contains the
address of (points to) the first node of the linked list.**
Sometimes a field like this is called a **header**
to the linked list.

(Note: the first node is called the head of the list,
the field that points to it is called the header.
Unfortunately people are not consistent about this.)

Now the address of the first node is contained in two places
(both colored red). Here is the code that does this:


```mips
        # create the first node 
        li      $v0,9             # allocate memory
        li      $a0,8             # 8 bytes
        syscall                   # $v0 <-- address
        move    $s1,$v0           # $s1 = &(first node)
        
        # copy the pointer to first
        sw       , 
        
        # initialize the node
        li      $t0,1             # store 1
        sw      $t0,0($s1)        # at displacement 0
        
        # create the second node 
        . . . .    
        
        .data
first: .word  0    # address of the first node

```

## Question

Fill in the blanks to complete the code.
