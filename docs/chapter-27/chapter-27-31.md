---
sidebar_position: 31
title: "End of the Chapter"
---

End of the Chapter

## Answer

The string buffer `line` is defined in `doLines`.
No copy is made of the characters in the buffer.
However, other subroutines have access to the buffer since its
address is passed as an argument (in  `$a0`) to them.
This technique is very common in "C" although, of course, the
syntax for doing it is different.

## Content

You have reached the end this chapter.
It would be a capital idea to review the following.
Click on a subject that interests you call up the page where it was discussed.

- [return address, on the stack](chapter-27-02)
Pushing and popping the return address.
- [registers, saving on the stack](chapter-27-05)
Pushing and popping registers.
- [Stack-based Linkage Convention](chapter-27-06)
Stack-based Linkage Convention.
- [prolog](chapter-27-07)
The prolog and epilog of a subroutine.
- [activation](chapter-27-08)
Activation of a subroutine.
- [activation chain](chapter-27-09)
Activation chain.
- [Algol](chapter-27-10)
Algol and Pascal

