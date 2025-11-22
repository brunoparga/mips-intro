---
sidebar_position: 17
title: "Evaluation"
---

Evaluation

## Answer

Floating point constants.

Even if you think of them as integers, they need to be
data type float if they are to work with floating point arithmetic.

## Content

```mips
        # Register Use Chart
        # $f0 -- x
        # $f2 -- sum of terms
        . . . . . 
        
        # evaluate the quadratic
        l.s     $f2,a               # sum = a
        mul.s   $f2,$f2,$f0         # sum = ax
        
        l.s     $f4,bb              # get b
        add.s   $f2,$f2,$f4         # sum = ax + b
        mul.s   $f2,$f2,$f0         # sum = (ax+b)x = ax^2 + bx
        
        l.s     $f4,c               # get c
        add.s   $f2,$f2,$f4         # sum = ax^2 + bx + c
        . . . . . .

        .data
a:      .float  1.0
bb:     .float  1.0
c:      .float  1.0

```

Here
is the part of the code that evaluates
the polynomial.
`x` is in  `$f0`.

The polynomial is evaluated from left to right.
First `ax + b` is calculated.
Then that is multiplied by  `x`
giving `axx + bx`.
Then
`c` is added in, giving
`axx + bx + c`.

The value  `x2` is not
explicitly calculated.**This way of calculating a polynomial is called
**Horner's Method**.**
It is useful to have in your bag of tricks.

SPIM objects to the symbolic address "b" 
(because there is a mnemonic "b", for branch)
so use "bb" instead.

## Question

Why (do you suppose) are the constants
`a`,  `b`, and  `c` 
set to  `1.0`?
