##Introduction
####Benefits:
1.  Functional style are clear.
2.  Functional programming provides use of Lambda calculus  

####Cleaner code:  
*Functional programs are cleaner, simpler, and smaller. This simplifies debugging, testing,
and maintenance.*
```js
/**
*Problem 1:Write a function that converts a two-dimensional array into a one-dimensional array.
* */	
Solution 1: 
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
```
####Solution 2: 
```js
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
```
And using functional techniques, it could be written as follows:
```js
var varmerge2dArrayIntoOne2 = function(arrays) {
  return arrays.reduce( function(p,n){
    return p.concat(n);
  });
};
```
####Is JavaScript a functional programming language?
**What defines a functional programming language?**   
1.  A functional programming language is a language which enables programming in a functional style with higher order functions   
2.  A functional programming language is a language with first class functions    
3.  A functional programming language is a language with lambdas    
**Final:** A functional programming language is a language where you program only with pure functions and immutable data (no side effects)  
Reference: https://clojurefun.wordpress.com/2012/08/27/what-defines-a-functional-programming-language/  
```js
/*
* Problem 2: Secure values to be modify
* */
var
   obj1 = {value: 1},
   obj2 = {value: 2},
   obj3 = {value: 3};
var values = [];
function accumulate(obj) {
   values.push(obj.value);
}
accumulate(obj1);
accumulate(obj2);
console.log(values); // Output: [obj1.value, obj2.value]
```
####Self-invoking functions and closures
```js
/*
* Solution 1: Secure values to be modify
* */
var obj1 = {value: 1}, obj2 = {value: 2}, obj3 = {value: 3};
var ValueAccumulator = function () {
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
//This allows us to do this:
var accumulator = ValueAccumulator();
accumulator(obj1);
accumulator(obj2);
console.log(accumulator());
// Output: [obj1.value, obj2.value]
```
####Higher-order functions  
**Self-invoking functions are actually a form of higher-order functions. Higher-order
functions are functions that either take another function as the input or return a function as
the output.**
