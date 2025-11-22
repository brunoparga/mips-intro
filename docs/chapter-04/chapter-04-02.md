---
sidebar_position: 2
title: "Computer System Components"
---

Computer System Components

## Answer

Yes. The main components are about the same and work about the same way.

## Content

![computer system](/Chapter-04/computerSystem.gif)

The
diagram shows a general view of
how desktop and workstation computers
are organized.
Different systems have different details,
but in general all computers consist of
components (processor, memory, controllers, video)
connected together with a *bus*.

**Physically, a **bus** consists of many parallel wires,**
usually printed (in copper) on the main circuit board
of the computer.
Data signals, clock signals, and control signals are sent
on the bus
back and forth between components.
A particular type of bus follows a carefully written standard
that describes the signals that are carried on the wires and what
the signals mean.
The PCI standard (for example) describes the PCI bus used on most
current PCs.

**The
processor continuously executes the
machine cycle, executing machine instructions one
by one.**
Most instructions are for
an arithmetical, a logical, or a control
operation.
A machine operation often involves access to main storage
or involves an i/o controller.
If so, the machine operation puts data and control signals
on the bus, and (may) wait for data and 
control signals to return.
Some machine operations take place entirely inside
the processor (the bus is not involved).
These operations are very fast.

## Question

Do you think that the various components can put signals
and data on the bus at any arbitrary time?
