var res = [obj1, obj2, obj3].map(function(item) {
    return item.value;
});

console.log(res);



var values = [];
function a(){
    Array.prototype.addToArray = function (obj) {
        return this.push(obj.value);
    };
}


values.addToArray(obj1);
values.addToArray(obj2);



function accumulate(obj, values, log) {
// console.log(log);
    var c = values.push(obj.value);
    console.log(log, c);
    return values;
}

console.log(
    accumulate(obj2,
        accumulate(obj1, [], '1')
        , '2')
);

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

var accumulator = ValueAccumulator();
accumulator(obj1);
accumulator(obj2);
console.log(accumulator());




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
console.log(powerOfTwo(5)); // 32
