---
sidebar_position: 11
title: "Implementing Rule One"
---

Implementing Rule One

## Answer

You must write statements which you intend  to 
have executed in sequence. 
Then you must be careful not to jump into the middle of them.

## Content

Statements
automatically execute in sequence.**There is no  support in assembly languagefor enforcing the
single entry/single exit idea.**
You must  carefully follow the rule as you program.

You might think that the rule is followed
if you only jump to labeled statements.
But a statement in the middle of a block
might have a label, as in the following:


```mips
start:   ori   $8,$0,4      # $8 = 4
         ori   $9,$0,12     # $9 = 12
midblk:  addu  $10,$8,$9    # $10 = 12+4 = 16
         sll   $10,$10,2    # $10 = 16*4 = 64

         ....

         ori   $8,$0,99     # $8 = 99
         ori   $9,$0,43     # $9 = 43
         j     midblk       # jump to the second statement after start

```

## Question

Is there a syntax for defining code blocks in high-level
languages like Pascal, C, or Java?
