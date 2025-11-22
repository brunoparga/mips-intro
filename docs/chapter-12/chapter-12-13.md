---
sidebar_position: 13
title: "MOVE as OR with Zero"
---

MOVE as OR with Zero

## Answer

The bit pattern in `$8` is moved to `$9`
(`$8` is unchanged).

```mips
or  $9,$8,$0        # $9 <—  contents of $8.

```

## Content

**Copying
 the pattern in a source register to 
a destination register is
called a **move** operation,**
even though the source register does not change.
It really should be called "copy" but is not.

```mips
or  d,s,$0        # $d gets copy of bit pattern in $s.

```

## Question

(Review:) How can a particular bit pattern be loaded into a register?
