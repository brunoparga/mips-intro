---
sidebar_position: 8
title: "Assembling the Program"
---

Assembling the Program

## Answer

Sure. You can correct errors with the text editor, save
the file to the disk, and then re-load it into SPIM.

## Content

![Spim Options](/Chapter-09/loadedSource.gif)


**Loading
 the source file into SPIM does two things:
(1) The file is assembled into machine instructions,
and (2) the instructions are loaded into SPIM's memory.**
The *text display* shows this.

The text display shows both the source file and the
machine instructions it assembled into.
The leftmost column are addresses in simulated memory.

The 32-bit machine instructions are in
the column just right of the address column.

To the right of the machine instructions
are lines of assembly code that
formed by translating the machine code
back into assembly.
**This is called **disassembly**.**
It is there for debugging purposes.
(This is like translating an English sentence to French,
then translating the French back into English.
The second translation should match the original English.)

Of course,
in an actual computer
would have only
main storage and machine code 
stored at each address.

## Question

Inspect the text display (your own or the above picture).

- What machine instruction (bit pattern) did your
    first instruction (`ori  $8,$0,0x2`) assemble into?
- At what address in memory was it loaded?
