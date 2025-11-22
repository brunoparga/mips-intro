---
sidebar_position: 6
title: "Multiplication"
---

Multiplication

## Answer

```mips
negu $v2,$s3

```

Translates into:

```mips
sub  $v2,$0,$s3

```

## Content

The     
 `mult`
and the `multu`
instructions (which you have seen before)
put the result into MIPS registers **hi** and **lo**.
The results may be moved out of these registers
using `mfhi` and
`mflo`.

The three operand pseudoinstruction
**`mul d,s,t`**
uses those basic instructions.
It is used when the product of registers 
`$s`  and `$t` is
**a value that fits into the 32 bits of **lo**.**

```
mul d,s,t  # d = s*t         

```

## Question

Finish the translation:



```mips
mul $v2,$s3,$t0

```



Translates into:


```
mult   , 

mflo    

```


(Use mnemonic register names.)
