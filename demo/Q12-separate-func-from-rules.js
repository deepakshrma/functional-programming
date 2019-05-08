var {employees} = require('./../resource/empolyee');

const findGender = get('gender')
console.log(employees.map(findGender));
const findName = get('name')
console.log(employees.map(findName));

var get = curry(function (property, object) {
    return object[property];
});

function curry(fn) {
    return  (...args) => {
        if (fn.length > args.length) return (...argsC) => fn.apply(null, args.concat(argsC))
        else return fn.apply(null, args);
    }
}