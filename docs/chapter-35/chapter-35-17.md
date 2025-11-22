---
sidebar_position: 17
title: "Traversing the List"
---

Traversing the List

## Answer

A null (zero) is placed in the link field of the last node.
(Actually, for SPIM, a zero is already there.
But with a real OS where dynamic memory is both allocated
and deallocated you must be sure to zero the link.)

```mips
        
done:
        # end the list
        sw      $0,4($s1)         # put null in the link field
                                  # of the current node, which
                                  # is the last node.
        

```

## Content

Now
 the linked list has been constructed.
The field `first` points to the first node.
Here is some code from the previous chapter.
**The code traverses a linked list, printing out
the data found at each node.**

Our new linked list has the same form as the previous chapter's linked list.
This code will work fine with it.


```mips
          # assume that the linked list has been built,
          # (as above) and that the field "first" points 
          # to the first node.
          
             ,     # get a pointer to the first node
                                # put it in $s0
          
lp:       beqz   $s0,endlp      # while the pointer is not null
          lw     $a0,0($s0)     #   get the data of this node

                                #    
          li     $v0,1          #   print it
          syscall               #
          la     $a0,sep        #   print separator
          li     $v0,4          #
          syscall               #
          
          lw     $s0,4($s0)     #   get the pointer to the next node
          b      lp
          
endlp:     . . . 

          .data
first:    .word  0
sep:      .asciiz "  "

```

## Question

But, those blanks... Fill them in.
