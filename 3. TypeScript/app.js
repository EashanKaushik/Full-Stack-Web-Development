function add(n1, n2, printResult, phrase) {
    var result = n1 + n2;
    if (printResult) {
        console.log(phrase + result);
    }
    else {
        return phrase + result;
    }
}
var n1 = 5;
var n2 = 1.5;
var printResult = true;
var phrase = "Answer is: ";
add(n1, n2, printResult, phrase);
