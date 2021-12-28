"use strict"

const student = {

    name: "Max Mustermann",
    age: 21,
    subject: "Englisch",
    enrolled: true
}

student.name = "Karim"
student.hobby = "Fußball"
student["Land"] = "Tunesien"


console.log(student)

if (student.enrolled){
    console.log("Hallo Welt")
}

if ("subject" in student){
    console.log("Age exists!")
}

for (const key in student){
    console.log(key)
    console.log(student[key])
}

console.log(Object.keys(student))
console.log(Object.values(student))

console.log(Object.entries(student))
