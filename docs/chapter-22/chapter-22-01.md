---
sidebar_position: 1
title: "CHAPTER 22  —  SPIM Exception Handler"
---

# CHAPTER 22  —  SPIM Exception Handler

## Content

### Chapter Topics:

- The `syscall`
    instruction.
- SPIM exception handler.
- Exception handler services:
    - halt program
- print string
- read string
- print integer
- read integer
- *Hello World* example.
- *Library Fine* example.

# CHAPTER 22  —  SPIM Exception Handler

Up
until now, your programs have been running with
SPIM used as a "bare machine" — a computer with no
machine code in it but your own.
Most computer systems
run under the control of an operating system.
Application programs use the services of
the operating system to do input and output
and other system tasks.

**SPIM does not have an operating system,
but it includes a small
exception handler that provides a
set of services that are a great help
in writing assembly programs.**

## Question

In an actual bare machine (real hardware) do you suppose that
it is easy to write a character to the terminal?
