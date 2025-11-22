---
sidebar_position: 5
title: "Control Characters"
---

Control Characters

## Answer

Yes. It is common for files to use
different schemes for different types of data.

## Content

**Some
ASCII patterns do not correspond to a printable character.**
For example, the pattern 0x00 `(ie. 0000 0000)`
is the NUL character.
NUL is often used as a marker in collections of data.

The pattern 0x0A is the linefeed character (LF),
sent to a printer to indicate that it should
advance one line.
**The patterns 0x00 through 0x1F are called **control characters****
and are used to control input and output devices.

The exact use of a control character depends on the 
particular output device.
Many control characters were originally used
to control  the mechanical functions
of a Teletype machine.

## Question

Could a computer terminal
be a mechanical device???
