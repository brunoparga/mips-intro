---
sidebar_position: 12
title: "Four Levels"
---

Four Levels

## Answer

When the code that the assembler generates is actually executing.

## Content

**This
is a very "Computer Science"-like idea.**
It takes some careful thought to see what is going on.
Here is a table:



| What the  programmer writes | What the extended  assembler translates  it into | What the basic assembler translates the code into | What happens at run time |
| --- | --- | --- | --- |
| `mips
li    $t1,2 
lb    $v0,data($t1) 

` | `mips
ori   $t1,$0,2 
lui   $at,4097
addu  $at,$at,$t1
lb    $v0,0($at)




(4097 is the upper half of the address of data.)` | ```
34090002
3c011001
00290821
80220000

``` | `The first three machine instructions 
execute, placing the address of the 
third byte of the array into register 
$1 . 

 
The fourth machine instruction loads the 
byte at that address into register  
$2 ( $v0).` |

## Question

At what index do "C" and Java arrays begin?
