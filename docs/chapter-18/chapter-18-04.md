---
sidebar_position: 4
title: "Set on Less Than Immediate"
---

Set on Less Than Immediate

## Answer

**A.** After the following code executes, what value is in register `$7` ?

```mips
addiu    $5,$0,-25
addiu    $6,$0,25
slt      $7,$5,$6

```

> Register `$7` will be set to **1**, because
> (when the patterns in registers `$5` and `$6` are regarded as **signed** values)
> `$5` < `$6`.

**B.** After the following code executes, what value is in register `$7` ?

```mips
addiu    $5,$0,-25
addiu    $6,$0,25
sltu     $7,$5,$6

```

> Register `$7` will be set to **0**, because
> (when the patterns in registers `$5` and `$6` are regarded as **unsigned** values)
> `$5` is not less than `$6`.
> If the bit pattern in register `$5` is regarded as unsigned, it looks like a
> large positive value.

## Content

**The
 other two set instructions compare an operand
register with an immediate value in the instruction.**
There is a version for two's complement:

```mips
                   #  $s and imm contain two's comp. integers
                   #  -32768 <= imm <= 32767
                   #
slti  d,s,imm      #  if ( $s < imm )
                   #    d = 1
                   #  else
                   #    d = 0

```

And a version for unsigned integers:

```mips
                   #  $s and imm contain unsigned integers
                   #  0 <= imm <= 32767
                   #
sltiu  d,s,imm     #  if ( $s < imm )
                   #    d = 1
                   #  else
                   #    d = 0
                   #

```

In both, the immediate field of the machine instruction is 16 bits wide.
However, the `sltiu` instruction  can only be used with
small integers 0 &lt;= imm &lt;= 32767  (and another range which is
not important for this course.)

## Question

After the following code executes, what value is in register `$7` ?

```mips
addiu    $6,$0,25
slti     $7,$6,37

```
