---
sidebar_position: 8
title: "Several Translations"
---

Several Translations

## Answer

Yes.

## Content

**All 
programming 
languages other than machine language
must be translated
into machine language
before they can be executed.**
A high level language is independent of architecture.
It requires a specific translator 
(compiler) for each architecture.

The more modern the language, 
the more distant 
the source code is
from the machine language.
FORTRAN is 50 years old and
is closer to machine language than modern languages.
Here is a statement in FORTRAN:


```
result = 6*alpha+beta

```

Here is a translation of that statement into MIPS
assembly language:

```mips
lw  $t0,alpha           # copy alpha to register $t0
lw  $t1,beta            # copy beta  to register $t1
mul $t2,$t0,6           # multiply $t0 times 6; result in $t2
add $t2,$t2,$t1         # add $t2 and $t1; result in $t2
sw  $t2,result          # copy answer to result

```

Here is a translation of that statement into 
Digital Equipment Corporation VAX
assembly language:

```
MULL3   #6,ALPHA,R5
ADDL3   R5,BETA,RESULT

```

## Question

Is the architecture of the VAX
similar to that of MIPS?
