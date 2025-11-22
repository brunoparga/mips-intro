---
sidebar_position: 15
title: "Implementing Alternation"
---

Implementing Alternation

## Answer

Sure.  It might involve many assembly statements

## Content

![IF example](/Chapter-19/ifExample.gif)

**There
is no explicit support for alternation in
assembly language.**
You must do it in pieces,
as in the following.

Say that registers `$8` and `$9` 
hold the values a and b.

```mips
        ...                #   
if:     beq  $8,$9,yes     # is a==b ?
        nop                #    no
        ...                #    false block
        ...                #    
        ...                #  
        j    endif
        nop
yes:    ...                #   yes
        ...                #   true block
        ...                #
endif:  nop                # always executed

```

**Notice that the order of the true block and the
false block is the opposite of what is usual
in high level languages.**

This is not the only way alternation can be implemented.
You can put the true block first if you want (but then the branch statement
must be changed).
Also, testing the condition might be complicated and
might involve several branches and other instructions
that the flowchart does not show.

## Question

Is an **if-endif** (single alternative) structured?
