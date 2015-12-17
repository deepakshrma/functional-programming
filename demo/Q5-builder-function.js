//	Instead	of	applying	the	functions	one	per	line...
var arr = [1, 2, 3, 4],
    arr1 = arr.reverse(),
    arr2 = arr1.concat([5, 6]),
    arr3 = arr2.map(Math.sqrt);
//	...they	can	be	chained	together	into	a	one-liner
console.log([1, 2, 3, 4].reverse().concat([5, 6]).map(Math.sqrt));
//	parentheses	may	be	used	to	illustrate
console.log(
    (
        (
            ([1, 2, 3, 4]).reverse()
        ).concat([5, 6])
    ).map(Math.sqrt)
);