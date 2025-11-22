---
sidebar_position: 8
title: "First node"
---

First node

## Answer

With a long list, we would soon run out of registers.

## Content

![Three Node List Start](/Chapter-35/threeNodeListStart.gif)


```mips
main:    
        # create the first node 
        li      $v0,9             # allocate memory
        li      $a0,8             # 8 bytes
        syscall                   # $v0 <-- address
        move    $s1,$v0           # $s1 = &(first node)
        
        # copy the pointer to first
        sw       , 
        
        # initialize the first node
        li      $t0,1             # store 1
        sw      $t0,0(  )        # at displacement 0

```
**Let  us first look at creating the first node.**
This is done as before dy dynamically allocating memory.

## Question

You've done it once. You can do it again: fill in the blanks.
