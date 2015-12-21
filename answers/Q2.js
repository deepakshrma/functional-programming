var result = [];
function flatten(arr) {
    arr.map(function (element) {
        if (element.length) {
            flatten(element);
        } else {
            return result.push(element);
        }
    });
}
var arr=[1,2,[3,4]];
flatten(arr);
console.log(result)




var twoDarray = [
    [1,3,4],
    [6,7],
    [2,5]
]
function convert1D(array){
    var final = [];
    array.map(function(ele){
        ele.map(function(value){
            final.push(value);
        })
    });
    return final;
}
console.log(convert1D(twoDarray));


var sample = [
    [1,2,3],
    [6,7],
    [2,5]
];

var result = sample.reduce(function(prev, current) {
    return prev.concat(current);
});

console.log(result);