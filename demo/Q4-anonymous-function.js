function powersOf(x) {
    return function (y) {
        // this is an anonymous function!
        return Math.pow(x, y);
    };
}
powerOfTwo = powersOf(2);
console.log(powerOfTwo(1)); // 2
console.log(powerOfTwo(2)); // 4
console.log(powerOfTwo(3)); // 8
powerOfThree = powersOf(3);
