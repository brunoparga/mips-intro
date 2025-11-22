---
sidebar_position: 4
title: "Program continued"
---

Program continued

## Answer

You would like:

```
length( string1 ) + length( string2 )   =  length( concat( string1, string2) )

```

If the null at the end of each string counted as part of its length, then 
  this would be false, because the combined string has only one null (at the 
  end) but there are two nulls in the two original strings.

## Content

There
 are several ways to do what the second box of the chart
calls for: *"point at the first character".*
In a few chapters,
 doing this will be much easier.**But, for now, remember that the
data section starts at the address `0x10000000`.**
The top halfword of this is `0x1000`.
This is loaded into the top halfword of the
base register with 
`lui`


```mips
 

## strlen.asm 
## 
## Count the characters in a string 
## 
## Registers: 
##  $8 -- count 
##  $9 -- pointer to the char 
## $10 -- the char (in low order byte) 

.text 
.globl main 

# Initialize 

main: 
      ori $8,$0,0           # count = 0 
      lui $9,0x1000         # point at first char 
  
# while not ch==null do 
  
loop: 
       lbu $10,($9)    # get the char 
       
       sll   $0,$0,0        # load delay slot

        $10,$0,done    # exit loop if char == null 
       
       sll   $0,$0,0        # branch delay slot
   
       . . .
   
       j loop               # finish 
       sll   $0,$0,0        # branch delay slot

done:  sll $0,$0,0          # target for branch 

.data 
string: .asciiz "Time is the ghost of space." 

 

```

## Question

A few more statements have been added to get and test the
current character.
Fill in the blanks.
