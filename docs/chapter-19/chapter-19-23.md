---
sidebar_position: 23
title: "Universal Flow Chart"
---

Universal Flow Chart

## Answer

Yes. It looks about the same as the
previous absolute value problem.

## Content

![Universal Flowchart](/Chapter-19/universalFlowChart.gif)

**Many programs have this over-all design.**
It is so common that it has been called the
**Universal Flow Chart.**

Almost always there is an initialization step,
then a step that processes data in a loop,
then finally a wrap-up step.
This is so common, you can nearly always
start with the this design for any program.

**A good first design step is to determine
what the main loop should do.**
Of course, there will likely be nested
loops and ifs, possibly several levels down.
But if you have correctly designed the
outer loop you have made great progress.

Typically, data comes in chunks:
character by character,
or line by line,
or integer by integer,
or token by token,
or .....

**The main loop should process the data chunk by chunk,
whatever the chunks are.**
It may take some thinking to determine what the chunks are,
but this is part of solution design.

## Question

Do these design ideas work only for assembly language?
