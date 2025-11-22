---
sidebar_position: 10
title: "Classic Confusion"
---

Classic Confusion

## Answer

```mips
        # copy data from first struct to second     
        lw      $t0,0($s1)         # copy age from first
        sw      $t0,0($s2)         # to second struct
        lw      $t0,  4  ($s1)     # copy pay from first
        sw      $t0,  4  ($s2)     # to second struct
        lw      $t0,  8  ($s1)     # copy class from first
        sw      $t0,  8  ($s2)     # to second struct

```

## Content

```mips
         
        # write out the second struct    
           $a0,agest         # print "age:"
        
            $v0,4            # print string service
        
        syscall
            $a0,0($s2)        # print age
        
            $v0,1             # print int service
        
        syscall

            $v0,10            # return to OS
        
        syscall       

        .data
pay:    .word   24000             # rate of pay, in static memory
agest:  .asciiz "age:   "

```

Working with addresses and the *contents* of addresses
can be confusing.
**The classic prevention to classic confusion is to study a simple program.**  
Such as the one on the previous page.
Copy that program into your editor, paste it to a file and play with it with SPIM.

The program is more interesting if it writes some output.
Insert the above block of code just before the end of the program.
Fix it up so it prints out some values.

## Question

You weren't expecting to get that code for free, were you?
Fill in those blanks.

Hint: pick from `li`, `la`, and `lw`
for each blank.
