---
sidebar_position: 16
title: "Running the Program"
---

Running the Program

## Answer

`$11` — sum of all: `0`

`$12` — sum of negative: `-3`

`$13` — sum of positive: `3`

When testing a program, it is convenient to use data
for which the correct results are obvious.

## Content

![SPIM continue menu](/Chapter-20/continueMenu.gif)

You
 can run the program by initializing the PC
(to 0x00400000) and repeatedly pushing single step (F10).
But when the array has many entries this is tedious.
On the version of SPIM for windows you can do
the following to start the program and run it to
completion:

- Initialize the PC (as usual).
- Hit F10 once (or more, if you want).
- Click on "Continue" in the "Simulator" menu.
- The program will execute until the PC goes beyond the end of the program.
- The simulator halts.

This procedure is not very elegant.
Set a breakpoint at the last instruction if you want.
Or set a breakpoint at the top of the loop so that
the loop body executes once per "Continue".

If you click "Go" in the menu,
the simulator tries to start with some code
that is not there and halts.
"Bare Machine" is set in the options menu,
so the extra code is not there.
Keep things this way for now, unless you
want to experiment.

## Question

Is a single run of the program enough to be certain
that it is correct?
