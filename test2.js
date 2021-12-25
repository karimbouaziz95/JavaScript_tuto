"use strict"

console.log(1080 / 60)

let date = new Date(null);
date.setHours(Math.floor(1080/60));
date.setMinutes(1080%60)

console.log(date.getHours()+":"+date.getMinutes())