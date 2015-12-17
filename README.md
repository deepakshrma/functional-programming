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

####Pure functions      
**Pure functions return a value computed using only the inputs passed to it. Outside variables and global states may not be used and there may be no side effects.**  
```js
// function that prints a message to the center of the screen
var printCenter = function (str) {
    var elem = document.createElement("div");
    elem.textContent = str;
    elem.style.position = 'absolute';
    elem.style.top = window.innerHeight / 2 + "px";
    elem.style['font-size'] = 50 + "px";
    elem.style.color = "#f00";
    elem.style.left = window.innerWidth / 2 + "px";
    document.body.appendChild(elem);
};
printCenter('hello world');
```
```js
// pure function that accomplishes the same thing
var printSomewhere = function (str, height, width) {
    var elem = document.createElement("div");
    elem.textContent = str;
    elem.style.position = 'absolute';
    elem.style.top = height;
    elem.style.left = width;
    return elem;
};
document.body.appendChild(printSomewhere('hello world',
    window.innerHeight / 2) + 10 + "px", window.innerWidth / 2) + 10 + "px"
));
```
####Anonymous functions    
```js
function powersOf(x) {
    return function (y) {
        // this is an anonymous function!
        return Math.pow(x, y);
    };
}
powerOfTwo = powersOf(2);
console.log(powerOfTwo(1)); // 2
console.log(powerOfTwo(2)); // 4
console.log(powerOfTwo(3)); // 8
```
####Method chains- Builder Pattern  
```js
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
```
####How to create s builder
**Return an array in javascript**   
```js
Array.prototype.zip = function(arr2) {
  // ...
}
This would allow us to the following:
arr.zip([11,12,13,14).map(function(n){return n*2});
```

