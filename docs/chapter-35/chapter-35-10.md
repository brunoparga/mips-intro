---
sidebar_position: 10
title: "$s1   as the Current node"
---

$s1  as the Current node

## Answer

```mips

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

```

## Content

![Three Node List](/Chapter-35/threeNodeListThird.gif)

After 
 the above code has finished, the first two nodes have been created.
Register `$s1` is now pointing to the second node.
The first node has not been lost, because the field `first`
points to it.

**When a register is used to point at the node were work is being done
(as does `$s1`) it is  called a
**pointer to the current node**.**

Now let us work on the third node.
Again, `$s1` 
is used as the pointer to the current node.


```mips
        # create the third node 
        li      $v0,9             # allocate memory
        li      $a0,8             # 8 bytes
        syscall                   # $v0 <-- address
        
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

```

Linked 
 lists can be aggravating. Look at the line of code
where the current pointer is changed from the second node to the third:

```mips
# make the new node the current node
move    $s1,$v0  # $s1 = &(third node)

```

**This "change in meaning" of `$s1` must be done in the correct sequence.
The previous value of  `$s1` must already be saved in the second node.**

## Question

Register `$s1` no longer points at the second node.
Has the second node been lost?
