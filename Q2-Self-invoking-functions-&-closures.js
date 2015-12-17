/*
* Problem 2: Secure values to be modify
* */
var
    obj1 = {value: 1},
    obj2 = {value: 2},
    obj3 = {value: 3};
var values = [];
function accumulate(obj) {
    values.push(obj.value);
}
accumulate(obj1);
accumulate(obj2);
console.log(values); // Output: [obj1.value, obj2.value]
