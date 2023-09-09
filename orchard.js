///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

let totalAcres = 0
for(let i = 0; i < fujiAcres.length; i++){
    totalAcres += fujiAcres[i]
}
for(let i = 0; i < galaAcres.length; i++){
    totalAcres += galaAcres[i]
}
for(let i = 0; i < pinkAcres.length; i++){
    totalAcres += pinkAcres[i]
}console.log(totalAcres)
//I am using a for loop here to loop over each of the acre arrays to add all the variables together to get a total acres picked count.

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

let numberOfdays = 7
let averageDailyAcres = totalAcres / numberOfdays
console.log(averageDailyAcres)
//to get the average number of acres pick each day I have divided the total number of acres by the number of days in the week. 

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

while(acresLeft > 0){
    days++
    acresLeft -= averageDailyAcres
}
console.log(days)
//This while loop will continue to run until there are no acres left and will then add 1 to the days variable each time it loops, and also subtract from the acres left variable the average number of acres picked each day, calculated in the last question.


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = []
for(let i = 0; i < fujiAcres.length; i++){
    fujiTons.push(fujiAcres[i] * 6.5)
}console.log(fujiTons)

let galaTons = []
for(let i = 0; i < galaAcres.length; i++){
    galaTons.push(galaAcres[i] * 6.5)
}console.log(galaTons)

let pinkTons = []
for(let i = 0; i < pinkAcres.length; i++){
    pinkTons.push(pinkAcres[i] * 6.5)
}console.log(pinkTons)
// These three for loops will push each value of their corresponding array of acres multiplied by 6.5 to create a new array which will display how many tons have been picked each day.

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiTonsTotal = 0
for(let i = 0; i < fujiTons.length; i++){
    fujiTonsTotal += fujiTons[i]
}
let fujiPounds = fujiTonsTotal * 2000
console.log(fujiPounds)


let galaTonsTotal = 0
for(let i = 0; i < galaTons.length; i++){
    galaTonsTotal += galaTons[i]
}
let galaPounds = galaTonsTotal * 2000
console.log(galaPounds)


let pinkTonsTotal = 0
for(let i = 0; i < pinkTons.length; i++){
    pinkTonsTotal += pinkTons[i]
}
let pinkPounds = pinkTonsTotal * 2000
console.log(pinkPounds)

//To convert the array we created in the last question to a total number of apples picked in tons I have looped over the array. I then multiplied that total by 2000 to convert it to pounds into the new variable. 

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = fujiPrice * fujiPounds
console.log(fujiProfit)

let galaProfit = galaPrice * galaPounds
console.log(galaProfit)

let pinkProfit = pinkPrice * pinkPounds
console.log(pinkProfit)

//Here I have just multiplied the price per pound by the variable we created in the last question to get the profit of each apple orchard.

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

var totalProfit = pinkProfit += galaProfit += fujiProfit
console.log(totalProfit)

//To calculate the total profit I have just added all the profits together that we calculated in the last question. 
