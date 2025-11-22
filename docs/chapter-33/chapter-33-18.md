---
sidebar_position: 18
title: "Copying addresses"
---

Copying addresses

## Answer

```
empB = empA;

```

The address contained in `empA` is copied to `empB`.

## Content

The statement

```
empB = empA;

```

is the equivalent of

```mips
move   $s2,$s1

```

**This copies the address in one pointer variable to another.**
The structs in memory are unaffected.

## Question

Do C programs call subroutines?
