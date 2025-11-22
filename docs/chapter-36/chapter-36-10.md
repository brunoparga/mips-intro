---
sidebar_position: 10
title: "Objects as Implemented"
---

Objects as Implemented

## Answer

No.

## Content

![An Object](/Chapter-36/realObjectPicture.gif)

Rather
than make many copies of the same machine code,
the run-time system makes one copy of the code for each type
of object.
Then, each object gets a jump table leading to each subroutine.

**When an object is constructed,
it gets space for its own data 
(which is unique to itself)
and a jump table filled with addresses of its subroutines**
(which are common to all objects of that type.)
The new picture shows an object 
as implemented in this manner.

Of course, there are many details left out of this discussion.

## Question

Does an object **as implemented** consist
of one contiguous block of memory?
