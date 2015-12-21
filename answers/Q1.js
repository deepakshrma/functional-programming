//Q1:
var sen = "this is some sentence";
var senArr = sen.split(" ");
for (var i = 0; i < senArr.length; i++) {
    senArr[i] = senArr[i][0].toUpperCase() + senArr[i].substring(1);
}
senArr.join(" ");


var str = 'capitalize first character of words'
var splitArray = str.split(' ');
console.log(splitArray)
splitArray.forEach(function (data, index) {
    console.log(data)
    splitArray[index] = data[0].toUpperCase() + data.slice(1);
});
console.log(splitArray.join(' '));


function FLC(str) {
    var strA = str.split(' ');
    for (var i = 0; i < strA.length; i++) {
        strA[i] = strA[i][0].toUpperCase() + strA[i].slice(1);
    }

    for (var i = 0; i < strA.length; i++) {
        console.log(strA[i]);
    }

}

FLC("asa bsa csa");


//correct: functional
function capsFirstAlpha(stat, type) {
    return stat
        .split(type)
        .map(function (item) {
            return item[0].toUpperCase() + item.substring(1);
        })
        .join(type);
}

var p = function (t) {
// var up = t[0].toUpperCase();
// t[0] = up;
// console.log(t);
    var words = t.split(' ');
    var capitalized = '';
    for (var i = 0; i < words.length; i++) {
        var capsOn = words[i][0].toUpperCase();
        var rest = words[i].substring(1);
        capitalized = capitalized + capsOn + rest + ' ';
    }
    console.log(capitalized);
}

p("hello gaurav");