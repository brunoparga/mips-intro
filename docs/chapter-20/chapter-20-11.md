---
sidebar_position: 11
title: "Building the Loop"
---

Building the Loop

## Answer

See below.

## Content

Perhaps 
 you added one to the base register, rather than four.**The base register `$9` needs to be increased by the size of a full word, four.**
Now work on getting the loop correct.
The `beq`
instruction
branches out of the loop  if the count 
has reached the end of the array.

**At the bottom of the loop, the
count is incremented and the base register
is moved to the next array entry.**


```mips

## Registers:
##  $8 -- count                     
##  $9 -- pointer to the array entry
## $10 -- current array entry       
## $11 -- sum of all integers       
## $12 -- sum of negative integers
## $13 -- sum of positive integers
## $14 -- pos. or neg. flag
## $15 -- SIZE of the array

main:    ori      $8,$0,0        #  count = 0
         ori      $11,$0,0       #  sum = 0
         ori      $12,$0,0       #  neg = 0
         ori      $13,$0,0       #  pos = 0
         lui      $9,0x1000      #  point at SIZE

         lw       $15,0($9)      #  get SIZE
         addiu    $9,$9,4        #  point to first array entry

# while  count <  SIZE do

loop:    beq      $,$,done 

         sll      $0,$0,0        #  branch delay

         . . . . .               #  middle of loop body
         
         
         addiu    $8,$8,     # count++
         
         addiu    $9,$9,     # point at next entry
         
         j        loop
         sll      $0,$0,0        #  branch delay

done:    sll      $0,$0,0        #  target for branch

        .data
size:   .word  17
array:  .word  12, -1, 8, 0, 6, 85, -74, 23, 99, -30, 30, 95, 4, 7, 10, 28, 14

```

## Question

Fill in the blanks.
