/*
 *Problem: Validate All user in json
 */
var {employees} = require('./../resource/empolyee');
var emailReg = /\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/;
const validate =  (employee) => emailReg.test(employee.email) && !isNaN(employee.age)
console.log(
    employees.every(validate)
)
/*
 *Problem: Validate some user in json
 */
console.log(
    employees.some(validate)
);