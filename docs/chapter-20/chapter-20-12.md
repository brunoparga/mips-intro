---
sidebar_position: 12
title: "Add an Element to the Sum"
---

Add an Element to the Sum

## Answer

See below.

## Content

**At 
the bottom of the loop,
 count is increased by **one.**
The pointer is increased **by four.****

Now work on the middle of the loop body.
 Get the current array element
and add it to the sum of all integers.


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
         addiu    $9,$9,4        #  point to first entry

# while  count < SIZE do

loop:    beq      $8,$15,done 
         sll      $0,$0,0        #  branch delay


# get entry, add to sum

         lw       $10,($)  #  get entry
         

         sll      $0,$0,0             #  load delay

         addu     $11,$,$  #  add to sum
         

         addiu    $8,$8,1        # count++
         addiu    $9,$9,4        # point at next entry
         j        loop
         sll      $0,$0,0        #  branch delay

done:    sll      $0,$0,0        #  target for branch

        .data
size:   .word  17
array:  .word  12, -1, 8, 0, 6, 85, -74, 23, 99, -30, 30, 95, 4, 7, 10, 28, 14

```

## Question

Fill in the blanks.
