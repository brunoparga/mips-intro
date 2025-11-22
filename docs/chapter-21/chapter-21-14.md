---
sidebar_position: 14
title: "Registers with Addresses"
---

Registers with Addresses

## Answer

Yes: a base register contains an address.
Also a pointer register
(such as used with arrays and strings)
contains an address.

## Content

The
previous chapters have put addresses into base registers.
This was done with code similar to the following:

```mips
main:                        #  Load the address of val2 into the base register
        lui   $10,0x1000     #  top half
        ori   $10,$10,0x0008 #  bottom half
        lw    $11,0($10)     #  Load contents of memory at the address

        . . . 

        .data
val0:   .word   0 
val1:   .word   1 
val2:   .word   2           # base register $10 points at "2"
val3:   .word   3 
val4:   .word   4 
val5:   .word   5 

```

## Question

Is there something awkward about this code?
