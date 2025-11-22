---
sidebar_position: 18
title: "Implementation of  cancel()"
---

Implementation of cancel()

## Answer

When a method is called,
it is given the address of
the object.

## Content

Here
 is `cancel()`.

At the beginning of the code
**access to the object's data is
done by using the address in
`$a0`.**

```mips
          
# cancel() method
# Parameter: $a0 == address of the object
# 
# Registers:
# $t0 == address of the char in the string
# $t1 == char from the string
# $t2 == 'x'

          .text         
cancel:
          addiu    $t0,$a0,8       # the string starts 8 bytes
                                   # from the start of the object
          li       $t2,'x'         # replacement character                             
          lb       $t1,0($t0)      # get first ch of string
loop:     beqz     $t1,done        # while ( ch != '\0' )
          sb       $t2,0($t0)      #   replace ch with 'x'
          addiu    $t0,$t0,1       #
          lb       $t1,0($t0)      #   get next ch
          b        loop            # end while     
done:
          jr       $ra             # return to caller


```

## Question

Do an object's methods know how many other objects 
have been declared in the program?
