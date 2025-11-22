---
sidebar_position: 1
title: "CHAPTER 1 — Introduction"
---

# CHAPTER 1 — Introduction

## Content

### Chapter Topics:

- The Basic Computer Cycle
- Machine Instructions
- Machine Language
- Assembly Language
- Language Translation
- Emulation
- Object Modules and Load Modules
- Separate Assembly

![PSP Mainboard](/Chapter-01/PSPmainboardSmall.jpg)

*Portable Game Device with Two MIPS Chips   (Image courtesy of Wikipedia)*

# CHAPTER 1 — Introduction

**Assembly 
language is used to write
programs in terms of the
basic operations of a processor.**
This is a tutorial in
the assembly language for the
MIPS32 processor chip.
This tutorial uses the SPIM simulator of the chip rather than actual hardware.

**The **architecture** 
of a computer is a logical description of
its components and its basic operations.**
In pure assembly language
**one assembly language statement corresponds
to one basic operation of the processor.**
When a programmer writes in assembly language 
the programmer is asking for
the basic operations of the processor.
The architecture of the processor
is visible in every statement of the program.

Pure assembly language is rare.
Most application programs are written in a **high level language**.
Even when assembly language is used it usually has been enhanced.
Features are added to it to make it more programmer-friendly.
This **extended** assembly language includes statements
that correspond to several basic machine operations.
The MIPS extended assembly language does this,
but the processor chip is still visible.

**Programs in high level languages such as C or Pascal
are (mostly) independent of the processor they
run on.**
**This is achieved by translating programs written in the high level language
into the particular machine language of the processor.**

This chapter starts out a tour of assembly language.

## Question

Do all processor chips have the same architecture?

(To make the best use of your time in reading this tutorial, pause,
and actually answer the question at the bottom of each page.)
