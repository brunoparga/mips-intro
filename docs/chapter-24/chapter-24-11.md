---
sidebar_position: 11
title: "Indexed Addressing"
---

Indexed Addressing

## Answer

> `sltu   $t4,$v0,45`
> 
> and
> 
> `sltui   $t4,$v0,45`

Yes. The first translates  into the second.

## Content

In
addition to implementing new instructions,
the extended assembler implements a new
addressing mode.**This is **indexed addressing**, 
a mode of addressing useful for arrays.**

Here is an example:


```mips
      li    $t1,2                 # index 2
      lb    $v0,data($t1)         # $v0 = data[$t1]
      . . . 
      
data: .byte  6,34,12,-32, 90      # index zero is first

```


Think of `data` as an array
of five bytes.**Then the `lb` instruction loads the  element
of the array at index 2 (the byte that contains 12)
into `$v0`.**

The
extended assembler does this the same way we have
done in past programs:
basic instructions are used to add the index value in
`$t1` to the address symbolized by `data`.
Here is what the assembler generates for the above code.
Assume that `data` is at address `0x10000000`.
(This might not be true if the exception handler is loaded.)


```mips
      ori   $t1,$0,2           # index 2
      lui   $at,0x1000         # $at register gets address "data"
      addu  $at,$at,$t1        # add index to $at
      lb    $v0,0($at)         # $v0 = data[$t1]
      . . . 
      
data: .byte  6,34,12,-32, 90   

```

The assembler generates code that uses register
`$at` to calculate the address of the correct byte.
Then, using that address, the byte is loaded into `$v0`.

## Question

When does the actual address calculation take place?
