---
sidebar_position: 3
title: "Storing a Single Byte"
---

Storing a Single Byte

## Answer

`$10`  = `0xFFFFFFA4`

Bit 7 of 0xA4 is 1,  so
`lb` extends
that bit to all high order three bytes of `$10`.

`$12`  = `0x000000A4`

`lbu` zero-extends the byte from memory.

## Content

**There is an instruction for storing a byte:**

```mips
sb t,off(b)   

# The byte at off+b ←  low-order
# byte from register $t.
# b is a base register. 
# off is 16-bit two's complement.

```

**There is no need for two store byte instructions.**
Whatever is in the low-order byte of the register
is copied to memory.
The rest of the register is ignored.
Of course, the register does not change.

Loading 
and storing bytes is used
for processing text and for
systems programs
(such as assemblers, compilers, and operating systems).
Graphics programs, also, make frequent use
of these operations.
Both operations could be done using
`lw` and
`sw`
along
with bit manipulation instructions,
but it is convenient to have byte-length load and store.

## Question

- Memory at 0x10000519 contains the byte 0x44
- Register `$8` contains  0x10000400
- Register `$10` contains 0xFA034183



Write the instruction that replaces the "0x44" in memory
with "0x83".



```
sb  ,  (  )

```
