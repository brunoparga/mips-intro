---
sidebar_position: 22
title: "Converting Between Number Formats"
---

Converting Between Number Formats

## Answer

Of course. The various bit manipultion instructions could be used for this.

Early microprocessors had no direct support for floating point and such manipulation was common.

## Content

| Instruction | Operation |
| --- | --- |
| `cvt.s.w fs, fw` | Convert the 32-bit integer in float register `$fw` 
 
                             to an IEEE float in register `$fs` |
| `cvt.w.s fw, fs` | Convert the 32-bit float in register `$fs` 
 to an integer in float register `$fw` |
| the "w" means 32-bit integer full word. |   |
| the "s" means 32-bit single precision. |   |

High level languages allow you to write statments like this:

```
float val = 1.0 + 1;

```

The operands are of mixed types. **The statement compiles into machine operations that convert the integer into floating point
and perform a floating point addition.**
Operations are always between data of the same type, even when that is not what the programmer wrote.

Rather than use bit manipulation instructions to convert an integer to floating point, MIPS (and QtSpim) has machine instructions that do this.

There are other instructions that convert between double precision and other data types, but we will not use them.

- **Both registers in these instructions are floating point registers.**
- Integer data to be converted, or integer data results, must be in one of the floating point registers.
- Use data movement instructions to copy integer data between floating point registers and general purpose registers.
- In both of the above, the bit pattern in the source register is unchanged (unless it is also the destination).
- Floating point data is truncated when converted to an integer.

## Question

Is it possible to lose accuracy when converting a 32-bit integer into a 32-bit IEEE float?
