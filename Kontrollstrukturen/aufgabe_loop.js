"use strict"

// Aufgabe 1:
//
// Strafaufgabe für einen Schüler an der Sprachschule!
// Er soll 25x schreiben: "Ich soll im Unterricht nicht stören".
// 
// Schreibe ein kleines Programm, was dies für den Schüler 
// erledigt ;)

/*
for(let i = 1; i <= 25; i++){
    console.log(i, "Ich soll im Unterricht nicht stören")
}
*/

// Aufgabe 2: Sprachschule
//
// Ein Kurs ist zu groß geworden. Teile die Teilnehmer daher
// gleichmäßig in 2 Kurse auf!
//
// Sorge dafür, dass dein Code auch mit anderen Kursgrößen
// funktioniert!
//
// Hinweis: Hier gibt es verschiedene Lösungswege - solange
// der Kurs in 2 Kurse aufgeteilt wird, die ungefähr gleich 
// groß sind, ist deine Lösung richtig!
//
// Tipp: Modulo!
let students = [
  "Max", 
  "Monika", 
  "Franziska", 
  "Bernd", 
  "Tobias", 
  "Andreas",
  "Karim",
  "Omar"
]

let students1 =[]
let students2 =[]


students1 = students.splice(0, Math.ceil(students.length/2))
students2 = students

console.log(students1)
console.log(students2)


// Aufgabe 3
// 
// Für eine Sprachschule soll ein Preisrechner entwickelt werden,
// der den Gesamtpreis bis hin zu einem bestimmten Level berechnet.
//
// Beispiel: Für das Level levels[0] = A1 beträgt der Preis exakt
// prices[0] = 400€.
//
// Für jeden Index kannst du also in der Variable "levels" nachschauen,
// wie dieses Level bezeichnt wird, und in der Variable "prices",
// wie viel dieses Kostet.
//
// Schreibe den Code für die folgenden Teilaufgaben möglichst universell,
// sodass wir z.B. ein Level A3 noch dazwischen schalten können, indem
// wir nur die Listen "levels" und "prices" anpassen!
// 
// a) Wie viel kostet es für einen Teilnehmer, die Sprache bis 
//    einschließlich des Levels "C1" zu lernen? Schreibe deinen Code so
//    universell, dass er auch mit anderen Level-Bezeichnungen / Preisen
//    zurecht käme.
//
// b) Wie viel kostet es, einen Teilnehmer von (einschließlich) A2 bis
//    einschließlich C1 zu bringen?
// 
// c) Ein Teilnehmer möchte (maximal) 1500€ in seine Sprachkenntnisse 
//    investieren. Bis zu welchem Level (bei A1 angefangen) können wir
//    ihn dafür unterrichten?

let levels = [
  "A1",
  "A2",
  "B1",
  "B2",
  "C1",
  "C2"
]

let prices = [
  400,
  500,
  550,
  600,
  650,
  700
]

let cost_until_level = 0
for(let i in levels){
    cost_until_level += prices[i]

    if (levels[i] === "A2") break;
}
console.log(cost_until_level)
console.log("-".repeat(40))

console.log("A1" < "B2")

let cost = 0

for(let i in levels){
    if(levels[i] >= "A2" && levels[i] <= "C1"){
        cost += prices[i]
    }
}
console.log(cost)
console.log("-".repeat(40))

let budget = 300

for(let i in levels){
    if(budget < prices[i]){
        if(i === "0"){
            console.log("Keinen Level!")
        }
        
        else{
            console.log("bis level: ", levels[i-1])
        }
        break
    }
    budget -= prices[i]
}
console.log("-".repeat(60))
console.log("AUFGABE 4")


// Aufgabe 4
//
// Unsere Sprachschule wächst dank unserer Hilfe immer weiter.
// Inzwischen sollen weitere Kurse hinzugefügt werden, und unser
// Code soll darauf vorbereitet werden.
// 
// Die Teilnehmer werden ja pro Kurs gespeichert. Bisher hatten
// wir dafür immer separate Variablen verwendet.
//
// Hier in dem Beispiel wäre das in der Schreibweise von vorher,
// students1 wäre der erste Kurs, students2 der Zweite:
//  >> let students1 = ["Max", "Monika"]
//  >> let students2 = ["Erik", "Erika"]
//
// Damit die Sprachschule wachsen kann, wird die Struktur in eine
// verschachtelte Liste umgestellt. Dadurch kann später ein 3. 
// Kurs hinzugefügt werden:
let studentsPerCourse = [
  ["Max", "Monika",], // Erster Kurs
  ["Erik", "Erika"], // Zweiter Kurs
]
// Aufgaben:
// 
//  a) Berechne die Anzahl der Teilnehmer in allen Kursen zusammen!
// 
let numberOfStudents = 0
for(let course of studentsPerCourse){
    numberOfStudents += course.length
}
console.log(numberOfStudents)

//  b) Der Teilnehmer "Max" musste seinen Sprachkurs absagen. Schreibe
//     ein Programm, was ihn aus seinem Kurs entfernt. Dieses Programm
//     soll auch in der Lage sein, z.B. "Erika" aus ihrem entsprechenden
//     Kurs entfernen zu können.
// 
//     Sorge auch dafür, dass wenn z.B. "Jens" seinen Sprachkurs absagen 
//     muss, dass darauf hingewiesen wird, dass Jens nicht ausgetragen
//     werden konnte, da er ja gar nicht eingeschrieben ist.
//
// Wichtig: Schreibe den Code so, dass er später auch mit 3 oder mehr
// Sprachkursen zurechtkommt!
//
console.log("-".repeat(40))
const studentToRemove = "Erik"

for(let course of studentsPerCourse){
    if(course.indexOf(studentToRemove) !== -1){
        course.splice(course.indexOf(studentToRemove), 1)
        break
    }
}
console.log(studentsPerCourse)

// Bonus-Aufgabe:
// 
//  c) Ein neuer Teilnehmer soll eingeschrieben werden. Schreibe ein 
//     Programm, welches diesen neuen Teilnehmern in den Sprachkurs 
//     platziert, der bisher noch am wenigsten Teilnehmer hat.
// 
//     Wie geht dein Programm mit dem Fall um, dass 2 Sprachkurse
//     genau gleich viele Teilnehmer haben? Ist das Verhalten
//     für eine Sprachschule akzeptabel?
console.log("-".repeat(40))
let empty_course_index = -1
for(const i in studentsPerCourse){
    let course = studentsPerCourse[i]
    if(empty_course_index === -1){
        empty_course_index = i
    }
    else{
        if(course.length < studentsPerCourse[empty_course_index].length){
            empty_course_index = i
        }
    }
}
console.log(empty_course_index)