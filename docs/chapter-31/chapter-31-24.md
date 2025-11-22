---
sidebar_position: 24
title: "Slightly More Realistic Program"
---

Slightly More Realistic Program

## Answer

Yes.  The other conversion instruction (`cvt.w.s`) would be needed.

## Content

```mips
##  caffeine.asm
##
##  Input the weight of an individual in pounds.
##  Output the number of cans of Energy Drink that
##  would kill them 50% of the time.

        .text
        .globl main
        
main:   
        li      $v0,4               # prompt for individual's
        la      $a0,prompt          # weight
        syscall
        
        li      $v0,6               # read weight (in lbs)
        syscall                     # $f0 = weight (float)
        
                                    # convert weight to kg
        l.s     $f2,kgperlb         # kg per lb
        mul.s   $f4,$f2,$f0         # $f4 == kg
        
                                    # calc LD50 for this weight
        l.s     $f2,ld50            # LD50 per kg
        mul.s   $f6,$f4,$f2         # $f6 = LD50 in mg for this weight
        
                                    # calc LD50 in cans
        l.s     $f8,mgCan           # get mg per can
        div.s   $f6,$f6,$f8         # $f6 = (LD50 for this weight)/(mg per can)
        
        la      $a0,cans            # print output title
        li      $v0,4
        syscall
        
        cvt.w.s $f8,$f6             # convert cans to integer  (truncate result)   
        mfc1    $a0,$f8             # move integer into $a0 
        li      $v0,1               # print integer
        syscall
        
        la      $a0,newln           # end the line
        li      $v0,4
        syscall
        
        li      $v0,10              # halt
        syscall

         .data
kgperlb: .float  0.453592           # kg per lb
ld50:    .float  200.0              # ld50 in mg per kg of human
mgCan:   .float  160.0              # mg caffeine per can

prompt: .asciiz "Your weight in pounds: "
cans:   .asciiz "LD50 Cans: "
newln:  .asciiz "\n"

```

**This program  inputs the weight of an individual in pounds and outputs the number of 
cans of Energy Drink that would kill them 50% of the time.**

The LD50 is the amount of a substance that will kill an individual 50% of the time.
The LD50 of caffeine is 200 mg (200 milligrams) per kilogram of weight.
A can of Energy Drink has 160 mg of caffeine per can.

The `cvt.w.s` instruction truncates the floating point number of cans to an integer.
This makes the output nicer.  Except for that, the entire program could have been written with floating point.
It could also have been written entirely with integers by using a scale factor.

## Question

What is your LD50 for assembly language?
