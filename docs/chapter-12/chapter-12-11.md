---
sidebar_position: 11
title: "Summary"
---

Summary

## Answer

```
FEED      1111 1110 1110 1101
BECA      1011 1110 1100 1010
————      ———— ———— ———— ————
0110      0000 0001 0001 0000

```

## Content

| AND | OR | XOR | NOR |
| --- | --- | --- | --- |
| `and  d,s,t` | `or  d,s,t` | `xor  d,s,t` | `nor  d,s,t` |
| `$d <— $s and $t` | `$d <—  $s or $t` | `$d <— $s xor $t` | `$d <—  $s nor $t` |

**The
 table shows the register with register
bitwise logic operations.**
Register 
`d`
is the destination (where the result goes);
the other two registers 
`s`
and
`t`
contain the operands.
Here is a summary of the operations:


| operand | 0 | 0 | 1 | 1 |
| --- | --- | --- | --- | --- |
| operand | 0 | 1 | 0 | 1 |
| AND | 0 | 0 | 0 | 1 |
| OR | 0 | 1 | 1 | 1 |
| XOR | 0 | 1 | 1 | 0 |
| NOR | 1 | 0 | 0 | 0 |

## Question

Fill in the following:


| 0 NOR 0 = |   | NOT 0 = |   |
| --- | --- | --- | --- |
| 1 NOR 0 = |   | NOT 1 = |   |

Now answer the question: NOT X  =  X  0
