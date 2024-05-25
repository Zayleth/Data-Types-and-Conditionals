// MDN CONDITIONALS

// Conditionals 1
// In this task you are provided with two variables:

// season — contains a string that says what the current season is.
// response — begins uninitialized, but is later used to store a response that will be printed to the output panel.

// We want you to create a conditional that checks whether season contains the string "summer", and if so assigns a string to response that gives the user an appropriate message about the season. If not, it should assign a generic string to response that tells the user we don't know what season it is.
// To finish off, you should then add another test that checks whether season contains the string "winter", and again assigns an appropriate string to response.

let season = 'summer';
// let response;

// Add your code here

if (season === "summer") {
    console.log ("It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.");
 
 } else if (season === "winter") {
    console.log ("Oh! It's too cold outside, take care and enjoy a hot chocolate and movies at home");
 
 } else {
    console.log ("Unknown station");
 }

// Don't edit the code below here!

const section = document.querySelector('.preview');
section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);
    
//////////////////////////////




// Conditionals 2
// For this task you are given three variables:

// machineActive — contains an indicator of whether the answer machine is switched on or not (true/false)
// score — Contains your score in an imaginary game. This score is fed into the answer machine, which provides a response to indicate how well you did.
// response — begins uninitialized, but is later used to store a response that will be printed to the output panel.

// You need to create an if...else structure that checks whether the machine is switched on and puts a message into the response variable if it isn't, telling the user to switch the machine on.
// Inside the first if...else, you need to nest another if...else that puts appropriate messages into the response variable depending on what the value of score is — if the machine is turned on. The different conditional tests (and resulting responses) are as follows:

/*
Score of less than 0 or more than 100 — "This is not possible, an error has occurred."
Score of 0 to 19 — "That was a terrible score — total fail!"
Score of 20 to 39 — "You know some things, but it\'s a pretty bad score. Needs improvement."
Score of 40 to 69 — "You did a passable job, not bad!"
Score of 70 to 89 — "That\'s a great score, you really know your stuff."
Score of 90 to 100 — "What an amazing score! Did you cheat? Are you for real?"
*/

let response;
let score = 75;
let machineActive = false;

// Add your code here

if (machineActive === true) {

    if (score < 0 || score > 100) {
        console.log ("This is not possible, an error has occurred.");
     
     } else if (score >= 0 && score <=19) {
        console.log ("That was a terrible score — total fail!");
 
     } else if (score >=20 && score <=39) {
        console.log ("You know some things, but it's a pretty bad score. Needs improvement.");
 
     } else if (score >=40 && score <=69) {
        console.log ("You did a passable job, not bad!");
 
     } else if (score >=70 && score <= 89) {
        console.log ("That\'s a great score, you really know your stuff.");
 
     } else if (score >=90 && score<=100) {
        console.log ("What an amazing score! Did you cheat? Are you for real?");
     }
 
 } else { // (machineActive === false)
     console.log ("Please, turn on the machine ;) ")
 }


 // Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${ score }`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);
    
//////////////////////////////




// Conditionals 3
// For the final task you are given four variables:

/*
machineActive — contains an indicator of whether the login machine is switched on or not (true/false).
pwd — Contains the user's login password.
machineResult — begins uninitialized, but is later used to store a response that will be printed to the output panel, letting the user know whether the machine is switched on.
pwdResult — begins uninitialized, but is later used to store a response that will be printed to the output panel, letting the user know whether their login attempt was successful.
We'd like you to create an if...else structure that checks whether the machine is switched on and puts a message into the machineResult

If the machine is on, we also want a second conditional to run that checks whether the pwd is equal to cheese. 
If so, it should assign a string to pwdResult telling the user they logged in successfully. 
If not, it should assign a different string to pwdResult telling the user their login attempt was not successful. 

We'd like you to do this in a single line, using something that isn't an if...else structure.
*/

// let machineActive = true;
let pwd = 'cheese';

let machineResult;
let pwdResult;

// Add your code here

if (machineActive === true) {
    machineResult = "Machine is on"; 

    switch (pwd) {
        case "cheese":
            pwdResult = "Successful login";
            break;

        default:
            pwdResult = "Unsuccessful login attempt";
            break;
    }

} else {
    machineResult = "The machine is off. Please turn it on.";
}

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = machineResult;
para2.textContent = pwdResult;

section.appendChild(para1);
section.appendChild(para2);

