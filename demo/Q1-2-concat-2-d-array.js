//soln 2:
const mergeArraysIntoOneF = (arrays) => arrays.reduce((prev, next) => prev.concat(next))
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

