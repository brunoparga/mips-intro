---
sidebar_position: 5
title: "Natural If-Else Structure"
---

Natural If-Else Structure

## Answer

No assumptions are necessary. It tests if two bit patterns are identical.

## Content

```mips
#
# If val is even, add it to $t2
# else, add the value to $t1
#
        lw    $t0,val          # $t0 has the value
        andi  $t8,$t0,1        # one's place in $t8 is zero or one
        
          $t8,odd      # if even
                               # {
        addu  $t2,$t2,$t0      #     add to $t2
        b     endif            # }
        
odd:                           # else
        addu  $t1,$t1,$t0      #     add to $t1
        
endif:  nop

.....

       .data
val:   .word  37

```


**When a branch statement is used to test a condition,
the statements that follow it are skipped when 
the condition is `True`.**

This is the opposite of high-level languages.
With them, an if-statement is immediately followed by the
statements that correspond to "true".
Watch out for this problem when you are coding.
Careful documentation helps.

**An unconditional branch instruction is used at the bottom
of the true branch to skip around the false branch.**

(In this chapter, the SPIM simulator has been set so that
delayed branches are OFF
and delayed loading is OFF, so no-ops are not included in
this program fragment.)

## Question

Fill in the blank by choosing the correct branch instruction
(refer to the previous table).
