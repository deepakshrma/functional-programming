/*
 *Problem: Capitalize first character of word in a sentence
 */
var str = 'hello world how ya doing?';
// Capitalize first character of word in a string.
String.prototype.kebabCase = function () {
    return this.split(' ').map( (s, i) => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
}
console.log(
    str.kebabCase()
);