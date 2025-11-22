---
sidebar_position: 19
title: "Subroutine Calls"
---

Subroutine Calls

## Answer

Yes.

## Content

Here is how the assembly language calls the subroutine with
the address of a struct as a parameter:

```mips
	# write out the first struct    
	move    $a0,$s1
	jal     PStruct
	   
	# write out the second struct    
	move    $a0,$s2
	jal     PStruct

```

And here is how C does this:

```
	PStruct( empA );  /* Write out the first struct */
	PStruct( empB );  /* Write out the second struct */

```

**Notice how the C subroutine (and the assembly subroutine) is called with a value:
the address of a struct.**

In C,
a subroutine (function) can have a parameter that is a complete copy of a struct,
not just a pointer to it.  
The assembly language equivalent would involve more work than a subroutine that expects a pointer.

## Question

If a subroutine has the address of a block of memory, can it then
access that memory, and perhaps alter it?
