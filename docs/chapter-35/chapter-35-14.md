---
sidebar_position: 14
title: "First Loop Iteration"
---

First Loop Iteration

## Answer

```mips
        # create the remaining nodes in a counting loop
        li      $s2, 2          # counter = 2
        li      $s3, 8          # upper limit
        
loop:   bgtu    $s2, $s3,done   # while (counter <= limit )
        
        # create a node 
 
          .  .  .  .  .
          
        addi    $s2, $s2, 1      # counter++
        b       loop
        
done:
        # end the list

```

## Content

```mips
# On entry to the loop:  $s1 points to the first node
#
loop:   bgtu    $s2,$s3,done      # while (counter <= limit )
        
        # create a node 
        li      $v0,9             # allocate memory
        li      $a0,8             # 8 bytes
        syscall                   # $v0 <-- address
        
        # link this node to the previous node
                                  # $s1 = &(previous node)
        sw      $v0,4($s1)        # copy address of the new node
                                  # into the previous node
        
        # make the new node the current node
        move    $s1,$v0
        
        # initialize the new node
        sw      $s2,0($s1)        # save the counter as 
                                  # the current nodes data

        addi    $s2,$s2,1         # counter++
        b       loop
        
done:

```


![First Node of Eight](/Chapter-35/firstOfEight.gif)

![Second Node of Eight](/Chapter-35/secondOfEight.gif)

**Now put a loop body inside the counting loop.**
The loop body  attaches one node to the current end of the list.

**The first iteration of the loop adds the second node.**
The first picture shows this just as the loop body starts,
followed by the picture just as the loop body ends.

Other than the fact that the code is inside a loop, this
is just as before.
Look at the code and the picture to see how they match.

## Question

At the **top** of the loop, which is the current node?

At the **bottom** of the loop, which is the current node?
