---
sidebar_position: 13
title: "Counting Loop"
---

Counting Loop

## Answer

No.  With dynamically allocated memory (on a real system, not SPIM)
the allocated memory will be selected from what is available, not
necessarily in sequence.

## Content

Let
 us create a list of eight nodes.
**Create the first node (the head) outside
of the loop so that its address can easily be
copied to the field `first`.**

After doing that, 
**the succeeding nodes are created in the loop body,**
one per iteration.
Here is the first part of the code:


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



        .data
first:  .word   0

```


After
doing this, the picture is:


![First of Eight](/Chapter-35/firstOfEight.gif)


**Next, concentrate on just the counting loop.**
All it has to do is count seven times,
`2, 3, 4, ..., 7, 8` because the
first node has already been created.
Here is the code that does this:


```mips
        # create the remaining nodes in a counting loop
        
        li      $s2,          # counter = ???
        
        li      $s3,          # upper limit
        
loop:   bgtu     , ,done  # while (counter <= limit )
        
        # create a node 
 
          .  .  .  .  .
          
        addi    $s2,$s2,1         # counter++
        b       loop
        
done:
        # end the list

```

## Question

More Blanks!
