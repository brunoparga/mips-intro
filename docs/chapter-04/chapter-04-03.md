---
sidebar_position: 3
title: "Input/output Controllers"
---

Input/output Controllers

## Answer

No. The various devices must cooperate somehow so their data
and signals don't get mixed.

## Content

The
 way in which devices connected to a bus cooperate is another part
of a bus standard.

****Input/output controllers** receive
input and output requests from the central processor,**
and then send device-specific control
signals to the device they control.
They also manage the data flow to and from the device.
This frees the central processor
from involvement with the details of controlling each device.
I/O controllers are needed only for those
I/O devices that are part of the system.

Often the I/O controllers are part of the electronics
on the main circuit board (the *mother board*)
of the computer.
Sometimes an uncommon device requires its own controller
which must be plugged into a connector (an expansion slot)
on the mother board.

**I/O controllers are sometimes called **device controllers**.**
The software that directly interacts with a device controller
is called a **device driver**.
When you install a new device on your computer (say, a new graphics board)
you must also install a device driver for it.

## Question

(Review:) Is there a difference between the memory used to
hold programs and the memory used to hold data?
