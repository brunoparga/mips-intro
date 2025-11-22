---
sidebar_position: 10
title: "Example Program"
---

Example Program

## Answer

What total amount is given to a waiter if the
bill is $25, the tax rate is 8%, and the tip is 15% ?
(Use integer math).

```
total = 25 + (25*(8+15))/100 = 25 + (25*23)/100 = 25 + 575/100 = 30

```

If the waiter grumbles about getting $30 instead of $31, just explain
that in integer math   575/100 =  5.

## Content

Write
a program that calculates the total cost
given the
amount for the meal, plus 8% tax, plus 15% tip.
The meal amount is input from the user.
The tax and tip rates are fixed.
Here is a run of the program:

```
Enter food cost: 25
   Tax plus tip:  5
     Total cost: 30

```

Here is a start on the program:


```mips
## rest.asm
##
## Total restaurant bill calculator
##
## Register Use:
##
##    $s0 meal cost 
##    $s1 tip rate
##    $s2 tax rate
##    $s3 total rate
##    $s4 tax+tip dollars
##    $s5 total bill


        .globl  main

        # Get meal cost
main:   li      $v0,4       # print a prompt (code 4 put in $v0)
        la      $a0,prompt  # address of prompt put in $a0
        syscall

        li      $v0,5       # input an integer  (code 5 put in $v0)
        syscall             # 32-bit result returned in $v0
        move    $s0,$v0     # save it in $s0
        
        . . . . .

        .data
tip:    .word   15          # tip rate in percent
tax:    .word    8          # tax rate in percent

prompt: .asciiz "Enter food cost: "
head1 : .asciiz "   Tax plus tip: "
head2 : .asciiz "     Total cost: "


```


The only information needed from the user is the cost of the food.
This is prompted for and then read in (as text) and converted
(by part of the exception handler) into a 32-bit two's complement integer.
The SPIM exception handler expects the service code to be
in register `$v0`.
Arguments are passed into and returned from
the services in other registers.
See the previous chapter or
Appendix G.

## Question

![Mental Highlighter](/Chapter-23/highlight.gif)


With your mental highlighter, mark the mnemonics
in the code fragment (above) which are *pseudoinstructions*.
