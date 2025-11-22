---
sidebar_position: 1
title: "CHAPTER  27 — Stack-based Linkage Convention"
---

# CHAPTER  27 — Stack-based Linkage Convention

## Content

### Chapter Topics:

- Saving registers on the stack
- The Stack-based Linkage Convention
- The prolog and epilog of the called subroutine
- The call and return of the caller
- Nested subroutine calls and the chain of activation
- History of linkage conventions
- Example program: converting user input to upper case

# CHAPTER  27 — Stack-based Linkage Convention

**The 
Simple Linkage Convention of the previous chapter
lacked some features of high level languages.**
This chapter adds some of these features 
in a Stack-based Linkage Convention.

## Question

In the  Simple Linkage Convention of the previous chapter,
can a subroutine call another subroutine?
