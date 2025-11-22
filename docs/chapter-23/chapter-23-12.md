---
sidebar_position: 12
title: "Writing out the Results"
---

Writing out the Results

## Answer

```mips
        # Calculations
        lw      $s1,tip          # get tip rate
        lw      $s2,tax          # get tax rate
        nop
        addu    $s3,$s1,$s2      # total rate
        mul     $s4,$s0,$s3      # mealcost*(total rate)
        div     $s4,$s4,100      # mealcost*(total rate)/100 
        addu    $s5,$s0,$s4      # total bill

```

## Content

The  
final section of the program writes the results to the monitor.

```mips
## Register Use:
##
##    $s0 meal cost 
##    $s1 tip rate
##    $s2 tax rate
##    $s3 total rate
##    $s4 tax+tip dollars
##    $s5 total bill

        # Output

            $v0,4            # print string

            $a0,head1        # "tax plus tip"
        syscall

            $a0,$s4          # get tax+tip
        li      $v0,1                # print integer
        syscall                      # 

            $v0,4            # print string

            $a0,head2        # "total cost"
        syscall

            $a0,$s5          # get total

            $v0,1            # print integer
        syscall                      # 

        li      $v0,10               # exit
        syscall

        .data
tip:    .word   15                   # tip rate in percent
tax:    .word    8                   # tax rate in percent

prompt: .asciiz "Enter food cost: "
head1 : .asciiz "   Tax plus tip: "
head2 : .asciiz "\n     Total cost: "

```

## Question

Fill in the blanks to complete the program
