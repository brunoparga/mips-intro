---
sidebar_position: 14
title: "Global Symbols"
---

Global Symbols

## Answer

```mips
         .text
         .globl  main

main:
         jal     pread            # read first integer
         nop                      #  
         move    $s0,$v0          # save it in $s0
         jal     pread            # read second integer
         nop                      # 
         move    $s1,$v0          # save it in $s1
         jal     pread            # read third integer
         nop                      #  
         move    $s2,$v0          # save it in $s2
         
         addu    $s0,$s0,$s1      # compute the sum
         addu    $s3,$s0,$s2      # result in $s3
 
         li      $v0,4            # print a heading
         la      $a0,heading         
         syscall

         move    $a0,$s3          # move sum into parameter
         li      $v0,1            # print the sum
         syscall
        
         li      $v0,10           # exit
         syscall
          
         .data
heading:
         .asciiz "The sum is: "   

```

## Content

Recall
that modules (for us, subroutines) should not know about
each other's symbolic addresses.
It would violate the idea of modularity for `main`
to do something to `pread`'s `prompt`,
for example.

But some symbolic addresses need to be used between modules.
For example, `pread` is a symbolic address, and
`main` must know about it and use it in the `jal`
instruction.

**A symbol that a subroutine makes visible to other subroutines is
a **global** symbol.**
Global symbols often label entry points.
Symbols that are not global are called **local** symbols.
**A symbol is made global by
placing it in a list of symbols following the `.globl` directive.**
Some languages use the word **external** for what we are
calling global.

```
         .globl  main

```

In the language C, a symbol that is visible to another module  is called
an **external** symbol.
For example, the names of functions in C are external symbols.

Source programs for PC-SPIM (the older version of SPIM) are contained in a single file,
which includes all subroutines.
However,
in professional software development each subroutine might be
placed in a separate source file.
Each file must say which of its symbolic addesses  are
global and might be referenced by other source files.

With QtSpim (the most recent version of SPIM) you can create separate source files and load them separately.
For this example program:

- Create separate source files `addthree.asm` and `pread.asm` (see next page)
- Start QtSPIM.  Check the settings.
- Click "File"
- Select the "Reinitalize and Load File" menu, then pick `addThree.asm`
- Click "File"
- Select the "Load File" menu, then pick `pread.asm`
- You will now have the two files linked together in memory, with one text section and one data section
- Click "Run" (as always)

**There is only ONE text section and ONE data section when the program is in memory.**
The picture of memory after linking and loading is the same as above.
It is the job of the system software (for qtSPIM and for a real OS) to put the separate
sections from each source file into the run-time memory sections where they belong.
Note in particular that there is only one run-time stack (although this program does not use it.)

## Question

What global symbols are in the subroutine `pread`?
