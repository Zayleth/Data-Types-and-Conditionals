// ? Conditional Operator 
// sintaxis --> let result = (condition) ? value1: value2; 

// TASKS 

// 1. if (a string with zero)
// Will alert be shown?

if ("0") {
  alert( 'Hello' ); // Yes, alert will be shown. "0" ---> true value
}

////////////////////////////


// 2. The name of JavaScript
// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

/*
<!DOCTYPE html>
<html>

<body>
  <script>
    'use strict';

*/
    let oficialName = prompt ("What is the “official” name of JavaScript?", ""); 

    if (oficialName === "ECMAScript") {
        alert ("Right!");

    } else {
        alert ("You don’t know? ECMAScript!");
    }

/*
  </script>


</body>
</html>
*/

//////////////////////////


// 3. Show the sign
// Using if..else, write the code which gets a number via prompt and then shows in alert:

/*
1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number.
*/

let number = prompt ("Enter your number", "")

if (number > 0) {
    alert (1);

} else if (number < 0) {
    alert (-1);

} else {
    alert (0)
}

////////////////////////


// 4. Rewrite 'if' into '?'
// Rewrite this if using the conditional operator '?':

/*
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
*/

let result = (a + b < 4) ? "Bellow" : "Over"; 

//////////////////////


// 5. Rewrite 'if..else' into '?'
// Rewrite if..else using multiple ternary operators '?'.
// For readability, it’s recommended to split the code into multiple lines.

/*
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/

let login = prompt ("Hello! Tell me your rank in the company", "")

let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' : 
    '';

alert (message);
