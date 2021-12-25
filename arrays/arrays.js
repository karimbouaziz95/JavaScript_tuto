"use strict"

let students = [
    "Karim Bouaziz",
    "Mohamed Kechaou",
    "Omar Taktak",
    "Hamza Bensfar"
]


console.log(students)
console.log(typeof students)

console.log(students instanceof Array)

console.log(students.length)

students.push("Joker", "Batman")

console.log(students)
const lastElement = students.pop()
console.log(students)
console.log(lastElement)

students[0] = "Najah Karim Bouaziz"
console.log(students)


console.log(students.indexOf("Omar Taktak"))

students.sort()
console.log(students)

students.reverse()
console.log(students)

//students.splice()

//students.splice(0, 2)
//console.log(students)


students.splice(1,0,"Joker")
console.log(students)
