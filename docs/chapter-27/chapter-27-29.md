---
sidebar_position: 29
title: "Complete Convert"
---

Complete Convert

## Answer

See below.

## Content

The
subroutine 
`convert` uses `$s0` as a character pointer
because `$a0` might be changed by `conChar`.
You might think that it would be a good idea to look inside
`conChar` to see if, in fact, it actually changes `$a0`.
But this is a violation of modularity.
It is much better to have a calling convention, and to follow it,
than to make modules depend critically on each other's quirks.

For example, `conChar` doesn't actually alter  `$a0`.
At least not now,
but later on,  `conChar` might be changed.
Then you (or the unfortunate programmer that inherited your program) would have to
look everywhere  `conChar` was used to see what assumptions were
made.

```mips

# convert -- convert a line to all capitals
#
# on entry:
#    $a0 -- address of input buffer
#    $a1 -- length of input buffer
#
# register use:
#    $s0 -- pointer into character buffer
#
# on exit:
#    no return values
         .text
         .globl  convert
convert:   
         sub     $sp,$sp,4        # push the return address
         sw      $ra,($sp)
         sub     $sp,$sp,4        # push $s0
         sw      $s0,($sp)

                                  # for ( p=buffer; *p!=0; p++ )
         move    $s0,$a0          # p=buffer

cloop:   lbu     $a0,($s0)        # get a char from the string
         beqz    $a0,endC         # exit if null byte
                                  # argument a0: char to convert
         jal     conChar          # convert character
         sb      $v0,($s0)        # put converted char into string                 
         addu    $s0,$s0,1        # p++
         b       cloop         
 
endC:   
         lw      $s0,($sp)        # pop $s0 
         add     $sp,$sp,4                                    
         lw      $ra,($sp)        # pop return address
         add     $sp,$sp,4         
         jr      $ra              # return to caller 

```

## Question

Would it be a good idea to look into  `doLines`
to see if `$s0` is important and actually needs to
be saved?
