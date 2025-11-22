---
sidebar_position: 7
title: "Condition Bit Holds its Value"
---

Condition Bit Holds its Value

## Answer

Yes.

## Content

**The condition bit holds the value put into it by a comparison instruction until
another comparison instruction is executed.**
This code 
puts the minimum of `$f0` or `$f2`
into   `$f12` .
If they are equal, then `$f12` gets the value they both contain.

The  code is awkward;
it would be better to reverse the third and fourth
statements.
However, sometimes it is very useful to hold the
condition bit's value for several instructions
before using it.


```mips
                  
        # $f12 <-- min of A and B
        #
        l.s     $f0,A            # get the values 
        l.s     $f2,B            # into registers
        
        c.lt.s  $f0,$f2          # is A < B?
        mov.s   $f12,$f0         # move A to $f12
                                 # (condition bit continues to hold
                                 # its value)
        bc1t    common           # otherwise
        mov.s   $f12,$f2         # move B to $f12

common: .....

        .data
A:      .float  12.45
B:      .float  53.05


```

## Question

(Review: ) should `c.eq.s` be used to
implement a while loop?
