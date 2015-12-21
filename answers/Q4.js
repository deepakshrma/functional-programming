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
    arr.zip(
        function (data) {
            return Math.sqrt(data, 2);
        }
    ).map(function (n) {
            return n * 2
        })
);


var User = function () {
    this.name = null;
    this.age = null;
    this.place = null;

    this.set = function (key, value) {
        this[key] = value
        return this;
    };
    this.print = function () {
        console.log('Name %s\tAge %d\tPlace %s', this.name, this.age, this.place);
    }
}
var gaurav = new User();
gaurav.set('name', 'Gaurav')
    .set('age', 24)
    .set('place', 'Delhi');

gaurav.print();