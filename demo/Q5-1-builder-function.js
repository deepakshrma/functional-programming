//Return an array in javascript
Array.prototype.zip = function (callback) {
    callback = callback || function (data) {
        return data;
    }
    return this.map(callback);
}
//This would allow us to the following:
var arr = [4, 9, 16, 25];
console.log(
    arr.zip(function (data) {
        return Math.sqrt(data, 2);
    }).map(function (n) {
        return n * 2
    })
);