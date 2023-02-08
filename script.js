// OPGAVE 1


let information1 = {
    firstName : "Zahra",
    secondName : "Shahabi",
    age : 34,
    married: "true",
}


// "dot notation"
console.log(information1.firstName)
console.log(information1.secondName)
console.log(information1.age)
console.log(information1.married)


// "bracket notation"
console.log(information1["firstName"])
console.log(information1["secondName"])
console.log(information1["age"])
console.log(information1["married"])




// OPGAVE 2

let information2 = {
    firstName : "Zahra",
    secondName : "Shahabi",
    age : 34,
    married: "true",
    skills: [ "HTML", "CSS", "Java Script", "React"],

    system: [
        {type: "Laptop",  brand: "Lenovo"},
        {type: "Computer",  brand: "Dell"}
    
        // model: "ideapad 3",
    ],

    Teaching: {
        history: " Sante jose High School",
        matematic: "Tiger School",
        chemistery: "Noa Collage"
    }
}

information2.skills.forEach(element => {
    console.log(element)
})


// console.log(information2.system.type)
// console.log(information2.system.brand)
// console.log(information2.system.model)
information2.system.forEach(element => {
    console.log(element.type)
    console.log(element.brand)
})


console.log(information2.Teaching.history)
console.log(information2.Teaching.matematic)
console.log(information2.Teaching.chemistery)





// let student = {
//     name : "David Rayy",
//     sClass : "VI",
//     rollNo : 12 
// };

// let student = ["a", "b", "c"]
// for(x in student){
//     console.log(x)
    //console.log(student[x])
    // console.log(`${x} : ${student[x]}`)
// }

// for(let i = 0; i < student.length; i++){
//     console.log(student.i)
// }




