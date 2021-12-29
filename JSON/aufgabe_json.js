"use strict"

// https://github.com/r-spacex/SpaceX-API
// launches.json: https://api.spacexdata.com/v3/launches

// Datei einlesen. fs.readFileSync() ist Anti-Pattern, dazu
// aber später mehr.
const fs = require("fs")
const launches = JSON.parse(
  fs.readFileSync("launches.json", {encoding: "utf-8"})
)

console.log("Anzahl launches:", launches.length)

// Aufgaben:
// 
// 1) Wie viele Raketen hat SpaceX im Jahr 2018 gestartet?
//    1a) Wie viele davon erfolgreich
//    1b) Wie viele davon nicht erfolgreich?
// 
//    Hinweis: Schau' dir dazu die Eigenschaften "launch_year" und
//             "launch_success" an!
// 
//    Hinweis 2: Es kann sein, dass in manchen Jahren alle Rakentenstarts
//    zu 100% erfolgreich waren. In dem Fall soll dein Code trotzdem so
//    entwickelt sein, dass überprüft wird, ob der Startvorgang erfolgreich
//    war oder nicht! 

let launches_of_2018 = 0
let successed_launches = 0
let not_successed_launches = 0

for(const launch of launches){
    if(launch["launch_year"] === "2018"){
        launches_of_2018++
        if(launch["launch_success"] === true){
            successed_launches++
        }else{
            not_successed_launches++
        }
    }
}
console.log(launches_of_2018)
console.log(successed_launches)
console.log(not_successed_launches)


//
// 2) Wie viele kg Nutzlast wurden im Jahr 2018 *erfolgreich* ins Weltall 
//    gestartet?
//
//    Du findest die Nutzlast unter "rocket", "second_stage", "payloads",
//    dann das entsprechende Payload, und von dem die Eigenschaft
//    "payload_mass_kg".
//  
//    Hinweis: 
//    Bitte beachte, dass eine Rakete u.U. mehrere Satelliten haben kann!

let payload_mass_kg = 0

for(const launch of launches){
    if(launch["launch_year"] === "2018"){
        const payloads = launch["rocket"]["second_stage"]["payloads"]
        for(const payload of payloads){
            payload_mass_kg += payload["payload_mass_kg"]
        }
    }
}

console.log(payload_mass_kg)