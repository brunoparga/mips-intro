---
sidebar_position: 14
title: "Branches for Positive and Negative"
---

Branches for Positive and Negative

## Answer

See below

## Content

**Now,
 implement the true block and the false block.**
One adds the current entry to the sum of negatives, the
other adds  it to the sum of positives.

Check that you don't have
the blocks confused.
This is a frequent mistake.


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

# while  count < SIZE do
loop:    beq      $8,$15,done 
         sll      $0,$0,0        #  branch delay


# get entry, add to sum
         lw       $10,0($9)      #  get entry
         sll      $0,$0,0        #  load delay
         addu     $11,$11,$10    #  add to sum

#  test neg. or pos.
         slti     $14,$10,0      #  set flag if entry is neg
         bne      $14,$0,neg    #  branch if negative
         sll      $0,$0,0        #  branch delay
         
              $13,$13,$10   #  positive: add to PLUS
         
         j        
         
         sll      $0,$0,0        #  branch delay
         

neg:          $12,$12,$10   #  negative: add to NEG

ifend:   addiu    $8,$8,1        #  count++
         addiu    $9,$9,4        #  point at next entry
         j        loop
         sll      $0,$0,0        #  branch delay

done:    sll      $0,$0,0        #  target for branch

        .data
size:   .word  17
array:  .word  12, -1, 8, 0, 6, 85, -74, 23, 99, -30, 30, 95, 4, 7, 10, 28, 14

```

## Question

Fill in the blanks.
