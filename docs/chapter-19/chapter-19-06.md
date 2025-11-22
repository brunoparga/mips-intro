---
sidebar_position: 6
title: "CISC"
---

CISC

## Answer

- Faster machine cycle (500 MHz to 1000 MHz). 
- **Yes. More instructions done per second.**
- More bits on the system bus (32 bits to 64 bits). 
- **Yes. More data moved per transfer operation.**
- More main memory (128 Meg to 512 Meg). 
- **Yes.  Data can be kept in fast main memory rather than slow disk memory.**
- Larger hard disk (20 Gig to 40 Gig). 
- **No,** assuming that all data and software fit on the smaller size.
- Faster data transfer rate of hard disk (40 MBps to 80 MBps). 
- **Yes. Processor spends less time waiting for data.**
- Bigger monitor (17" to 21"). 
- **No.**
- Many,  complex machine instructions. 
- **Maybe, maybe not.**

## Content

**A  **CISC** (Complex Instruction Set Computer)
processor has many instructions,**
some of them complex instructions
that do a lot per machine cycle.
The Intel processors are CISC.

**A **RISC** (Reduced Instruction Set Computer)
processor has few instructions,**
most of them simple.
It may take several instructions
to do the equivalent of a CISC instruction.
The MIPS processors are RISC.

If  everything else were the same,
CISC would have greater throughput.
However, a larger
silicon chip is needed to implement 
the many complex instructions. 
This means that data must move through greater distances,
and that takes more time.
So the machine cycle must be slower.
Also, the instructions themselves take more time
to execute (usually more than several RISC instructions).
Fine tuning
the chip for speed is difficult when there
are many instruction types.
The simple instructions are compromised
by the complex ones.
But the simple instructions are the
most frequently executed!

Worse, it is hard to write a compiler that makes use
of complex instructions.
Compilers frequently compile programs into machine language
programs that use only simple instructions.
The MMX (multi-media extension) instructions 
added to Intel chips (in 1997)
are not output by any compiler.
(In 2015 compilers still don't use these instructions.)

These instructions are used in specialized functions written in assembly language.
The functions are assembled into machine code and put into libraries
which applications programs can call.
Systems software can put everything together into an executable.
(See chapter one page 13 if this is unclear.)

## Question

If you are writing a computer game and wish to
use MMX instructions, what must you do?
