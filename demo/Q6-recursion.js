var getLeafs = function (node) {
    if (node.childNodes.length == 0) {
        //	base	case
        return node.innerText;
    }
    else {
        //	recursive	case:
        return node.childNodes.map(getLeafs);
    }
}