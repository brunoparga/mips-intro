---
sidebar_position: 3
title: "Extended Assembler"
---

Extended Assembler

## Answer

Yes. No matter what language it is written in,
source code is ultimately translated into machine code that executes directly on the processor.

## Content

![Tool Chain](/Chapter-21/extendAss.gif)

The extended assembler allows you to use
mnemonic register names in place of
hardware register numbers.
This helps you keep track of what you are doing
with the registers.
The assembler replaces register mnemonics
with the usual register numbers.
Of course, the assembly instructions are ultimately
translated into machine code.

**When acting as an **extended assembler**,
SPIM implements many extra features that
are not directly provided by MIPS hardware.**
The extended assembler accepts source
code that uses extensions to basic
assembly language.**The extra features in the source code
are replaced with basic assembly
language,
and then translated into machine code.**

The
picture shows how extended assembly code
is translated
into basic assembly code by
the extended assembler.
Then the basic assembly code
is translated into machine code by
the basic assembler.
Although the picture is correct in concept,
in actual practice the middle steps are
combined and the extended assembler translates
extended assembly directly to machine code.

**By
using the extended assembler
the programmer may program in a
more convenient language, but
the underlying hardware remains
unchanged.**

Of course *high-level* languages
go even further**:**
Rather than extending the
assembly language of the machine,
a completely different programming language
is translated into the machine code for the underlying hardware.

At least in theory, the same machine language program could have been created from 
a C program, an extended assembly program, or a basic assembly program.
(Actually, .exe files typically contain extra information that reveals their origin.)

## Question

The programs in the previous chapters used registers `$8` through `$15`.
What are the mnemonic names for these registers?
See the 
previous page.
