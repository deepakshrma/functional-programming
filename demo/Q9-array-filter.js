/*
 *Problem: Collect only valid emails
 */
var emails = [
    'deepak@gmail.com',
    'deepak@gmail.c',
    'deepak1@gmail.co',
    'deepak*@gmail.com',
    'deepak+abc@gmail.in',
];
var emailReg = /\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/;
// Capitalize first character of word in a string.
console.log(
    emails.filter(function (s, i) {
       return emailReg.test(s);
    })
);