"use strict"

const data = [
    {"firstname": "Karim", "age": 26, "enrolled": true},
    {"firstname": "Maryem", "age": 20, "enrolled": false}
]

const dataAsJson = JSON.stringify(data)
console.log(dataAsJson)
console.log(typeof dataAsJson)

const fs = require("fs")
fs.writeFileSync("ausgeben.json", dataAsJson)
