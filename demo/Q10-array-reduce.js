/*
 *Problem: Find greatest among the given numbers
 */
var numbers = [1, 252, 56, 3636, 8, 1, -1];

console.log(
    numbers.reduce((p, n) => Math.max(p, n))
);
/*
 *Problem: Highest paid employee
 */
var employees = [
    {name: 'deepak', salary: 1000, id: '1'},
    {name: 'sanjay', salary: 1001, id: '2'},
    {name: 'deepak', salary: 999, id: '3'}
];

console.log(
    employees.reduce((p, n) => p.salary > n.salary ? p : n)
);