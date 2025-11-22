---
sidebar_position: 11
title: "Calculation Section"
---

Calculation Section

## Answer

Pseudoinstructions are highlighted below.

## Content

After 
reading the food cost, 
the program can calculate.

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
main:       $v0,4       # print a prompt (code 4 put in $v0)
            $a0,prompt  # address of prompt put in $a0
        syscall

            $v0,5       # input an integer  (code 5 put in $v0)
        syscall             # 32-bit result returned in $v0
          $s0,$v0     # save it in $s0

        # Calculations
        lw      $s1,        # get tip rate

        lw      $s2,        # get tax rate
        
        nop

        addu    $s3,$s1,$s2      # total rate in percent

           $s4,$s0,$s3      # mealcost*(total rate)

           $s4,$s4,100      # mealcost*(total rate)/100  

           $s5,$s0,$s4      # total bill

       . . . . .

        .data
tip:    .word   15          # tip rate in percent
tax:    .word    8          # tax rate in percent

prompt: .asciiz "Enter food cost: "
head1 : .asciiz "   Tax plus tip: "
head2 : .asciiz "     Total cost: "


```

## Question

Fill in the blanks to complete the calculation section.
