---
sidebar_position: 7
title: "Example Output"
---

Example Output

## Answer

Yes, but now the code that starts at 0x00400000 
initializes exception handling and
is not what you wrote.
So you would single step over many instructions before you get to your program.

## Content

![SPIM display](/Chapter-22/helloOut.gif)

Here
is SPIM with the example "hello.asm" program.
When an exception file is loaded along with your program
(when the *Load exception file* setting is checked),**SPIM loads some initialization code starting at address
0x400000, and loads some data starting at 0x10000000.
So now you no longer know exactly where your
code and data are  in memory, so you must use symbolic addresses in your code.**

For example, in previous chapters you could set up a base register
to point at your data by doing something like this:
`lui $10,0x1000`.
This will no longer work, since you data does not start at 0x10000000.

Instead, do something like this 
`la  $s0,mydata`
to use `$s0` as a base.

## Question

What happens if the program were slightly modified, as follows:

```mips
main:
        li      $v0,4       # code 4 == print string
        la      $a0,string  # $a0 == address of the string
        addiu   $a0,1       # add one to the address
        syscall             # Invoke the operating system.
        . . .
        .data
string: .asciiz      "Hello SPIM!\n"

```
