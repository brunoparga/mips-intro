---
sidebar_position: 11
title: "Complete Program"
---

Complete Program

## Answer

No.  The second node can be reached by starting at `first`
and following the links.

## Content

```mips
# threenodeList.asm
#
        .text
        .globl  main

main:    
        # create the first node 
        li      $v0,9             # allocate memory
        li      $a0,8             # 8 bytes
        syscall                   # $v0 <-- address
        move    $s1,$v0           # $s1 = &(first node)
        
        # copy the pointer to first
        sw      $s1,first
        
        # initialize the first node
        li      $t0,1             # store 1
        sw      $t0,0($s1)        # at displacement 0

        # create the second node 
        li      $v0,9             # allocate memory
        li      $a0,8             # 8 bytes
        syscall                   # $v0 <-- address
        
        # link the second node to the first
        sw      $v0,4($s1)        # copy address of second node
                                  # into the first node
        
        # make the new node the current node
        move    $s1,$v0           # $s1 = &(second node)

        # initialize the second node
        li      $t0,2             # store 2
        sw      $t0,0($s1)        # at displacement 0

        # create the third node 
        li      $v0,9             # allocate memory
        li      $a0,8             # 8 bytes
        syscall                   # $v0<-- address
        
        # link the third node to the second
        sw      $v0,4($s1)        # copy address of third node
                                  # into the second node
        
        # make the new node the current node
        move    $s1,$v0           # $s1 = &(third node)

        # initialize the third node
        li      $t0,3             # store 3
        sw      $t0,0($s1)        # at displacement 0

        # end the list
        sw      $0,4($s1)         # put null in the link field
                                             
        li      $v0,10            # return to OS
        syscall       

        .data
first:  .word   0

```

**In a linked list, you need a pointer to the
head node (in our field  `first`).**

Then you can follow the links from node to node to reach any node.

Here is the complete program.
Run it with SPIM and  look at the display of memory to see
that the list has been built correctly.

## Question

Where in memory will the linked list be located?
