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
)
)
;

