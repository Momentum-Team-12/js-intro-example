console.log('Yay, my JS is connected!!')
// declare variables and assign them values
let myString = 'This is gonna be some JS!'

let myNumber = 33

let myBoolean = true

console.log(myString, myNumber, myBoolean)


// an array is a collection of values enclosed in square brackets
let ourClass = ['Hillary', 'Gerardo', 'Shawna', 'Jessica', 'Stephen', 'Jamie', 'Manny', 'Ambar', 'Philip']

// the indexes are [0, 1, 2, 3, ...]

// we can get the length of an array
// length is an *attribute* of an array 
console.log("Class size:", ourClass.length)

// we can get items by their position (index), like a number in line 
// console.log(ourClass[0])
// console.log(ourClass[2])

console.log("Our class before:", ourClass)
// add Jada to our class (array) with push()
let newStudent = 'Jada'
ourClass.push(newStudent)
console.log(`Our class is now: ${ourClass} and contains ${ourClass.length} people`)
// remove Jada with pop()
// pop returns the item that was removed
// you can store it to use later
let formerStudent = ourClass.pop()
console.log(`Our class is now: ${ourClass} and contains ${ourClass.length} people`)
console.log(`${formerStudent} disenrolled from class`)

// please add a different person to our class and then print out the members of our class