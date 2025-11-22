---
sidebar_position: 3
title: "Exception Handler Services"
---

Exception Handler Services

## Answer

It is a basic assembly instruction
that corresponds to a 32-bit machine instruction.

## Content

| Service | Code in $v0 | Arguments | Returned Value |
| --- | --- | --- | --- |
| print integer | 1 | $a0 `==` integer |   |
| print float | 2 | $f12 `==` float |   |
| print double | 3 | `($f12, $f13) == double` |   |
| print string | 4 | $a0 `==` address of string |   |
| read  integer | 5 |   | $v0 `==` integer |
| read  float | 6 |   | $f0 `==` float |
| read  double | 7 |   | `($f0, $f1) == double` |
| read  string | 8 | $a0 `==` buffer address
$a1 `==` buffer length |   |
| allocate memory | 9 | $a0 `==` number of bytes | $v0 `==` address |
| exit | 10 |   |   |


**Here
are the services of the SPIM exception handler.**
The following pages explain how to use them.
The *print services*write characters to the 
simulated monitor of SPIM.
The *read services* read characters from the keyboard
and (for numeric read services) convert character strings
into the appropriate type.

**Load register `$v0` with the code for the 
service you wish to use and load other specific registers with
parameters for the service.**

For example,
The ****exit** service gracefully stops the program.**
It takes no parameters, so all you need is the service code.
Until now we have been single stepping the program or crashing into the
bytes beyond the end of the program.

```mips
li      $v0,10      # code 10 == exit
syscall             # Return control to the
                    # operating system.  

```

## Question

What do you think the **exit** service 
does for a program running on a computer with a real operating system?
