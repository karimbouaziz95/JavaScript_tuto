"use strict"

const https = require("https")
const http = require("http")

const url = "https://api.spacexdata.com/v4/launches/latest"

https.get(url, res => {

    let data = ""
    res.on("data", chunk => {
        console.log("data:", chunk)
        data += chunk
    })

    res.on("end", () => {
        console.log(JSON.parse(data))
    })
    //console.log(res.statusCode)
})