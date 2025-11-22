---
sidebar_position: 5
title: "Temperature Range Tester"
---

Temperature Range Tester

## Answer

1

## Content

![thermometer](/Chapter-18/thermometer.gif)

Say that 
you are writing a control program for
a robot spray painter.
The allowed temperature range for the
paint is 30 degrees to 55 degrees Celsius (inclusive).
The device driver for the temperature sensor 
puts the temperature in register `$2`.

Your program will test if the unsigned integer
in register `$2` is in range.
If it is in range, 
register `$3` is set to 1,
otherwise to 0.

(Sensors often deliver unsigned data.
Pretend that our sensor delivers unsigned data
in the range of 0 to 100 in register `$2`.)

## Question

Sketch a flow chart for this program.
