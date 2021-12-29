"use strict"

const fs = require("fs")
const rocketsAsString = fs.readFileSync("rockets.json", {encoding: "utf-8"})

const rockets = JSON.parse(rocketsAsString)
console.log(rockets[0]["rocket_name"])
console.log(rockets[0]["engines"]["propellant_2"])

for(const rocket of rockets){
console.log(rocket["rocket_name"])

}