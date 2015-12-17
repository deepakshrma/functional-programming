/*
 *Find GCD among numbers
 */
function gcd(a, b) {
    if (b == 0) {
        //	base	case	(conquer)
        return a;
    }
    else {
        //	recursive	case	(divide)
        return gcd(b, a % b);
    }
}
console.log(gcd(12, 8));
console.log(gcd(100, 20));