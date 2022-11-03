// const first_number = prompt("first number");
// const operator = prompt("mathematical opertor");
// const second_number = prompt("Second_number");

// if (operator === "+") {
//     console.log(Number first_number + second_number);
// } else if (operator === "-") {
//     console.log(Number first_number - second_number);
// } else if (operator === "*") {
//     console.log(Number first_number * second_number);
// } else if (operator === "/") {
//     console.log(Number first_number / second_number);
// } else if (operator === "**") {
//     console.log(Number first_number ** second_number);
// } else {
//     alert("erorr")
// }
const arr = [];
// console.log(arr.length)

const arr1 =[1, 2, 3, 4, 5, "saalut", true];
// console.log(arr1.length)

let obj = {
    name: "Ion",
    age: 2,
}

const array = [
    { name: "Ion", age: 2 },
    { name: "Ion", age: 25},
    {ame: "Ion", age: 10}
]

// console.log (array[1].name);

// array.forEach(element => {
//     console.log(element.name.includes("Ion"))
// });
    
function name(params) {
    params.forEach(element => {
        console.log(element);
    });
}

// name(array);
// name(arr1);

function name1() 
{
    console.log("salut")
    
}

// name1();
// name1();

function caculeatar(numarUnu, numarDoi, numarTrei) {
    let score = null
    score = numarUnu + numarDoi + numarTrei
    console.log(score)
}

// caculeatar(1,2,3)
let user = []
array.forEach(element => {
    if (element.age > 20) {
        user.push(element)
        console.log(element)
    }
    else {
        console.log("err")
    }
});
console.log(user)

let new_user = {
    name: "MaMaNeA",
    age: 85,
    gen: "f",
    copil: {
        name: "tioma",
        age: 2.6666666666,
        gen: "m"
    }
}
// new_user.oras = "Chisiniov"
// new_user.oras= "Balti"
// console.log(new_user)



// user.push(new_user)
// user.unshift(new_user)
// user.pop()
// user.shift()
// console.log(user)

let userFeminin = []
function genFiltre(array) {
    array.forEach(element => {
        if (element.gen === "m") {
            user.push(element)
        }
        
        if(element.gen === "f"){
            userFeminin.push(element)
        }
    });
}

genFiltre(array)
console.log(user)
console.log(userFeminin)
