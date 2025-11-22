---
sidebar_position: 10
title: "Reversing a String"
---

Reversing a String

## Answer

The text segment.

Traditionally 
a segment containing machine instructions
is called "text".
A **process** is when the processor is actively executing those machine instructions.
(This is analogous to the phrase "text of a play"
and "performance of a play").

## Content

![stack of characters](/Chapter-25/stackHello.gif)

Here is a classic example of how a stack is used.
The user enters a string, which is stored as a
null-terminated string in a character buffer.
The program then reverses the order of the characters in the buffer, 
and then writes out the reversed buffer.
To understand how the program works 
inspect the diagram.

**The string "Hello" is pushed onto the stack, 
from the buffer,
character by character,
starting with the 'H'.
Then the characters are then popped from the stack back into the
original string buffer.
The last character pushed is the first one out.
This reverses the order of the characters.**

We will always push and pop full words (four bytes).
Each character on the stack will be contained in the low order byte
of a fullword.

## Question

(Review: ) What does the following instruction do? `lbu  $t0,string`
