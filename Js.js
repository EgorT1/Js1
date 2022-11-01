const first_number = prompt("first number");
const operator = prompt("mathematical opertor");
const second_number = prompt("Second_number");

if (operator === "+") {
    console.log(Number first_number + second_number);
} else if (operator === "-") {
    console.log(Number first_number - second_number);
} else if (operator === "*") {
    console.log(Number first_number * second_number);
} else if (operator === "/") {
    console.log(Number first_number / second_number);
} else if (operator === "**") {
    console.log(Number first_number ** second_number);
} else {
    alert("erorr")
}
.