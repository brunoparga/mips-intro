---
sidebar_position: 9
title: "Second node"
---

Second node

## Answer

```mips
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

```

## Content

![Three-node linked-list](/Chapter-35/threeNodeListSecond.gif)


```mips

        # create the second node 
        li      $v0,9             # allocate memory
        li      $a0,8             # 8 bytes
        syscall                   # $v0 <-- address
        
        # link the second node to the first
        
        sw      ,4()        # copy address of second node
        
                                  # into the first node
        
        # make the new node the current node
        
        move    $s1,           # $s1 = &(second node)

        # initialize the second node
        li      $t0,2             # store 2
        sw      $t0,0($s1)        # at displacement 0

```
Now 
look at the second node. Rather than use a second register
to point to the second node `$s1` is used again.

**The critical step here is to copy the address of the second node
(contained in `$v0`)
into the register  `$s1`,**
which is the pointer to the current node.

In the documentation,
`&(second node)`
means "address of the second node".
This is similar to the language C.

## Question

Fill in the blanks.
