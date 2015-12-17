/**
 *Problem 1:Write a function that converts a two-dimensional array into a one-dimensional array.
 * */

//soln 1:
function mergeArraysIntoOne(arrays) {
    var count = arrays.length;
    var merged = [];
    var c = 0;
    for (var i = 0; i < count; ++i) {
        for (var j = 0, jlen = arrays[i].length; j < jlen; ++j) {
            merged[c++] = arrays[i][j];
        }
    }
    return merged
}
console.log(
    mergeArraysIntoOne(
        [
            [1, 4, 3],
            [6, 7],
            [2, 5]
        ]
    )
)
//output
//[ 1, 4, 3, 6, 7, 2, 5 ]

