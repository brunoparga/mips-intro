---
sidebar_position: 16
title: "In General..."
---

In General...

## Answer

See below.

## Content

![General Case](/Chapter-35/generalCase.gif)


The
 general case is illustrated here.
**The register `$s1` points to the
current node, which is already linked to
its predecessor.**
Another iteration of the loop will attach
another node at the end.


```mips
loop:   bgtu    $s2,$s3,done      # while (counter <= limit )
        
        # create a node 
        li      $v0,9             # allocate memory
        li      $a0,8             # 8 bytes
        syscall                   # $v0 <-- address
        
        # link this node to the previous
                                  # $s1 = &(previous node)
        sw      $v0,4($s1)        # copy address of the new node
                                  # into the previous node
        
        # make the new node the current node
        move    $s1,$v0           # $s1 = &(new node)
        
        # initialize the node
        sw      $s2,0($s1)        # save the counter as 
                                  # the current node's data

        addi    $s2,$s2,1         # counter++
        b       loop
        
done:

```

## Question

When the loop ends, control is passed to `done`.
What must now be done?
