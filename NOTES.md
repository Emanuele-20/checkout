## Analysis

To correctly approach this exercise we have to:

1. Not allowed to pass an invalid input
2. Count and sum each element's value
3. Implement the special offer

## Steps to solve the special offer scenario

We want take any amount of As or Bs and apply the special offer.
* We must count how many As are in the value and see the result of that 
   count divided by 3:
   * string.match(/A/g).length   --> NUMBER OF As PRESENT 
   * (NUMBER OF As) / 3  --> SET OF 3 As

* Check what is the remainder:

   * (NUMBER OF As) % 3 --> NUMBER OF EXTRA As AFTER A SET OF 3 

* Multyply the number of sets of three As by the discounted price and add 
   the cost of one A
   * ((SET OF 3 As) * DISCOUNTED SET PRICE) + ((NUMBER OF EXTRA As) + SINGLE As PRICE)

* Apply it on the Bs special offer too.


Special thank you to my Makers Coach  - Eóin Power to guide me.