---
sidebar_position: 18
title: "Another Conversion"
---

Another Conversion

## Answer

```mips
number = 247
247 div 16 = 15 r 7  →  digit[ 0 ] = 7

number =  15
15 div 16 =  0 r 15  →  digit[ 1 ] = F    
("15" is in base 10, "F" is the hex digit)

number = 0, so the algorithm is finished
Result: 24710 = 0xF7

```

## Content

To
 convert 247 from decimal to base 16,
repeatedly divide by 16, collecting the remainders right to left as
 the base 16 expression.
This is shown above.
Check the result by converting the base 16 expression
to decimal:

```
 
0xF7  =  F × sixteen + 7 × 1 
  =  15 × 16 + 7 
  =  240 + 7 = 24710 

```

**The algorithm is:**

- Divide the number by the base
- The remainder is the digit
- The quotient becomes the number
- Repeat until number is zero

**The digits come out right to left**

## Question

Convert 1033<sub>10</sub> to hex.
