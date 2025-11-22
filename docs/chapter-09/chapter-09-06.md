---
sidebar_position: 6
title: "Setting up SPIM"
---

Setting up SPIM

## Answer

A *machine instruction* is a pattern of bits that
asks for one machine operation to be executed.

Each 
MIPS machine instruction  is 32 bits (four bytes) long.
The three lines after *main:* call for three machine
instructions.
The remaining lines consist of information for the assembler
and comments (for the human).

## Content

![Spim Options](/Chapter-09/settings.gif)

**For this first program some SPIM options must be set.**
In the menu bar, click on Simulator then Settings
to get the settings dialog.
Then click on the MIPS tab.

Select the following options:


| ON | Bare machine |
| --- | --- |
| ON | Enable Delayed Branches |
| OFF | Enable Mapped I/O |
| OFF | Accept pseudo instructions |
| ON | Enable Delayed Loads |
| OFF | Load exception handler |

These settings simulate a bare machine with no operatings system or other conveniences.
Later chapters include some conveniences.

Sometimes you need to close down qtSpim and then start it up again
for the settings to take effect.

## Question

(Thought Question) Do most actual computers start up
as a bare machine?
