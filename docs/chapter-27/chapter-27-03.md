---
sidebar_position: 3
title: "Chain of Subroutine Calls"
---

Chain of Subroutine Calls

## Answer

Yes. The same trick (pushing the return address onto the stack)
can be repeated many times.

## Content

![Chain of subroutine calls](/Chapter-27/pushPopCall.gif)

Now
let us look at an example where
subroutines call other subroutines.
**A subroutine that might call another subroutine
must push the return address it gets onto the
stack.**
When it returns to its caller,
it pops the stack to get the return address it should use.

In the  picture, 
`main` is called by the OS.
As soon as 
`main` gets control
it pushes `$ra` onto the stack (step 1).
`main` computes for a while
and then calls
`subA`.
**`subA` immediately pushes 
the contents of 
`$ra`
onto the stack** (step 2).
The return address that `subA`
will use when it returns control to `main`
is now on the top of the stack.

Next
**`subA` calls 
`subB` which pushes 
the contents of `$ra` onto the stack (step 3).**
The return address that `subB`
should use when it returns to its caller
is now on the top of the stack.

Now
`subB` calls
`subC` (step 4).
**`subC` does not
call any subroutine so
`$ra` does not have to be saved.**
`subC` computes for a while,
and then returns to its caller
with a `jr $ra` instruction (step 5).

Now `subB` has control again.
The return address it needs to use is at
the top of the stack.
`subB` returns to its caller
by popping the stack into `$ra` and
executing   `jr $ra`  (step 6).

Now `subA` has control again.
The return address it needs to use is at
the top of the stack.
`subA` returns to its caller
by popping the stack into `$ra` and
executing  `jr $ra` (step 7).

Finally,
`main`
has control.
After a computing for a while it returns
to the OS by popping the stack into `$ra`
and using the `jr $ra` instruction (step 8).

## Question

After `subA`
returns control
to `main`,
could `main`
call another subroutine?
