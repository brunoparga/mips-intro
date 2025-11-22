---
sidebar_position: 10
title: "Loading the Array Size"
---

Loading the Array Size

## Answer

See below

## Content

Now, 
you need to
get the size of the array.**The size is the first word of the data section.**
Recall that the data section starts at the address 0x10000000.
Load the top half of that address into the base register.
Then, load the size into register `$15`.

After that, point the base register 
at the first word of the array.


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

## Initialize
main:    ori      $8,$0,0        #  count = 0
         ori      $11,$0,0       #  sum = 0
         ori      $12,$0,0       #  neg = 0
         ori      $13,$0,0       #  pos = 0

              $9,0x1000     #  point at SIZE
         
              $15,0($9)     #  get SIZE
         
         addiu    $9,$9,    #  point to first entry
         

# while  count < SIZE do
loop: 
         . . . .
		 
         j        loop
         sll      $0,$0,0        #  branch delay

        .data
size:   .word  17
array:  .word  12, -1, 8, 0, 6, 85, -74, 23, 99, -30, 30, 95, 4, 7, 10, 28, 14

```

## Question

Fill in the blanks.
