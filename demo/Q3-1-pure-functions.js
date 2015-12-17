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
