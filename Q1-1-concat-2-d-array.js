//soln 2:
function mergeArraysIntoOneF(arrays) {
    return arrays.reduce(function (prev, next) {
        return prev.concat(next);
    })
}
console.log(
    mergeArraysIntoOneF(
        [
            [1, 4, 3],
            [6, 7],
            [2, 5]
        ]
    )
)
//output
//[ 1, 4, 3, 6, 7, 2, 5 ]

