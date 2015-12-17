/*
 * Solution 1: Secure values to be modify
 * */

//Design pattern to follow
var module = (function () {
    //private
    return {
        //public
    }
}());

var
    obj1 = {value: 1},
    obj2 = {value: 2};
var ValueAccumulator = function (values, object) {
    var values = [];
    var accumulate = function (obj) {
        if (obj) {
            values.push(obj.value);
            return values;
        }
        else {
            return values;
        }
    };
    return accumulate;
};
//This allows us to do this:
var accumulator = ValueAccumulator();
accumulator(obj1);
accumulator(obj2);
console.log(accumulator());
// Output: [obj1.value, obj2.value]
