---
sidebar_position: 7
title: "Loading the Source File"
---

Loading the Source File

## Answer

(Thought Question) Do most actual computers start up
as a *Bare machine*?

No.

## Content

![File Open Menu](/Chapter-09/openFile.gif)

![File Open Selection](/Chapter-09/fileMenu.gif)


Modern
computers boot up 
to a user-friendly state.
Usually there is  
**firmware**
(permanent machine code in EEPROM)
in a special section of the address space.
This starts running on power-up
and loads an operating system.
SPIM can simulate some basic firmware, 
but we have turned off that option.

**Load the program into the SPIM simulator by clicking 
File then Reinitialize and Load File.
Click on the name (`addup.asm`) of your source file.**
You may have to navigate through your directories
using the file dialog box.

If there are mistakes in `addup.asm`, SPIM's message display
panel  shows the error messages.
Use your editor to correct the mistakes,
save the file
then re-open the file in SPIM.

## Question

Can the text editor and SPIM both be open
at the same time?
