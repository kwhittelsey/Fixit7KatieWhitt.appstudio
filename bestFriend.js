// Fixit 7 AB Section
let firstFriend = prompt("Enter the name of your first of three friends.");
let secondFriend = prompt("Enter the name of your second of three friends.");
let thirdFriend = prompt("Enter the name of your third of three friends.");

var friendNames = [firstFriend, secondFriend, thirdFriend];
console.log(friendNames)

let bestFriend = parseInt(prompt("Enter \n 1 if your first person was your best friend \n 2 for the second \n 3 for the third"));
friendNames[1] = firstFriend
friendNames[2] = secondFriend
friendNames[3] = thirdFriend
let ultimateBestFriend = friendNames[bestFriend]
alert(`Your best friends name is ${ultimateBestFriend}.`)


if (ultimateBestFriend.startsWith('A')) {
   alert("Your best friends' name starts with A.")
} else if (ultimateBestFriend.startsWith('B')) {
   alert("Your best friends' name starts with B.")
} else {
   alert("Your name starts with something other than A or B.")
}