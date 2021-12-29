"use strict"


const fs = require("fs")
fs.readdir(__dirname, (err, files) => {
    console.log(files)
})

/*
const sayHello = () => {
    console.log("sayHello")
}

//console.log(sayHello())

const a = sayHello

a()*/