---
sidebar_position: 7
title: "\"Assignment Statement\""
---

"Assignment Statement"

## Answer

```mips
move $s1,$t3

```

## Content

It
is easy to get confused about the order of operands.
The `move` instruction is intended to be
read like an assignment statement of a higher level language:

```
j = val;

```

The contents of `val` is copied into the variable `j`.

```mips
move $s1,$t3

```

The contents of `$t3` is copied into the register `$s1`.

## Question

(Review:) What is in register `$t5` after the following
instruction: `ori $t5,$0,74`
