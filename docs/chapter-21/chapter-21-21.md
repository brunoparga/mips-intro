---
sidebar_position: 21
title: "Store Word (pseudoinstruction)"
---

Store Word (pseudoinstruction)

## Answer

Yes. The second instruction in its translation is a
ordinary load instruction which requires a 
delay of one instruction before the loaded value can be used.

## Content

**The
`nop`
pseudoinstruction
translates into  
`sll $0,$0,0`.**
This is the "no operation" instruction we have been
using all along.

```
nop     #  no operation.
        #  do nothing for one machine cycle.
        #  (pseudoinstruction) 

```

**The
`sw`
mnemonic is used both by
the basic assembler and the extended assembler.**
As a pseudoinstruction it can store a register
to memory in one instruction.

```mips
sw    d,exp   #  Store register $d into the word at address exp. 
              #  exp can be any of several expression types 
              #  that evaluate to an address
              #  (pseudoinstruction) 

```

Of course, this is implemented as several
basic instructions.

## Question

Assume that the SPIM settings are for basic machine.
Say that the data section looks like this:

```

        .data
val0:   .word   0 
val1:   .word   1 
val2:   .word   2 
val3:   .word   3 
val4:   .word   4 
val5:   .word   5 

```

Play Pseudocomputer: translate the 
`sw`
instruction into non-extended instructions.
Say that it happens that the .data section
is loaded at 0x10000000.

```mips
sw   $t0,val3   

translated as:   

lui  ,0x1000

sw   ,12(  )

```
