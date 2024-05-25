// LOGICAL OPERATORS in JavaScript: 
// precedence

// 1. ! (NOT)
// 2. && (AND)
// 3. || (OR)

// TASKS

// What's the result of OR? What is the code below going to output?
alert ( null || 2 || undefined ); // 2 (first truthy value)

// What's the result of OR'ed alerts? What will the code below output?
alert ( alert(1) || 2 || alert(3) ); // 1 and alert is undefined so the operator keeps searching dor a truly value, which is 2

// What is the result of AND? What is this code going to show?
alert ( 1 && null && 2 ); // null (first falsy value)

// What is the result of AND'ed alerts? What will this code show?
alert ( alert(1) && alert(2) ); // alert(1) (alert is undefined and a falsy value)

// The result of OR AND OR. What will the result be?
alert ( null || 2 && 3 || 4 ); // 2 && 3 (if the first operand is truthy, AND returns the second operand:)
alert ( null || 3 || 4) // 3

// Check the range between
// Write an if condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.

if (age >= 14 && age <= 90) {
}

// Check the range outside
// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.

if (! (age >= 14 && age <= 90)) {
}

if (age < 14 || age > 90) {
}

// A question about "if". Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?

if (-1 || 0) alert ( 'first' ); // runs -1. ----> truly
if (-1 && 0) alert ( 'second' ); // doesn't run. 0  ----> falsy
if (null || -1 && 1) alert ( 'third' ); // run. null || 1 = 1


// Check the login
// 1. Write the code which asks for a login with prompt.
// 2. If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
// 3. The password is checked as follows:
// 4. If it equals “TheMaster”, then show “Welcome!”,
// 5. Another string – show “Wrong password”,
// 6. For an empty string or cancelled input, show “Canceled”

let visitorName = prompt ("Who's there", "");

if (visitorName === 'Admin') {
    let password = prompt('Password?', ''); // prompt - set of words in the form of an instruction or question that you can interact with

    if (password === 'TheMaster') {
        alert ("Welcome!"); // alert - displays an alert dialog with an optional message, and will wait until the user closes the dialog window
    
    } else if (password == '' || password === null) {
        alert ("Canceled"); 
    
    } else {
        alert ("Wrong password");
    }
    
} else if (visitorName == '' || visitorName === null) {
    alert ('Canceled');

} else {
    alert ('I do not know you');
}