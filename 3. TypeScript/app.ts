function add(n1: number, n2: number, printResult: boolean, phrase: string){
    let result = n1 + n2
    if (printResult){
        console.log(phrase + result)
    }
    else{
        return phrase + result
    }
}

function add2(number: {
    first_number: number,
    second_number: number,
    phrase: string,
    printResult: boolean
}){
    let result = number.first_number + number.second_number
    if (number.printResult){
        console.log(number.phrase + result)
    }
    else{
        return number.phrase + result
    }


}

const number: {
    first_number: number,
    second_number: number,
    phrase: string,
    printResult: boolean
} = {
    first_number: 5,
    second_number: 1.5,
    phrase: "Answer is: ",
    printResult: true
}

const number2 = {
    first_number: 5,
    second_number: 1.5,
    phrase: "Answer is: ",
    printResult: true
}

const n1 = 5;
const n2 = 1.5;
const printResult = true;
const phrase = "Answer is: ";

const numberArray1 = ['sports', 'hobby'];
const numberArray2 = [1 ,2]
const numbberArray3 = ['sports', 'hobby', 1, 2]
const numbberArray4 = [true, 'sports', 1]
const numbberArray5= [true, 'sports', 1, number2]


add(n1, n2, printResult, phrase)