


/*
 *Problem: Find greatest among the given numbers
 */
var numbers = [1, 252, 56, 3636, 8, 1, -1];
console.log(
    numbers.reduce(function (p, n) {
        console.log(p, n);
        return Math.max(p, n);

    })
);


/*
 *Problem: Highest paid employee
 */
var employees = [
    {name: 'deepak', salary: 1000, id: '1'},
    {name: 'sanjay', salary: 1001, id: '2'},
    {name: 'deepak2', salary: 999, id: '3'}
];
console.log(
    employees.reduce(function (p, n) {
        return p.salary > n.salary ? p : n;
    })
);