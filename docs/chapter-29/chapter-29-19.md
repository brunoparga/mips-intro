---
sidebar_position: 19
title: "Calculate Each Float"
---

Calculate Each Float

## Answer

Yes.

## Content

**Use
the for-loop structure to correctly and safely count.
Calculate a new value of the floating point variable each time.**

```
double x;
int    j;

for ( j = 0; j < 100; j++ )
{
  x = j/10.0;
  
  // do something with x
}

```

Almost always, floating point work should be
done with double precision, as above.

An even more accurate version of the loop is:

```
double x;
int    j;

for ( j = 0; j < 160; j++ )
{
  x = j/16.0;
  
  // do something with x
}

```

This is better because (1/16) is accurately
represented in binary.

## Question

Is floating point representation (as used in computers)
the same as the base two notation discussed in this chapter?
