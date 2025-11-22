---
sidebar_position: 9
title: "Floating Point Services"
---

Floating Point Services

## Answer

No.  The print integer method works correctly only with 32-bit two's complement
representation.

## Content

| Service | Code in $v0 | Arguments | Returned Value |
| --- | --- | --- | --- |
| print integer | 1 | $a0 == integer |   |
| print float | 2 | $f12 == float |   |
| print double | 3 | `($f12, $f13) == double` |   |
| print string | 4 | $a0 == address of string |   |
| read  integer | 5 |   | $v0 ← integer |
| read  float | 6 |   | $f0 ← float |
| read  double | 7 |   | `($f0, $f1) ← double` |
| read  string | 8 | $a0 == buffer address
$a1 == buffer length |   |
| allocate memory | 9 | $a0 == number of bytes | $v0 ← address |
| exit | 10 |   |   |

**To
print a floating point  value to the SPIM monitor, use 
service 2 (for single precision)** or service 3 (for double precision).

**To read a floating point value from the user,
use service 6 (for single precision)** or service 7 (for double precision).
These notes deal mostly with single precision.

The chart shows the list of SPIM exception handler services.
Each I/O method works with
a specific format for data.
The methods for double use an even-odd pair of registers.

## Question

(Review: ) Into what register do you put the service code before
executing a `syscall`
