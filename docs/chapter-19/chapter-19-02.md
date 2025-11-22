---
sidebar_position: 2
title: "Computing Power"
---

Computing Power

## Answer

When the one processor can compute
something that the other one can't.

But that answer is somewhat vague.

## Content

So  
far, these chapters have covered several kinds of instructions:

- Bit-wise logic instructions
- Integer arithmetic instructions
- Memory access instructions
- Instructions that conditionally alter program flow

You might wonder how many instructions one processor
must have in order to be as powerful as another.
The answer is: the above set of instructions is
more than enough.
But the idea of computer "power" is somewhat vague.
Sometimes people use it to mean "speed" 
and sometimes to mean
"what a processor can compute."
Usually it means a fuzzy
combination of both.
Let us use the following definition:

> **Computing Power:  
> Two processors 
> have the same computing power
> if they can run the
> same programs 
> (after translation into 
> each processor's machine language)
> and produce the same results.**

For 
 example, say that two processors have the same power.
Then if one processor can run
a particular program,
then the other one must be able to run it, 
and both processors produce the same result.
This must be true for all programs 
(after appropriate compilation into the machine language for each processor).

Sometimes the result a program produces
depends on the compiler.
For example, different compilers for C use
different numbers of bits for
the data type `int`.
But that is an effect of the compiler, 
not of the processor.
All that matters for processor "power" is that
it is possible to translate
identical programs into machine
language appropriate for each processor and that
these machine language programs produce the same result
on each processor.

**Processor 
speed is left 
out of the definition.**
It is helpful to regard computing power and
processor speed as separate aspects.
Memory and peripherals 
(such as graphics boards)
are also left out.

## Question

(Thought Question:)
Can a program that uses 64-bit integers 
run on a processor that
has 32-bit words?
