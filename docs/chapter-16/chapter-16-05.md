---
sidebar_position: 5
title: "Tape Writer"
---

Tape Writer

## Answer

```mips
lui  $8,0x1000      # $8 is base register
sb   $9,3($8)       # least significant byte
srl  $9,$9,8        # move next byte to low order
sb   $9,2($8)       # bits 8-15 
srl  $9,$9,8        # move next byte to low order
sb   $9,1($8)       # bits 16-23 
srl  $9,$9,8        # move next byte to low order
sb   $9,0($8)       # most significant byte

```

## Content

```mips
## endian.asm
##
## copy $9 to memory in big-endian order
##
## Register Use:
## $8  --- first byte of the tape buffer
## $9  --- 4-byte integer

      .text
      .globl  main

main: 
      lui  $9,0x1234      # put data in $9
      ori  $9,0x5678      #
      lui  $8,0x1000      # $8 is base register
      sb   $9,3($8)       # least significant byte
      srl  $9,$9,8        # move next byte to low order
      sb   $9,2($8)       # bits 8-15 
      srl  $9,$9,8        # move next byte to low order
      sb   $9,1($8)       # bits 16-23 
      srl  $9,$9,8        # move next byte to low order
      sb   $9,0($8)       # most significant byte

      .data
tape:                     # base register points here
      .space 1024         # tape buffer (1K bytes)
         

```

**The least significant byte of the register
is written to memory first** 
because its location in the register is where
`sb`
instruction needs it.
The data in the buffer should be in big-endian order, so this (little end) goes into offset 3 from the base address.

Now the remaining bytes of `$9` 
are shifted into the right-most byte one by
one and written to memory.

**The `.space`
directive reserves bytes in memory, in this case 102410 bytes.**
Pretend this is the buffer from which a tape record will be written.
The example program deals with just the first four bytes,
but in a real program all 1K bytes of the buffer would be collected
before the buffer was written to tape.

## Question

What is the *symbolic address* of the first byte
of the `.data` section?
What main storage address will it have at run time?
