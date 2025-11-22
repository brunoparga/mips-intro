---
sidebar_position: 13
title: "Address and Contents of an Address"
---

Address and Contents of an Address

## Answer

```
        .data
val0:   .word   0 
val1:   .word   1 
val2:   .word   2  
val3:   .word   3 
val4:   .word   4 
val5:   .word   5 

```


> ![Section of Memory](/Chapter-21/memPicture.gif)

What data is in the word starting
at address 0x1000000C? `0x00000003`

What is the address of the word containing 0x00000002? 
`0x10000008`

## Content

The
contents of a word of memory may be any 32-bit pattern.
The address of a word of memory is also a 32-bit pattern.
Both types of data fit into a 32-bit register.

**Sometimes you want 
the **contents** of word of memory
to be loaded
into a register.**

For example, you may wish to load the
value  0x00000002.
This is done with the 
`lw`
instruction.
Look at the picture.
The value you wish to load is
located in memory at address 0x10000008.

```mips
lw    d,exp    #  Load register $d with the value at 
               #  address "exp".  
               #  "exp" is often a symbolic address.
               #  (pseudoinstruction) 

```

**Sometimes you want
the **address** of
a word in memory
to be loaded
into a register.**

For example, you may wish to load the
address of the word in memory that holds the  0x00000002,
This is done with the 
`la`
instruction.

```mips
la   d,exp     #  load register $d with the address
               #  described by the expression "exp".
               #  "exp" is often a symbolic address.
               #  (pseudoinstruction) 

```

Usually the programmer does not know the exact addresses the linker and loader will use for things,
so symbolic addresses are used with the `lw` and `la` instructions.
If symbolic address `val2` corresponded to the word that contains  0x00000002 in the above picture,
then

```mips
lw   $s0,val2

```

would load `$s0` with 0x00000002, and

```mips
la   $s1,val2

```

would load `$s1` with 0x10000008.

## Question

Have our previous programs put addresses in registers?
