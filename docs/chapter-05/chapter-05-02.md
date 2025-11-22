---
sidebar_position: 2
title: "Representing Characters"
---

Representing Characters

## Answer

Machine instructions.

(Many answers are correct;
anything symbolic can be represented
with bit patterns: 
graphics, music, floating point numbers,
internet locations, video, ...)

## Content

![dot matrix printed](/Chapter-05/printerA.gif)

A group of 8 bits is a byte. 
**Typically one character
is represented with one byte.**
The agreement by the 
American Standards Committee 
on what
pattern represents what character is called ASCII.
(There are several ways to pronounce "ASCII".
Frequently it is pronounced "ásk-ee").
Most microcomputers and 
many mainframes follow this standard.

When a printer built to print ASCII receives
the ASCII pattern for "A" 
(along with some control signals),
it prints an "A".
Printers built to other specifications
(typically for mainframe computers) might
print some completely different character
if sent the same pattern.

Most modern printers are much more complicated
than the one illustrated on the right.
Typically,
  a modern printer is sent an entire file of information
  at once.
  The file describes the layout and contents of an entire page.
  ASCII characters are just some of the
  information in the file.

Modern computers use a character scheme called UTF-8.
Nearly all web pages encode characters using this scheme.
UTF-8 uses one to four bytes per character.
Characters encoded with one byte correspond directly to ASCII,
so valid ASCII is valid UTF-8.

## Question

(Thought Question: ) Does the DOS command TYPE expect
a file containing ASCII characters?
