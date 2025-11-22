---
sidebar_position: 7
title: "Three Node List"
---

Three Node List

## Answer

```mips
        # create the first node 
        li      $v0,9             # allocate memory
        li      $a0,8             # 8 bytes
        syscall                   # $v0 <-- address
        move    $s1,$v0           # $s1 = &(first node)
        
        # copy the pointer to first
        sw      $s1,first 
        
        # initialize the node
        li      $t0,1             # store 1
        sw      $t0,0($s1)        # at displacement 0
        
        # create the second node 
        . . . .    
        
        .data
first:  .word  0    # address of the first node

```

## Content

![Three Node List being built](/Chapter-35/threeNodeList.gif)


**Now let us build a linked list with three nodes.**
This will be done with an eye to generalizing the procedure to build
lists with any number of nodes.
The picture shows this.

Register `$s1`
will be used to point to each node as it is being built.

## Question

Why do we want to use `$s1` for all nodes?

Why not use a different pointer
register for each node of the linked list?
