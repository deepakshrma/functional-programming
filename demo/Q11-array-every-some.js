/*
 *Problem: Validate All user in json
 */
var Data = require('./../resource/empolyee');

console.log(
    Data.employees.every(Data.validate)
)
/*
 *Problem: Validate some user in json
 */
console.log(
    Data.employees.some(Data.validate)
);