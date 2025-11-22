---
sidebar_position: 5
title: "Sample Code"
---

Sample Code

## Answer

```mips
lw $t5,12( $fp )

```

## Content

![stack frame](/Chapter-28/stackFrame00.gif)

Imagine that the following statement is part of the subroutine
whose stack frame is at right:

```
a = b + i + j;

```

**This is how a compiler might implement that statement:**

```mips
lw    $t0,8($fp)     # get b
lw    $t1,4($fp)     # get i
lw    $t2,0($fp)     # get j
addu  $t3,$t0,$t1    # b + i
addu  $t3,$t3,$t2    # b + i + j
sw    $t3,12($fp)    # a =    

```

**The particular registers used to temporarily hold values from the
local variables are arbitrary.**
In another section of code, a different register might be used with variable `b`
than is used here.

## Question

Play compiler: translate the following statement into assembly language:

```
a = a + 1;

```

Use register `$t0` to temporarily hold the value in `a`.

```

```
