---
sidebar_position: 4
title: "Wrong Type of Data"
---

Wrong Type of Data

## Answer

Of course. Pure ASCII files are rare, these days.

## Content

![DOS Type Command with executable file](/Chapter-05/dosTypeExe.gif)

Most files contain information encoded by schemes  other than ASCII.
**Executable files (.exe) mostly contain machine instructions,**
which, of course, are bit patterns.
The TYPE command will not be successful in interpreting
this information as character data.
The picture shows what happens when TYPE is sent an executable file:

**Only a limited range of byte patterns correspond to characters.**
The remaining patterns are sometimes called **unprintable characters**.
Sometimes, depending on the application, the unprintable patterns
correspond to special purpose characters or geometric shapes.

Most positions in the above picture are blank because TYPE could not
interpret the corresponding byte as a character.
Some positions are filled with special-purpose characters
when a byte accidentally corresponded to a special purpose character.
But some positions look like they correspond to legal ASCII.

## Question

Is some of the information in the executable file
encoded as ASCII?
