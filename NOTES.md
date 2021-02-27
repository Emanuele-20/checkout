I want to take into account any amount of As and Bs

1. count how many As I have
2. see the result of that_count divided by 3, and what is the remainder
3. Thus, multiply the number of sets of three As by the discounted 
   price and add the cost of one (module)

To check how many times a set of 3 As appears, you could divide the number of As by 3

let numberOfAs = val.match(/A/g).length
let numbersOfBs = val.match(/B/g).length

let setOf3As = numberOfAs / 3
let setOf2Bs = numbersOfBs / 2

let extraAsAfterAset = numberOfAs % 3
let extraBsAfterASet = numbersOfBs % 2