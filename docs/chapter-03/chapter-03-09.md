---
sidebar_position: 9
title: "More Hex Practice  (Not as done at Mugworts)"
---

More Hex Practice(Not as done at Mugworts)

## Answer

- 0001 0001     11
- 0011 1001     39
- 1011 1111     BF
- 0100 0110     46
- 0000 0000     00  (be sure to show both zeros)

## Content

| Hexadecimal Names |
| --- |
| nibble | pattern
  name | nibble | pattern
  name |
| 0000 | 0 | 1000 | 8 |
| 0001 | 1 | 1001 | 9 |
| 0010 | 2 | 1010 | A |
| 0011 | 3 | 1011 | B |
| 0100 | 4 | 1100 | C |
| 0101 | 5 | 1101 | D |
| 0110 | 6 | 1110 | E |
| 0111 | 7 | 1111 | F |

**If there are not enough bits at the left to form a complete group
of four, add zero bits *to the left*,**
(but be sure that it is clear by context how many bits you
are describing).
For example:

```
1010000010000010     =  
1010 0000 1000 0010  =  A082

```

Another example:

```
10100110101111      =  
10 1001 1010 1111   =
0010 1001 1010 1111 = 29AF

```

**Usually '0x' is placed at the front of a pattern name** to show that
it is a hexadecimal pattern name:

```
0x0010  =  0000 0000 0001 0000
0xFACE  =  1111 1010 1100 1110

```

**Additional zeros creates a new pattern.**
The new pattern has its own name.
`0x0 = 0000` is a different pattern than `0x00 = 0000 0000`.
Sadly, people are not consistent about this,
and depending on context, both patterns
might be called "0x0".

Keep in mind that
*hexadecimal pattern names are used by humans for
talking about bit patterns.*
Inside the computer there are only bits and their patterns.
Hexadecimal is used in books and documents
(outside the computer)
to describe these bit patterns.

## Question

Name the following patterns; include  0x in the name:

- 0000 1010 0001 0001     0x0A11
- 0001 0010 1001 1010     0x129A
- 1111 1010 1101 1110     0xFADE
- 0011 0110 1100 0000     0x36C0
- 0000 0000 0000 0000     0x0000  (be sure to show all zeros)
