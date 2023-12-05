
// User input information for fortuneTeller
let motherName = prompt("Enter your mother's first name:")
console.log(motherName)
let streetName = prompt("Enter your street name:")
console.log(streetName)
let favouriteColour = prompt("Enter your favourite colour as a child:")
console.log(favouriteColour)
let age = prompt("Enter your age:")
console.log(age)
let number = prompt("Enter any number between 1 and 10:")
console.log(number)

//Work out the following
let marriageYear = Math.round(age/number)
console.log(marriageYear)
let children = age % number;
console.log(`In ${number} years you are going to meet your best friend named ${motherName} ${streetName}. You will get married in ${marriageYear} years and have ${children} children.
In ${age-number} years you are going to dye your hair ${favouriteColour}.`)
alert(`In ${number} years you are going to meet your best friend named ${motherName} ${streetName}. You will get married in ${marriageYear} years and have ${children} children.
In ${age-number} years you are going to dye your hair ${favouriteColour}.`)