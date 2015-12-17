/*
 *Problem: Capitalize first character of word in a sentence
 */
var str = 'hello world how ya doing?';
// Capitalize first character of word in a string.
console.log(
    str.split(' ').map(function (s, i) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }).join(' ')
);