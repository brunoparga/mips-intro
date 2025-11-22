---
sidebar_position: 16
title: "End of Chapter"
---

End of Chapter

## Answer

```mips
li  $t2,-2
li  $t1,4
ror $t0,$t1,$t2

```

What does `$t0` hold after the sequence has executed?

`$t1` starts out with this bit pattern:

```
0000 0000 0000 0000 0000 0000 0000 0100

```

Because `$t2` holds a negative two,
the bits are rotated two positions left:

```
0000 0000 0000 0000 0000 0000 0001 0000

```

## Content

You    
have reached the end of this chapter.
Unless your head is rotating,
click on a subject to go to where it was discussed.

- [not (pseudoinstruction)](chapter-23-02)
not
pseudoinstruction
- [immediate operand, implicit](chapter-23-03)
Implicit
immediate operands
- [addu (pseudoinstruction)](chapter-23-04)
addu
pseudoinstruction
- [subu (pseudoinstruction)](chapter-23-05)
subu
pseudoinstruction
- [mul (pseudoinstruction)](chapter-23-07)
mul
pseudoinstruction
- [div (pseudoinstruction)](chapter-23-08)
div
pseudoinstruction
- [remu (pseudoinstruction)](chapter-23-09)
remu
pseudoinstruction
- [negu (pseudoinstruction)](chapter-23-05)
negu
pseudoinstruction
- [abs (pseudoinstruction)](chapter-23-09)
abs
pseudoinstruction
- [rotate](chapter-23-14)
Bit rotation.
- [rol (pseudoinstruction)](chapter-23-15)
 Rotate
pseudoinstructions.

